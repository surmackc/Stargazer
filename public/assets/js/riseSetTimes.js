function viewRiseSetTimes(arr) {
    $('#moonPhase').empty();

    var rise = arr[0].moondata[0].time;
    var set = arr[0].moondata[2].time;

    var viewDiv = $("<div>");
    var riseDiv = $("<h3>");
    var setDiv = $("<h3>")

    viewDiv.addClass("row col-12");
    riseDiv.text("Moonrise: " + rise);
    setDiv.text("Moonset: " + set);

    viewDiv.append(riseDiv);
    viewDiv.append(setDiv);

    $('#moonPhase').append(viewDiv);



};