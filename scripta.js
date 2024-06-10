$(document).ready(function() {
    // Set font sizes for each SVG container individually
    $('.svg-container:nth-of-type(1)').css('font-size', '3vh');
    // Specify the font size for SVG 1
    $('.svg-container:nth-of-type(2)').css('font-size', '3.6vh');
    // Specify the font size for SVG 2
    $('.svg-container:nth-of-type(3)').css('font-size', '4.8vh');
    // Specify the font size for SVG 3
    $('.svg-container:nth-of-type(4)').css('font-size', '3.7vh');
    // Specify the font size for SVG 4
    $('.svg-container:nth-of-type(5)').css('font-size', '3.7vh');
    // Specify the font size for SVG 5
    $('.svg-container:nth-of-type(6)').css('font-size', '5.2vh');
   
    $('#color-toggle').click(function() {
        $('.titre').toggleClass('green');

        if ($('.dove').hasClass('full-opacity')) {
            $('.dove').stop().animate({
                opacity: 0.45 // Set the default opacity value
            }, 130); // Adjust the duration as needed
            $('.dove').removeClass('full-opacity');
        } else {
            $('.dove').stop().animate({
                opacity: 1 // Set the full opacity value
            }, 850); // Adjust the duration as needed
            $('.dove').addClass('full-opacity');
        }
    });
    
    // Show static text when the page is loaded
    $('.static-text').css('opacity', '1');

    // Add event listeners for hover on text elements
    $('.text').on({
        mouseenter: function() {
            // Mouse over - hide static text, show animated text
            $(this).closest('.svg-container').find('.static-text').css('opacity', '0');
            $(this).closest('.svg-container').find('.animated-text').css('opacity', '1');
        },
        mouseleave: function() {
            // Mouse out - show static text, hide animated text
            $(this).closest('.svg-container').find('.static-text').css('opacity', '1');
            $(this).closest('.svg-container').find('.animated-text').css('opacity', '0');
        }
    });
});


