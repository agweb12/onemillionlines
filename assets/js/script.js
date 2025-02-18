let cardTeam = document.querySelectorAll(".card-team");
let imageArray = ["assets/img/team1.jpg", "assets/img/team2.jpg", "assets/img/team3.jpg", "assets/img/team4.jpg"];

let paragrapheCard = document.querySelectorAll(".mini-title p");

function changeImage() {
    cardTeam.forEach((card, index) => {
        card.addEventListener("mouseover", () => {
            card.style.background = `url(${imageArray[index]})`;
            card.style.backgroundSize = "100%";
            card.style.backgroundPosition = "100% 100%";
            card.style.backgroundRepeat = "no-repeat";
            card.style.transition = "all 1s ease-in-out";
            paragrapheCard[index].style.color = "white";
            paragrapheCard[index].style.transition = "all 1s ease-in-out";
        });
        card.addEventListener("mouseout", () => {
            card.style.background = "";
            card.style.backgroundSize = "cover";
            card.style.backgroundPosition = "100% 100%";
            card.style.backgroundRepeat = "no-repeat";
            card.style.transition = "all 2s ease-in-out";
            paragrapheCard[index].style.color = "black";
            paragrapheCard[index].style.transition = "all 1s ease-in-out";
        });
    });
}

changeImage();