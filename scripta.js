$("document").ready(function() {
    let originalText = $(".hooks").text(); // Store the original text
    let scrollTimeout; // Variable to store the scroll timeout

    // Function to scramble the text
    function scrambleText(text) {
        let scrambledText = ""; // Initialize the scrambled text
        for (let i = 0; i < text.length; i++) {
            if (Math.random() < 0.5) {
                // Randomly choose whether to keep the original character or scramble it
                scrambledText += text.charAt(i); // Keep the original character
            } else {
                // Replace the character with a random character
                scrambledText += String.fromCharCode(Math.floor(Math.random() * 94) + 33);
            }
        }
        return scrambledText; // Return the scrambled text
    }

    // Function to revert the text to its original state
    function revertToOriginal() {
        $(".hooks").text(originalText); // Revert to the original text
    }

    // Event listener for scroll event
    $(window).scroll(function() {
        // Clear the previous scroll timeout
        clearTimeout(scrollTimeout);
        // Scramble the text immediately
        $(".hooks").text(scrambleText(originalText));
        // Set a timeout to revert the text after 500 milliseconds
        scrollTimeout = setTimeout(function() {
            revertToOriginal();
        }, 500);
    });

    // Function to check if the user has reached the bottom of the page
    function isBottom() {
        return $(window).scrollTop() + $(window).height() >= $(document).height();
    }

    // Event listener for scroll event
    $(window).scroll(function() {
        // If the user has reached the bottom of the page, revert the text immediately
        if (isBottom()) {
            revertToOriginal();
        }
    });



    window.onscroll = function () {
        scrollRotate();
    };

    function scrollRotate() {
        let image = document.getElementById("hex");
        image.style.transform = "rotate(" + window.pageYOffset/8 + "deg)";
    }
});

