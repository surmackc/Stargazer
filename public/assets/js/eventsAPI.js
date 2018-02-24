$(document).ready(function () {

    $.ajax({
        url: '/events',
        type: 'GET'
    }).then(
        function () {
            console.log("All rows retrieved");
        }
    );

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