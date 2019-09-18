const shibbolethCharsetMiddleware = shibbolethHeaders => (req, res, next) => {
  const newHeaders = shibbolethHeaders
    .filter(header => req.headers[header])
    .reduce((acc, header) => ({
      ...acc,
      [header]: Buffer.from(req.headers[header], 'latin1').toString('utf8')
    }), req.headers)


  req.headers = {
    ...req.headers,
    ...newHeaders
  }

  next()
}

module.exports = shibbolethCharsetMiddleware
