# Cloudability

A simple javascript wrapper for Cloudability's API.

## Installation

Add it to your package.json file.

```javascript
{
  ...
  "dependencies": {
    ...
    "cloudability": "0.0.1"
  }
}
```

## Usage

```javascript
var Cloudability = require('cloudability');
var cloud = new Cloudability({apiKey: process.env.CLOUDABILITY_API_KEY});

query_params = { by:'vendor', period:'2014-12-01' }

cloud.query('billing_reports', query_params, function(error, rows) { console.log(rows) });
 
```

