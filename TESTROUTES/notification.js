$(function() {
    $(“.change - devour”).on(“click”, function(event) {
        var id = $(this).data(“id”);
        var newNotification = $(this).data(“newNotification”);
        var newDevourState = {
            devour: newNotification
        };
        // Send the PUT request.
        $.ajax(“/api/notification / ”+id, {
            type: “PUT”,
            data: newDevourState
        }).then(
            function() {
                console.log(“changed to”, newDevour);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
    // for sign up **************** go with this:
    $(“.create - form”).on(“submit”, function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();
        var new = {
            name: $(“#ca”).val().trim(),
            devour: $(“[name = devour]: checked”).val().trim()
        };
        // Send the POST request.
        $.ajax(“/api/notifications”, {
            type: “POST”,
            data: newCat
        }).then(
            function() {
                console.log(“created new notification”);
                // Reload the page to get the updated list
                location.reload();
            });
    });
});