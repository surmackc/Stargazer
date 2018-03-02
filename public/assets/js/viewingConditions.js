function getViewingConditions(arr) {
        
        $('#viewingTimes').empty()
    

        arr.forEach(res => {

        if (res) {

       

       
        var resCloudCoverage = res.forecast.clouds.all;
        var resDesc = res.forecast.weather[0].description;
        var resFrom = new Date(res.from);
        

        var convertedDate = "Date: " + resFrom.toDateString();
        var cloudCoverage = "Cloud coverage: " + res.forecast.clouds.all + "% ";
        var desc = "Conditions: " + res.forecast.weather[0].description;

        
        var image = $("<img>");
        var viewDiv = $("<div>");
        var cloudDiv = $("<h3>");
        var descDiv = $("<h3>");
        var fromDiv = $("<h4>");


        
        viewDiv.addClass("row col-12");
        viewDiv.addClass("viewCardClass");
        cloudDiv.text(cloudCoverage);
        descDiv.text(desc);
        fromDiv.text(convertedDate)

        

        // if (image.attr("src") === "") {
        //     image.attr("src", "assets/images/random-image.jpg");
        // }

        if (resCloudCoverage === 0){
            cloudDiv.html('<div class="icon sunny"><div class="sun"><div class="rays"></div></div></div>');
        }

        if (resCloudCoverage === 50){
            cloudDiv.html('<div class="icon cloudy"><div class="cloud"></div><div class="cloud"></div></div>');
        }
        // if (resCloudCoverage === "greenBlue"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffGreenBlue30.svg" id="difficultyImg"></h5>');
        // }
        // if (resCloudCoverage === "blue"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlue30.svg" id="difficultyImg"></h5>');
        // }
        // if (resCloudCoverage === "blueBlack"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlueBlack30.svg" id="difficultyImg"></h5>');
        // }
        // if (resCloudCoverage === "black"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlack30.svg" id="difficultyImg"></h5>');
        // }
        // if (resCloudCoverage === "dblack"){
        //     difficultyDiv.html('<h5><img src="assets/images/diffBlack30.svg" id="difficultyImg"></h5>');
        // }

        viewDiv.append(fromDiv)
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