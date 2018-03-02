function getViewingConditions(arr) {
        
        $('#viewingTimes').empty()
    

        arr.forEach(res => {

        if (res) {

       

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

        // viewDiv.empty()


        
        viewDiv.addClass("row col-12");
        viewDiv.addClass("viewCardClass");
        fromDiv.text("From: " + from);
        toDiv.text("To: " + to);
        cloudDiv.text(cloudCoverage);
        descDiv.text(desc);

        // $(".viewCardClass").empty()

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

        } else {

      var FailDiv = ("<div>");

      FailDiv.text("Sorry, Couldn't get any results!")

      $('#viewingTimes').append(FailDiv);

    }


    });


    

    
}