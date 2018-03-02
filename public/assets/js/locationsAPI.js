$(document).ready(function () {

    $('.add').on('submit', function (event) {
        event.preventDefault();
        var newData = {
            name: $('#input').val().trim()
        }

        $.ajax({
            url: '/locations',
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
            url: '/locations/' + id,
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
            url: '/locations/' + id,
            type: 'DELETE'
        }).then(
            function () {
                console.log('Deleted id: ' + id);
                location.reload();
            }
        );
    });
});

function viewAPILocations(arr) {
    arr.forEach(res => {

        var cardDiv = $("<div>")
        var viewDiv = $("<div>");
        var titleDiv = $("<h5>");
        var descDiv = $("<p>");
        var addressDiv = $("<h6>");
        var deleteLink = $("<a>");

        cardDiv.addClass("row col-12 card mb-3");
        viewDiv.addClass("card-body");
        titleDiv.addClass("card-title");
        addressDiv.addClass("card-subtitle mb-2 text-muted");
        descDiv.addClass("card-text");
        deleteLink.attr("href", "");

        titleDiv.text("Title: " + res.title);
        addressDiv.text("Location: " + res.address);
        descDiv.text("Description: " + res.description);
        deleteLink.data("id", res.id);
        deleteLink.text("Delete");

        viewDiv.append(titleDiv);
        viewDiv.append(addressDiv);
        viewDiv.append(descDiv);
        viewDiv.append(deleteLink);
        cardDiv.append(viewDiv);

        $('#darkSkyLocations').append(cardDiv);
    });
}