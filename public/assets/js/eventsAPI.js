$(document).ready(function () {
    $('.add').on('submit', function (event) {
        event.preventDefault();
        var newData = {
            name: $('#input').val().trim()
        };

        $.ajax({
            url: '/events',
            type: 'POST',
            data: JSON.stringify(newData),
            contentType: 'application/json'
        }).then(
            function () {
                console.log('Added data item');
                location.reload();
            }
        );
    });

    $('.update').on('click', function (event) {
        event.preventDefault();
        id = $(this).data("id");
        value = $(this).data("value");
        action = $(this).data("action");

        if (action === "++") {
            value++;
        } else if (action === "--") {
            value--;
        }

        $.ajax({
            url: '/events/' + id,
            type: 'PUT',
            data: JSON.stringify({ value }),
            contentType: 'application/json'
        }).then(
            function () {
                console.log('Updated id: ' + id);
                location.reload();
            }
        );
    });

    $('.delete').on('click', function (event) {
        event.preventDefault();
        id = $(this).data("id");

        $.ajax({
            url: '/events/' + id,
            type: 'DELETE'
        }).then(
            function () {
                console.log('Deleted id: ' + id);
                location.reload();
            }
        );
    });
});

function viewAPIEvents(arr) {
    arr.forEach(res => {

        var cardDiv = $("<div>")
        var viewDiv = $("<div>");
        var titleDiv = $("<h5>");
        var dateDiv = $("<h6>");
        var descDiv = $("<p>");
        var addressDiv = $("<h6>");
        var deleteLink = $("<a>");

        cardDiv.addClass("row col-12 card mb-3");
        viewDiv.addClass("card-body");
        titleDiv.addClass("card-title");
        dateDiv.addClass("card-subtitle mb-2 text-muted");
        descDiv.addClass("card-text");
        addressDiv.addClass("card-subtitle mt-2 text-muted");
        deleteLink.attr("href", "");

        titleDiv.text("Title: " + res.title);
        dateDiv.text("Date: " + res.date);
        descDiv.text("Description: " + res.description);
        addressDiv.text("Location: " + res.address);
        deleteLink.data("id", res.id);
        deleteLink.text("Delete");

        viewDiv.append(titleDiv);
        viewDiv.append(dateDiv);
        viewDiv.append(descDiv);
        viewDiv.append(addressDiv);
        viewDiv.append(deleteLink);
        cardDiv.append(viewDiv);

        $('#upcomingEvents').append(cardDiv);
    });
}