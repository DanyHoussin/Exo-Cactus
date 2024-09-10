function myFunction() {
    var x = document.getElementById("navbarphone");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }
  }

const sr = ScrollReveal({
    origin:'top',
    distance:'80px',
    duration:2500,
    delay:300,
})

sr.reveal('main img')
sr.reveal('.hautdepage, .careAbout', {delay:600})
sr.reveal('.newsText')
sr.reveal('#news .container', {delay:800})
sr.reveal('.list', {interval:100})