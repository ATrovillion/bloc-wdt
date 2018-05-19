//It is time to build HackerNews from scratch! But you need easy access to an API for a list of all the stories currently there. 
//A. Go to News API and click 'Get API Key' sign up for a free API key. B. 
//Use your API key to create a fetch using this URL: https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=<YOUR_API_KEY_HERE> 
//C. Loop through the result data, and for each story on HackerNews, create an <li> tag that contains the contents of the story.

let url = "https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=0a13181926e04fd78ddeb3b1aa4f111f";

fetch(url)
// fetch("https://newsapi.org/v2/top-headlines?sources=hacker-news&apiKey=0a13181926e04fd78ddeb3b1aa4f111f")
//   .then(r => {
//       console.log(r.json());
//   })
  .then(r => {
    return r.json();
  })
  .then(data => {
    let results = data.articles; // get the array of results from the data object
    let newsFeed = document.createElement("ul"); // create a new `<li>`
    let body = document.querySelector("body"); // attach to the `<body>` node of the DOM
    body.appendChild(newsFeed); // append the list to the body
    results.map(news => {
      // loop through each article object in the array of articles
      let newsItem = document.createElement("li"); // create a news item `<li>`
      newsItem.innerHTML =
        '<a href="' + news.url + '">' + news.title + "</a>"; // add the link to each li with each newes item's title as the text and link as the href
      newsFeed.appendChild(newsItem); // append each news item to the `<ul>`
    });
  })
  .catch(e => {
    console.log(`An error occurred: ${e}`);
  });


