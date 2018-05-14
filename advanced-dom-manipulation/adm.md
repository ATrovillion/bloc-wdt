>What is the difference between document.querySelector() and document.querySelectorAll()?
* `document.querySelector()` and `document.querySelectorAll()` both query the DOM to return reference to elements.
* The difference between the two is that `document.querySelector()` only returns the first element it finds that matches the query, whereas `querySelectorAll()` returns all the elements that match the query in an object that resembles an array.

>What is the difference between getElement(s)By and querySelector(All)?
* `getElement(s)By` is a little bit faster, but cannot query multiple tag or class names. `querySelector()` is slower, but is able to return matches to multiple tags or class names.

>What do JavaScript event handlers do and what is an example of one?
* Event handlers are functions that perform actions in response to the occurrence of an event.
* For example, the `onmouseover` even handler initiates some function or response to the user placing her cursor over something on the page.