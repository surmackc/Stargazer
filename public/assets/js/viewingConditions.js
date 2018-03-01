function getViewingConditions(arr) {
    arr.forEach(res => {
        var from = new Date(res.from);
        var to = new Date(res.to);
        var cloudCoverage = "Cloud coverage: " + res.forecast.clouds.all + "% ";
        var desc = "Conditions: " + res.forecast.weather[0].description;

        var viewDiv = $("<div>");
        var fromDiv = $("<li>");
        var toDiv = $("<li>");
        var cloudDiv = $("<li>");
        var descDiv = $("<li>");

        viewDiv.addClass("row col-12");
        fromDiv.text("From: " + from);
        toDiv.text("To: " + to);
        cloudDiv.text(cloudCoverage);
        descDiv.text(desc);

        viewDiv.append(fromDiv);
        viewDiv.append(toDiv);
        viewDiv.append(cloudDiv);
        viewDiv.append(descDiv);

        $('#viewingTimes').append(viewDiv);


    });
}