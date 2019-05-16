// using unsplash wrapper
// https://github.com/unsplash/unsplash-js

// unsplash.search.photos("dogs", 1)
//   .then(toJson)
//   .then(json => {
//     // Your code
//   });

import Unsplash from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "2d3c7249d2fbbd59ea641ff6a76a0e3668d30973628810f337a584ac5d4f1da5",
  secret: "23cde83232a48870d183b019cf9147d2dc81b39ee5b3264bfe4d5d001ebb8a3e",
  callbackUrl: "http://localhost:3000/"
});

const urlParams = new URLSearchParams(window.location.search);

console.log({ urlParams });

if (urlParams.get("code")) {
  unsplash.auth
    .userAuthentication(urlParams.get("code"))
    .then(r => r.json())
    .then(json => {
      unsplash.auth.setBearerToken(json.access_token);
      window.__unsplash = unsplash;
    });
} else {
  const authenticationUrl = unsplash.auth.getAuthenticationUrl(["public"]);

  window.location = authenticationUrl;
}
