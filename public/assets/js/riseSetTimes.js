function viewRiseSetTimes(res) {
    $('#moonPhaseText').empty();

    var rise = res[0].moondata[2].time;
    var set = res[0].moondata[1].time;

    var viewDiv = $("<div>");
    var riseDiv = $("<h3>");
    var setDiv = $("<h3>")

    viewDiv.addClass("row col-12");
    riseDiv.text("Moonrise: " + rise);
    setDiv.text("Moonset: " + set);

    viewDiv.append(riseDiv);
    viewDiv.append(setDiv);

    $('#moonPhaseText').append(viewDiv);



};