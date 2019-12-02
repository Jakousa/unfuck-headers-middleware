const shibbolethCharsetMiddleware = targetHeaders => {
                 if (!targetHeaders || !Array.isArray(targetHeaders)) {
                                  throw new Error('argument must be an array')
                 }

                 // lowercase headers because express lowercases req.headers headers
                 const shibbolethHeaders = targetHeaders.map(str => str.toLowerCase())
                 return (req, res, next) => {
                                  shibbolethHeaders.forEach(header => {
                                                   if (!req.headers[header]) return
                                                   req.headers[header] = Buffer.from(
                                                                    req.headers[header],
                                                                    'latin1'
                                                   ).toString('utf8')
                                  })
                                  next()
                 }
}

module.exports = shibbolethCharsetMiddleware
