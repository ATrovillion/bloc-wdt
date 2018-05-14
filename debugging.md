>Open your browser. Open up Chrome DevTools. Click on the Network tab on DevTools. Go to your bloc dashboard page. What Request Urls is Bloc using to get your information from the API?
* https://nexus-websocket-b.intercom.io/client-test
* https://api.segment.io/v1/i
* https://api.segment.io/v1/t
* https://api.segment.io/v1/p
* 

>Where can I find the cookies being used on the webpage using the Chrome DevTools?
* The "Application" tab allows you to access the cookies that are being used on the page.

>Where can you execute JavaScript in the DevTools?
* DevTools allows you to execute JavaScript in the "Console" tab.

>How can you modify existing CSS on your webpage using the DevTools?
* Under the "Elements" tab, there is a "Styles" tab that shows the CSS styles for the page, and you can also add style rules there.

>What happens to the code you have altered through the DevTools when you refresh the page?
* The altered code reverts to its initial form (back to its state prior to any additions).

>What are the different ways you can add breakpoints to your JavaScript for debugging?
* You can add a `console.log()` as a form of break for debugging purposes.
* Under the "Sources" tab, breakpoints can be added by opening the file containing the line of code you want to break. You can then go to the line number to the left of the line of code and click on it.
* You can also call `debugger` from the code to pause that line (this isn't done in the DevTools UI).
* Conditional line-of-code breakpoints can be set under the Sources tab. Open the file with the line of code you want to break on, go to the line number, right click on it, and select "Add conditional breakpoint".
* You can set event-lister breakpoints in the "Even Listener Breakpoints" pane of the "Sources" tab in Chrome DevTools.
* In the "Sources" tab, it is possible to pause on exceptions by clicking on "Pause on exceptions".
* To debug functions, you can call `debug(functionName)` for the function you want to debug. `Debug` works like a line-of-code breakpoint in the first line of the function.