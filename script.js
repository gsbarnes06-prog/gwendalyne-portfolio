const readMoreBtn = document.getElementById("read-more-btn")
const moreAboutMe = document.getElementById("more-about-me")
    readMoreBtn.addEventListener
    ("click", function() {  moreAboutMe.classList.toggle("hidden")
        if (moreAboutMe.classList.contains("hidden")) {readMoreBtn.textContent = "Read More";} else {readMoreBtn.textContent = "Read Less";}

});