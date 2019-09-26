# unfuck-utf8-headers-middleware

[![npm version](https://badge.fury.io/js/unfuck-utf8-headers-middleware.svg)](https://badge.fury.io/js/unfuck-utf8-headers-middleware)

Headers are converted from the standard iso-8859-1 / latin1 to UTF-8 by node.

Headers from shibboleth are already UTF-8.

https://issues.shibboleth.net/jira/projects/SSPCPP/issues/SSPCPP-2?filter=allopenissues

This express middleware reverts the conversion. Use it once before handling headers.

```js
const headersMiddleware = require('unfuck-headers-middleware')
const headers = [
  'uid',
  'givenname',
  'sn',
  'mail'
]

app.use(headersMiddleware(headers))
```
