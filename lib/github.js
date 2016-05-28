let request = require('request');
let Promise = require('bluebird');

export function getStatus() {
    return new Promise(function(resolve, reject) {
        request('https://status.github.com/api/status.json', (error, response, body) => {
            if (error) {
                reject(error);
            } else {
                resolve(response.body)
            }
        });
    });
}
