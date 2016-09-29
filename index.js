'use strict';

var request = require('request');

/**
 * Get Snapcode by snapchat username.
 *
 * @param {string} username.
 * @returns {Snapcode SVG|undefined} Return SVG object.
 */

function username(name, callback) {
    if(name.length > 0) {
      let propertiesObject = { username : name, type : 'SVG'};
      let url = "https://feelinsonice-hrd.appspot.com/web/deeplink/snapcode";
      request({url:url, qs:propertiesObject}, function (error, response, body) {
        if (!error && response.statusCode == 200) {
          callback(body);
        }
      });
    } else {
      return undefined;
    }
}

// Public API

module.exports = {
    username: username
};
