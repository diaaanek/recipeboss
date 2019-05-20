// using unsplash wrapper
// https://github.com/unsplash/unsplash-js

import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId: `2d3c7249d2fbbd59ea641ff6a76a0e3668d30973628810f337a584ac5d4f1da5`,
  secret: `23cde83232a48870d183b019cf9147d2dc81b39ee5b3264bfe4d5d001ebb8a3e`,
  callbackUrl: "http://localhost:3000/"
});

// created a resuable function "fetchImages" for unsplash api
//
export const fetchImages = keyword => {
  return unsplash.search
    .photos(keyword, 1, 4)
    .then(response => response.json());
};

// global scope
window.fetchImages = fetchImages;
