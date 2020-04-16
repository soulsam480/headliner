$(document).ready(() => {
    var url = "https://www.indiatoday.in/rss/home";
    var url3 = "https://www.news18.com/rss/india.xml";
    var url4 = "https://www.dnaindia.com/feeds/india.xml";
    const ul = document.getElementById("verge");

    function createNode(element) {
        return document.createElement(element); // Create the type of element you pass in the parameters
    }

    function append(parent, el) {
        return parent.appendChild(el); // Append the second parameter(element) to the first one
    }

    feednami.load(url3, result => {
        if (result.error) {
        } else {
            var entries = result.feed.entries;
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                return entries.map(entry => {
                    let li = createNode("li");
                    p = createNode("p");
                    link = createNode("a");
                    line = createNode("span");
                    h4 = createNode("h3");
                    link4 = createNode("a");

                    link4.setAttribute(
                        "onclick",
                        "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.description+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"
                    );
                    link4.innerHTML = `${'<img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
                    link4.setAttribute("class", "washare");
                    line.innerHTML = `${"<hr>"}`;
                    h4.innerHTML = `${entry.title + "  <small>-News 18</small>"}`;
                    p.innerHTML = `${entry.description}`;
                    link.setAttribute("href", entry.link);
                    link.setAttribute("target", "_blank");
                    append(li, h4);
                    append(li, link);
                    append(link, p);
                    append(li, link4);
                    append(li, line);
                    append(ul, li);
                });
            }
        }
    });
    feednami.load(url4, function (result) {
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
                    img = createNode("img");
                    link4 = createNode("a");

                    link4.setAttribute(
                        "onclick",
                        "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.description+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"

                    );
                    link4.innerHTML = `${'<img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
                    link4.setAttribute("class", "washare");
                    line.innerHTML = `${"<hr>"}`;
                    h4.innerHTML = `${entry.title + "  <small>-DNA India</small>"}`;
                    img.setAttribute("src", entry.enclosures[0].url);
                    img.classList.add("lazy");
                    img.setAttribute("data-original", entry.enclosures[0].url);
                    link.setAttribute("href", entry.link);
                    link.setAttribute("target", "_blank");
                    p.innerHTML = `${entry.description}`;
                    append(li, h4);
                    append(li, link);
                    append(link, img);
                    append(li, p);
                    append(li, link4);
                    append(li, line);
                    append(ul, li);
                });
            }
        }
    });
    feednami.load(url, function (result) {
        if (result.error) {
        } else {
            var entries = result.feed.entries;
            for (var i = 0; i < entries.length; i++) {
                var entry = entries[i];
                return entries.map(entry => {
                    let li = createNode("li"),
                        p = createNode("p");
                    h4 = createNode("h3");
                    line = createNode("span");
                    link4 = createNode("a");

                    link4.setAttribute(
                        "onclick",
                        "if (navigator.share) {navigator.share({title:'"+entry.title+"',text:'"+entry.description+"',url:'"+entry.link+"',}).then(() => console.log('Successful share'))}"

                    );
                    link4.innerHTML = `${'<img src="https://img.icons8.com/flat_round/64/000000/share--v1.png"/>'}`;
                    link4.setAttribute("class", "washare");
                    h4.innerHTML = `${entry.title + "  <small>-India Today</small>"}`;
                    p.innerHTML = `${entry.description}`;
                    line.innerHTML = `${"<hr>"}`;
                    p.setAttribute("id", "alink");

                    append(li, h4);
                    append(li, p);
                    append(li, link4);

                    append(li, line);
                    append(ul, li);
                });
            }
        }
    });
});
