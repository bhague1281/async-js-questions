/*
 * Question 1
 *
 * The code below is supposed to print a post from an API. Debug the error and apply the appropriate fix.
 * 
 * You may consult the documentation for `request` if needed.
 */

const request = require('request');
let data = null;

const makeRequest = (url) => {
    return request(url, (error, response, result) => {
        if (!error && response.statusCode === 200) {
            data = result;
        }
        data = null;
    });
}

makeRequest('https://jsonplaceholder.typicode.com/posts/1');
console.log(data);