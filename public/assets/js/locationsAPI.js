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

        var viewDiv = $("<div>");
        var titleDiv = $("<li>");
        var descDiv = $("<li>");
        var addressDiv = $("<li>");

        viewDiv.addClass("row col-12");
        viewDiv.data("id", res.id);
        titleDiv.text("Title: " + res.title);
        descDiv.text("Description: " + res.description);
        addressDiv.text("Location: " + res.address);

        viewDiv.append(titleDiv);
        viewDiv.append(descDiv);
        viewDiv.append(addressDiv);

        $('#darkSkyLocations').append(viewDiv);
    });
}