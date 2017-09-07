/*
 * Question 2
 *
 * The code below is throwing an error when attempting to call an API and print the title of
 * a post. Debug the error and apply the appropriate fix.
 * 
 * You may consult the documentation for `request-promise`, `ramda`, and JavaScript promises
 * if needed.
 */

const request = require('request-promise');
const R = require('ramda');

let data = null;

const validPost = R.allPass([R.has('userId'), R.has('id'), R.has('title'), R.has('body')]);

const validatePost = (post) => {
    if (!validPost(post)) {
        throw new Error('Invalid post received from the API');
    }
}

const getTitle = R.prop('title');

const printPostTitle = (postId) => {
    return request(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(validatePost)
        .then(JSON.parse)
        .then(getTitle)
        .then(console.log);
}

printPostTitle(1);