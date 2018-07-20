# Express camelCase response keys

Tiny Express middleware to convert JSON-response data into camelcase notation.

Response before middleware:

```
{ "some_field": "blabla" }
```

Response after middleware:

```
{ "someField": "blablabla" }
```

## Installation

```javascript
npm install express-camelcase-response-keys
```

## Usage

See [camelcase-keys](https://github.com/sindresorhus/camelcase-keys) for configuration options.

```javascript
app.use(require('express-camelcase-response-keys')(/* options here */));
```

### Example

```javascript
const camelcaseMiddleware = require('express-camelcase-response-keys');

app.use(camelcaseMiddleware({
    deep: true
}));
```
