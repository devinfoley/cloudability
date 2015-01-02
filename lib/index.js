var request = require('request');
var querystring = require('querystring');

var Cloudability = module.exports = function(options) {

  if (!options.apiKey) throw new Error('apiKey is required!');
  this.options = options;

  this.baseUrl = 'https://app.cloudability.com/api/1';

  this.url = function(endpoint, parameters) {
    parameters['auth_token'] = this.options.apiKey;
    return this.baseUrl + '/' + endpoint + '?' + querystring.stringify(parameters);
  }

  this.query = function(endpoint, parameters, callback) {
    url = this.url(endpoint, parameters);
    request(url, function(error, response, body) {
      callback(error, JSON.parse(body));
    });
  }

}


