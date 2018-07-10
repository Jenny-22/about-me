

document.addEventListener("DOMContentLoaded",
function() {
    // alert("Hello World!")

    let myPhoto = document.getElementById("personal-image")
    myPhoto.addEventListener("click", changeImage)


    function changeImage(){
        console.log(myPhoto.src);
        if (myPhoto.src == "about-me/IMG_0699.jpg"){
            myPhoto.src ="IMG_0942.PNG"
        }else{
            myPhoto.src = "IMG_0699.jpg"
        }
    }

// all code goes here
}) //END OF DOM CONTENT LOADED
