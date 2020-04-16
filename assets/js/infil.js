$(document).ready(() => {
  var vouge = "https://www.vogue.in/feed";
  var mens = "https://www.mensjournal.com/feed/";
  var camila = "https://camillestyles.com/feed/";
  const vo = document.getElementById("vouge");
  const me = document.getElementById("mens");
  const ca = document.getElementById("camila");

  function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

  feednami.load(vouge, result => {
    if (result.error) {
    } else {
      var entries = result.feed.entries;

      for (var i = 0; i < 2; i++) {
        var entry = entries[i];
        return entries.map(entry => {
          entry.description = entry.description.substr(0, 700) + "...";

          let li = createNode("li");
          link = createNode("a");
          line = createNode("span");
          h4 = createNode("h3");
          link4 = createNode("a");
          img = createNode("img");
          p = createNode("p");

          link4.setAttribute(
            "onclick",
            "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.title+"',url:'"+entry.link +"',}).then(() => console.log('Successful share'))}"
          );
          link4.innerHTML = `${' <img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
          link4.setAttribute("class", "washare");
          line.innerHTML = `${"<hr>"}`;
          h4.innerHTML = `${entry.title + " <small>-Vouge India</small>"}`;
          img.setAttribute("src", entry.image.url);
          link.setAttribute("href", entry.link);
          link.setAttribute("target", "_blank");
          h4.setAttribute("onclick", "window.open('" + entry.link + "')");
          p.innerHTML = `${entry.description}`;

          append(li, h4);
          append(link, img);
          append(li, link4);
          append(link, p);
          append(li, link);
          append(li, line);
          append(vo, li);
        });
      }
    }
  });
  feednami.load(mens, result => {
    if (result.error) {
    } else {
      var entries = result.feed.entries;

      for (var i = 0; i < 2; i++) {
        var entry = entries[i];
        return entries.map(entry => {
          entry.description = entry.description.substr(0, 600) + "...";

          let li = createNode("li");
          link = createNode("a");
          line = createNode("span");
          h4 = createNode("h3");
          link4 = createNode("a");
          img = createNode("img");
          p = createNode("p");

          link4.setAttribute(
            "onclick",
            "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.title+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"

          );
          link4.innerHTML = `${' <img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
          link4.setAttribute("class", "washare");
          line.innerHTML = `${"<hr>"}`;
          h4.innerHTML = `${entry.title + " <small>-Men's Journal</small>"}`;
          p.innerHTML = `${entry.description}`;
          link.setAttribute("href", entry.link);
          link.setAttribute("target", "_blank");
          h4.setAttribute("onclick", "window.open('" + entry.link + "')");
          img.setAttribute("src", entry.enclosures[0].url);
          append(li, h4);
          append(link, img);
          append(li, link4);
          append(link, p);
          append(li, link);
          append(li, line);
          append(me, li);
        });
      }
    }
  });
  feednami.load(camila, result => {
    if (result.error) {
    } else {
      var entries = result.feed.entries;

      for (var i = 0; i < 2; i++) {
        var entry = entries[i];
        return entries.map(entry => {
          entry.description = entry.description.substr(0, 600) + "...";
          let li = createNode("li");
          link = createNode("a");
          line = createNode("span");
          h4 = createNode("h3");
          link4 = createNode("a");

          link4.setAttribute(
            "onclick",
            "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.title+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"
            );
          link4.innerHTML = `${' <img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
          link4.setAttribute("class", "washare");
          line.innerHTML = `${"<hr>"}`;
          h4.innerHTML = `${entry.title + " <small>-Camille Styles</small>"}`;
          link.innerHTML = `${entry.description}`;
          link.setAttribute("href", entry.link);
          link.setAttribute("target", "_blank");
          h4.setAttribute("onclick", "window.open('" + entry.link + "')");
          append(li, h4);
          append(li, link);
          append(li, link4);

          append(li, line);
          append(ca, li);
        });
      }
    }
  });
});
