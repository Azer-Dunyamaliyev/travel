AOS.init();

const burger_icn = document.querySelector(".burger_icon")
const Close = document.querySelector(".close")

burger_icn.addEventListener("click",()=> {
    document.body.style.overflow = 'hidden';
    document.querySelector(".burger_menu").classList.add("active")
})

Close.addEventListener("click",()=> {
    document.body.style.overflow = '';
    document.querySelector(".burger_menu").classList.remove("active")
})

setTimeout(() => {
    document.querySelector(".home_content").classList.add("active")
}, 100);


const detTitles = document.querySelectorAll(".det_title");

detTitles.forEach((title, index) => {
    title.addEventListener("click", () => {
        const relatedContent = document.querySelectorAll(".details_content")[index];
        const relatedDrop = document.querySelectorAll(".drop")[index];

        relatedContent.classList.toggle("active");
        
        relatedDrop.classList.toggle("active");
        
        document.querySelectorAll(".details_content").forEach((content, contentIndex) => {
            if (contentIndex !== index) {
                content.classList.remove("active");
            }
        });
        
        document.querySelectorAll(".drop").forEach((drop, dropIndex) => {
            if (dropIndex !== index) {
                drop.classList.remove("active");
            }
        });
    });
});

function showBoxes() {
    document.getElementById("box__container").style.display = "grid";
    document.querySelector(".showBoxes").style.display = "none";
}












