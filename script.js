const clickToOpen = document.getElementById("click-to-open");
const birthdayVideo = document.getElementById("birthday-video");

clickToOpen.addEventListener("click", () => {
    // Add video controls when clicked
    birthdayVideo.setAttribute("controls", "");
    
    // Hide the front cover
    const cardContent = document.getElementById("card-content");
    const coverFront = document.getElementById("cover-front");
    cardContent.classList.add("opened");
    coverFront.style.display = "none";
});
