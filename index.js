const shibbolethCharsetMiddleware = targetHeaders => {
  if (!targetHeaders || !Array.isArray(targetHeaders)) {
    throw new Error('argument must be an array')
  }

  return (req, res, next) => {
    const newHeaders = targetHeaders
      .map(str => str.toLowerCase())
      .filter(header => req.headers[header])
      .reduce((acc, header) => ({
        ...acc,
        [header]: Buffer.from(req.headers[header], 'latin1').toString('utf8'),
      }), req.headers);

    req.headers = newHeaders

    next()
  }
}

module.exports = shibbolethCharsetMiddleware
