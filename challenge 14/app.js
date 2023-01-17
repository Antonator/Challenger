function active(){

    const shareIcon = document.querySelector(".share-icon");

    const socialContent = document.querySelector(".social-content");

    shareIcon.addEventListener("click", function(){
        socialContent.classList.toggle("hide");

    }) 

}

active();