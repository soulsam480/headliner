$(document).ready(() => {
  var verge = "https://www.theverge.com/rss/index.xml";
  var crunch = "https://techcrunch.com/feed/";
  var cnbc = "https://beebom.com/feed/";
  const ul = document.getElementById("verge");
  const cr = document.getElementById("crunch");
  const cn = document.getElementById("cnbc");

  function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

  function append(parent, el) {
    return parent.appendChild(el); // Append the second parameter(element) to the first one
  }

  feednami.load(verge, result => {
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
          h4.innerHTML = `${entry.title + " <small>-The Verge</small>"}`;
          link.innerHTML = `${entry.description}`;
          link.setAttribute("href", entry.link);
          link.setAttribute("target", "_blank");
          h4.setAttribute("onclick", "window.open('" + entry.link + "')");
          append(li, h4);
          append(li, link4);
          append(li, link);
          append(li, line);
          append(ul, li);
        });
      }
    }
  });
  feednami.load(crunch, function(result) {
    if (result.error) {
    } else {
      var entries = result.feed.entries;

      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        return entries.map(entry => {
          let li = createNode("li"),
            p = createNode("p");
          h4 = createNode("h3");
          link = createNode("a");
          line = createNode("span");
          link4 = createNode("a");

          link4.setAttribute(
            "onclick",
            "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.summary+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"
            );
          link4.innerHTML = `${'<img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
          link4.setAttribute("class", "washare");
          line.innerHTML = `${"<hr>"}`;
          h4.innerHTML = `${entry.title + " <small>-Tech Crunch</small>"}`;
          link.setAttribute("href", entry.link);
          link.setAttribute("target", "_blank");
          link.innerHTML = `${entry.summary}`;
          h4.setAttribute("onclick", "window.open('" + entry.link + "')");

          append(li, h4);
          append(li, link4);
          append(li, link);
          append(li, line);
          append(cr, li);
        });
      }
    }
  });

  feednami.load(cnbc, function(result) {
    if (result.error) {
    } else {
      var entries = result.feed.entries;

      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        return entries.map(entry => {
          let li = createNode("li"),
            h4 = createNode("h3");
          line = createNode("span");
          link4 = createNode("a");
          link = createNode("a");

          link4.setAttribute(
            "onclick",
            "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.title+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"
            );
          link4.innerHTML = `${'<img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
          link4.setAttribute("class", "washare");
          h4.innerHTML = `${entry.title + " <small>-Beebom"}`;
          link.innerHTML = `${entry.summary}`;
          line.innerHTML = `${"<hr>"}`;
          link.setAttribute("href", entry.link);
          link.setAttribute("target", "_blank");
          h4.setAttribute("onclick", "window.open('" + entry.link + "')");

          append(li, h4);
          append(li, link4);
          append(li, link);
          append(li, line);
          append(cn, li);
        });
      }
    }
  });
});
