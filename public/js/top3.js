$(document).ready(function () {
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true
      });
});


$(document).ready(function () {
    $("#upload_widget").on("click", function () {
        var myWidget = cloudinary.createUploadWidget({
            cloudName: 'top3project',
            uploadPreset: 'yb5bx9uo'
        }, (error, result) => {
            if (!error && result && result.event === "success") {
                console.log('Done! Here is the image info: ', result.info);
                //create an ajax call to send result.info.url to table of user as profileurl .
                $.ajax("/profile/setprofileurl", {
                    type: "POST",
                    data: {
                        profileurl: result.info.url,
                    }
                }).then(
                    function () {
                        console.log("created url route for profile picture");
                        alert("Hitting top3.js code");
                        // Reload the page to get picture.
                        location.reload();
                    });
            }
        });
        myWidget.open();
        console.log("hi");
    });
});

// entry page slide
// var slideIndex = 0;
// slideshow();

// function slideshow() {
//     var i;
//     var x = document.getElementsByClassName("favSlides");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     slideIndex++;
//     if (slideIndex > x.length) { slideIndex = 1 }
//     x[slideIndex - 1].style.display = "block";
//     setTimeout(slideshow, 5000);
// };

// //entry page text change
// var text = ["Explore", "Search", "Seek"];
// var counter = 0;
// var elem = document.getElementById("changeText");
// var inst = setInterval(change, 9000);

// function change() {
//     elem.innerHTML = text[counter];
//     counter++;
//     if (counter >= text.length) {
//         counter = 0;
//         // clearInterval(inst);
//     }
// }
