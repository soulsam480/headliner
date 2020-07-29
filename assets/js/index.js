const url =
  "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=05aefe5393fc46d7a6e21a27b16718c0"; // Get 10 random users
const ul = document.getElementById("news");
//code for creation of elements for the data display
function createNode(element) {
  return document.createElement(element); // Create the type of element you pass in the parameters
}

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}
//fetch() to get news from api
$(document).ready(async () => {
  await fetch(url, {
    mode: "cors",
    headers: {
      "x-requested-with": "XMLHttpRequest",
    },
  })
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      let authors = data.articles;
      return authors.map((item) => {
        let li = createNode("li"),
          h4 = createNode("h3");
        p2 = createNode("p");
        img = createNode("img");
        link = createNode("a");
        line = createNode("span");
        link4 = createNode("a");

        link4.setAttribute(
          "onclick",
          "if (navigator.share) {navigator.share({title:'" +
            item.title +
            "',text:'" +
            item.description +
            "',url:'" +
            item.url +
            "',}).then(() => console.log('share is successful'))}"
        );
        link4.innerHTML = `${'<img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
        link.setAttribute("href", item.url);
        link.setAttribute("target", "_blank");
        img.setAttribute("src", item.urlToImage);
        h4.innerHTML = `${item.title}`;
        link.innerHTML = `${"Link to article >>"}`;
        p2.innerHTML = `${item.description}`;
        link4.setAttribute("class", "washare");
        line.innerHTML = `${"<hr>"}`;

        append(li, h4);
        append(li, img);
        append(li, p2);
        append(li, link);
        append(li, link4);
        append(li, line);
        append(ul, li);
      });
    });
});
