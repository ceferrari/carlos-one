import { createServerRenderer } from "aspnet-prerendering";

export default createServerRenderer(function(params) {
  return new Promise(function(resolve) {
    var result = "<h1>Loading...</h1>" + "<p>Current time in Node is: " + new Date() + "</p>" + "<p>Request path is: " + params.location.path + "</p>" + "<p>Absolute URL is: " + params.absoluteUrl + "</p>";
    resolve({ html: result });
  });
});
