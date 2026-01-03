var toggle = document.getElementById("navToggle");
    var links = document.getElementById("navLinks");

    toggle.onclick = function () {
        links.classList.toggle("show");
    };