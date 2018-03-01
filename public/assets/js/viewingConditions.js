function getViewingConditions(arr) {
    arr.forEach(res => {
        var from = new Date(res.from);
        var to = new Date(res.to);
        var from = from.toDateString()
        var to = to.toDateString()

        var cloudCoverage = "Cloud coverage: " + res.forecast.clouds.all + "% ";
        var desc = "Conditions: " + res.forecast.weather[0].description;

        var image = $("<img>");
        var viewDiv = $("<div>");
        var fromDiv = $("<li>");
        var toDiv = $("<li>");
        var cloudDiv = $("<li>");
        var descDiv = $("<li>");

        // image.data("index", i);
        viewDiv.addClass("row col-12");
        fromDiv.text("From: " + from);
        toDiv.text("To: " + to);
        cloudDiv.text(cloudCoverage);
        descDiv.text(desc);

        // if (image.attr("src") === "") {
        //     image.attr("src", "assets/images/random-image.jpg");
        // }

        // if (difficultyDiv.text() === "green"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffGreen30.svg" id="difficultyImg"></h5>');
        // }
        // if (difficultyDiv.text() === "greenBlue"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffGreenBlue30.svg" id="difficultyImg"></h5>');
        // }
        // if (difficultyDiv.text() === "blue"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlue30.svg" id="difficultyImg"></h5>');
        // }
        // if (difficultyDiv.text() === "blueBlack"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlueBlack30.svg" id="difficultyImg"></h5>');
        // }
        // if (difficultyDiv.text() === "black"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlack30.svg" id="difficultyImg"></h5>');
        // }
        // if (difficultyDiv.text() === "dblack"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlack30.svg" id="difficultyImg"></h5>');
        // }

        viewDiv.append(fromDiv);
        viewDiv.append(toDiv);
        viewDiv.append(cloudDiv);
        viewDiv.append(descDiv);

        $('#viewingTimes').append(viewDiv);

        console.log(res)


    });
}