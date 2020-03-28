# Headliner :newspaper:
A progressive web app(PWA) which fetches news from an news API. [Visit Headliner](https://soulsam480.github.io/headliner) 
## Infiliner
infiliner is a rss :rss: news aggregator which collects and shows rss news articles from various news providers.
[Visit Infiliner](https://soulsam480.github.io/infiliner)
### How it's done ?
It uses the javascript **fetch()** API to get information from an API endpoint. It makes async request instead of using the traditional XMLHttp request. The information from the api gets transformed into a **json** object. As the news articles come as a js array its easy to map them to html elements uding js array method **map()**. 
```
fetch(url)
      .then(resp => resp.json()) // Transform the data into json
      .then(function (data) {
        let news = data.articles;
        return news.map(item => {
          let li = createNode("li"),
              h4 = createNode("h3");
              p2 = createNode("p");
              img = createNode("img");
              link = createNode("a");
              line = createNode("span");
              link2 = createNode("a")
              link3 = createNode("a")

```
The mapped elements with the information get injected into the browser DOM using the javascript DOM API **CreateElement()** to create the elements and **appendChild()** to append them to Browser DOM. It's done by two js functions:
```
function createNode(element) {
          return document.createElement(element); // Create the type of element you pass in the parameters
        }

 function append(parent, el) {
          return parent.appendChild(el); // Append the second parameter(element) to the first one
        }

```

### PWA :fire: :rocket:
According to the PWA standars this uses the **manifest.json** and **serviceworker**. The service worker gets installed onload and the custom add to home screen prompt is shown 
```
 //the code for custom add to homescreen prompt
  var deferredPrompt;

  window.addEventListener("beforeinstallprompt", function (e) {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;

    showAddToHomeScreen();
  });

  function showAddToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt");

    a2hsBtn.style.display = "block";

    document.getElementById("add").addEventListener("click", addToHomeScreen);
  }
  function addToHomeScreen() {
    var a2hsBtn = document.querySelector(".ad2hs-prompt"); // hide our user interface that shows our A2HS button
    a2hsBtn.style.display = "none"; // Show the prompt
    deferredPrompt.prompt(); // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(function (choiceResult) {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        a2hsBtn.style.display = "none"; // Show the prompt

        console.log("User dismissed the A2HS prompt");
      }

      deferredPrompt = null;
    });
  }
```
Accepting which will let users install it as a PWA. Headiner also runs offline. It shows an **offline.html** page when the internet is shut off.
### Dark Mode :fire:
Yes, Headliner has it's own dedicated darkmode. By one toggle at the top is switches to darkmode for better reading comfort.
```
 const body = document.body;
  function dToggle() {
    body.classList.toggle("darkmode");
  }
```
### Social Sharing :speech_balloon:
Headliner also lets users to share articles on various social networking platforms like whatsapp, facebook etc. Currently share to whatsapp is available. 
```
link3 = createNode("a")

link3.setAttribute("onclick", " FB.ui({display: 'popup',method: 'share',href:'" + item.url + "',}, function(response){});")
link2.setAttribute("href", "whatsapp://send?text=" + item.url)
link2.setAttribute("data-action", "share/whatsapp/share")
link2.innerHTML = `${'<img src="https://img.icons8.com/color/48/000000/whatsapp.png"/>'}`;
append(li, link2);
```
I'm also adding share to facebook and twitter option soon.:v:




