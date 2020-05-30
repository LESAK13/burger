$(function () {
    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: false
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        )
    });

    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newState = $(this).data("newstate");

        var newEatenState = {
            devoured: newState
        }
        
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatenState
        }).then(
            function () {
                location.reload();
            }
        )
    });
});

