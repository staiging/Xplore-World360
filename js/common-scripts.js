
(function($){
	$(function(){



        // Phone nav click function
        $('.hamburger').click(function () {
            $("body").toggleClass("navShown");
            $(".nav-wrap").fadeToggle()
        });


        
        if ($('.hero-slider-wrap').length) {
            $('.hero-slider-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    
                ]
            });
            $(window).on('resize', function () {
                $('.hero-slider-wrap').slick('resize');

            });
        }


        if ($('.advertisement-slider').length) {
            $('.advertisement-slider').slick({
                arrows: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    
                ]
            });
            $(window).on('resize', function () {
                $('.advertisement-slider').slick('resize');

            });
        }



        if ($('.testimonial-slider-wrap').length) {
            $('.testimonial-slider-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 9999,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    
                ]
            });
            $(window).on('resize', function () {
                $('.testimonial-slider-wrap').slick('resize');

            });
        }

        if ($('.review-testimonial-wrap').length) {
            $('.review-testimonial-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 580,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 1415,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                        }
                    },
                    
                ]
            });
            $(window).on('resize', function () {
                $('.review-testimonial-wrap').slick('resize');

            });
        }


        // variables 
        var toTop = $('.scroll-up-btn');
        // logic
        toTop.on('click', function() {
          $('html, body').animate({
            scrollTop: $('html, body').offset().top,
          });
        });


        if ($('.attraction-item-wrap').length) {
            $('.attraction-item-wrap').slick({
                arrows: true,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 1500,
                navigation:false,
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                centerMode: false,
                focusOnSelect: true,
                responsive: [

                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            swipe: true,
                        }
                    },
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 3,
                            swipe: true,
                        }
                    },
                    
                ]
            });
            $(window).on('resize', function () {
                $('.attraction-item-wrap').slick('resize');

            });
        }


        $(".faq-item").each(function(){
            var $this = $(this);
            $this.find(" > h6").on("click touch", function(){
                $(".faq-item").removeClass("accordion-active")
                $(".faq-item-content").slideUp();
                if($this.find(".faq-item-content:visible").length){
                    $(".faq-item").removeClass("accordion-active")
                    $(".faq-item-content").slideUp();
                }
                else{
                    $this.addClass("accordion-active")
                    $(".faq-item-content").slideUp();
                    $this.find(" > .faq-item-content").slideDown();
                }
            })
        })

        $(".tour-details-item-accordion-item").each(function(){
            var $this = $(this);
            $this.find(" > h6").on("click touch", function(){
                $(".tour-details-item-accordion-item").removeClass("tour-accordion-active")
                $(".tour-details-item-accordion-content").slideUp();
                if($this.find(".tour-details-item-accordion-content:visible").length){
                    $(".tour-details-item-accordion-item").removeClass("tour-accordion-active")
                    $(".tour-details-item-accordion-content").slideUp();
                }
                else{
                    $this.addClass("tour-accordion-active")
                    $(".tour-details-item-accordion-content").slideUp();
                    $this.find(" > .tour-details-item-accordion-content").slideDown();
                }
            })
        })


        if ($("select.styled-select").length) {
            $("select.styled-select").selectric({

            });
        }
        
		
	})// End ready function.
   
    
    
    
    

	

})(jQuery)

