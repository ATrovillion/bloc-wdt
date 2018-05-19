>Explain the difference between the request/response cycle.
* Assuming that the question is asking about the differences between the elements of the request/response cycle, the request is when you do something to interact with a website, such as initiating a HTTP by inputting the site's URL, opening an account, clicking a link, or submitting a form. The response is what the website does as a consequence of that request. For example, the response to inputting the URL could be the HTML and CSS from the site.

>List common response codes and their groupings.
* Response codes come in the following varieties:
  * Codes in the 200s indicate that the request was received and processed successfully.
  * Codes in the 300s indicate a redirect, which means the request was received but then redirected to another place (like a 301 redirect when a website's url has changed for some reason)
  * Codes in the 400s indicate that the requestor has made an error, such as asking for a resource that does not exist (404).
  * Codes in the 500s, which indicate that the server made an error. This indicates either that the server is down, or that the code on the server threw an error.

>Explain the common HTTP verbs: GET, POST, PATCH, PUT, and DELETE.
* `GET`: retrieves a page from a server. This is the default response to putting a URL into a browser or clicking on a link.
* `POST`: creates a new object on a server.
* `PATCH`: updates existing objects on the server.
* `PUT`: replaces existing objects on the server. Only should be used for complete replacements, not for updating objects.
* `DELETE`: deletes an object from the server.

>Explain the difference between synchronous and asynchronous code.
* Synchronous code waits for one instruction to execute before moving on to the next.
* Asynchronous code moves on to the next task without waiting.

>Explain what a JavaScript promise is.
* Promises are the responses to asynchronous requests. They resolve the objects associated with fetch operations.

>Explain why CORS exists and how we can work around it.
* CORS "Cross-origin resource sharing" allows resources on one web page to be requested from a site outside the domain of the original webpage. They use HTTP headers to let user agents have permission to access resources from servers on a different domain from the one currently in use.
* Restrictions on CORS can be circumnavigated by using a proxy site.

>Create a fetch request in JavaScript.

```
//retrieves baseball stats from mlb.com

let url = "https://cors-anywhere.herokuapp.com/http://m.mlb.com/lookup/json/named.psc_leader_hit_hr_dist.bam?season=2015&game_type=%27D%27&game_type=%27L%27&game_type%27W%27&game_type=%27F%27&min_hip_count=15";

fetch(url)
    .then(r => {
        return r.json();
    })
    .then(r => {
        console.log(r);
    })
    .catch(e => {
        console.log('An error occurred: ${e}');
    });
```