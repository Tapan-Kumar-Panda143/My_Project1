
/******************************************Responsive page***********************************************************/

$(document).ready(function () {
    $(document).ready(function () {
        $('.menu').click(function () {
            $('ul').toggleClass('active')
        })
    })
});


/*********************************  Video slider    ******************************************************/

    $('.bxslider').bxSlider({
        mode: 'horizontal',
        moveSlides :1,
        slideMargin :300,
        infiniteLoop: true,
        minSlides:1,
        maxSlides:1,
        speed:1200,
    });


/*************************************************    Team Members          *******************************************************************/

    if ($(".swiper-container").hasClass("team-member-slider")) {
        var swiper = new Swiper('.swiper-container', {
            slidePerView: 3,
            allowTouchMove: true,
            loop: true,
            centeredSlides: true,
            slideToclickedslide: true,
            effect: "coverflow",
            grabcursor: true,
            autoplay: false,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            coverflow: {
                rotate: 0,
                stretch: 100,
                depth: 200,
                modifier: 1,
                slideShadows: false
            },
            breakpoints: {
                767: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    effect: "slide",
                }
            }
        });

        /*********************************************       Counter           ***********************************************************************/
        $('.count').counterUp({
            delay: 10,
            time: 3000

        });

    }
        /*********************************************       Scroll Bottom bottom to top           ***********************************************************************/
        //Get the button:
        mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
        //Get the button:
        mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

// When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
        }