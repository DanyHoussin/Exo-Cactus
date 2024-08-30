function myFunction() {
    var x = document.getElementById("navbarphone");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  $(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 200) {
        $('#care').fadeIn();
    } else {
        $('#care').fadeOut();
    }

});