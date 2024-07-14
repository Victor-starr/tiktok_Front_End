document.addEventListener("DOMContentLoaded", function() {
    var moreButton = document.querySelector(".more-button");
    var dropdown = document.querySelector("#dropdown");

    moreButton.addEventListener("click", function() {
        if (dropdown.style.display === "none" || dropdown.style.display === "") {
            dropdown.style.display = "block";
        } else {
            dropdown.style.display = "none";
        }
    });
});
