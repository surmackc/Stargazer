function viewRSS(arr) {
    arr.forEach(res => {
        if (!res.title.includes("days ago")) {
            var title = res.title;
            var desc = res.description;
            var link = res.link;
    
            var viewDiv = $("<div>");
            var titleDiv = $("<h4>");
            var linkDiv = $("<a href=" + link + " target='_blank'>Link to Article</a>");
    
            viewDiv.addClass("row col-12");
            titleDiv.text(title);

            viewDiv.append(titleDiv);
            viewDiv.append(desc);
            viewDiv.append(linkDiv);
        }

        $('#celestialEvents').prepend(viewDiv);
    });
}