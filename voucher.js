/* Function to prevent the page refresh by mistake */
/* window.addEventListener('beforeunload', function (event) {
    event.preventDefault(); // Prevent the default action
    event.returnValue = ''; // Set the return value to trigger the default browser confirmation dialog
}); */








/* Code to reload the sounds to make sure there is no latency */
let clickSoundEffect = new Audio('click.ogg');
clickSoundEffect.preload = 'auto';

let successSoundEffect = new Audio('success.ogg');
successSoundEffect.preload = 'auto';

let errorSoundEffect = new Audio('error.ogg');
errorSoundEffect.preload = 'auto';

let isSoundEffectCooldown = false; // Flag to manage cooldown

function playSoundEffect(soundName) {

    if (isSoundEffectCooldown) return; // If in cooldown, do nothing

    isSoundEffectCooldown = true; // Set cooldown
    setTimeout(() => {
        isSoundEffectCooldown = false; // Reset cooldown after 150 milliseconds
    }, 150);

    // Play a sound effect only if the website is not muted
    let soundEffect;

    if (soundName === 'click') {
        soundEffect = clickSoundEffect;
    } else if (soundName === 'success') {
        soundEffect = successSoundEffect;
    } else if (soundName === 'error') {
        soundEffect = errorSoundEffect;
    }

    if (soundEffect) {
        soundEffect.currentTime = 0; // Ensure the audio plays from the start
        soundEffect.play();
    }
}





// Set initial values when the page loads
window.addEventListener('load', () => {
    document.getElementById('bed_type_input_id').value = 'King Size Bed';
    document.getElementById('total_unit_input_id').value = '01 Unit';
    document.getElementById('meal_plan_input_id').value = 'Bed & Breakfast For 2 Person';
    document.getElementById('guest_name_input_id').value = 'Mr. ';
});





/* Page Load Header Fade Animation */
setTimeout(function () {
    document.getElementById('body').style.opacity = "1";
}, 100);







/* Variable to store the company arabic name logo */
let companyArabicLogo = 'Not Found';



/* Dropdown company names functionality */
let companyNamesInput = document.getElementById('company_logo_input_id');

// Get the options within the dropdown
let companyNamesInputOptions = document.querySelectorAll('#company_names_dropdown h3');

companyNamesInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        playSoundEffect('click');


        /* if the clicked h3 element was delete then reset the 'company_logo_input_id' value */
        if (option.textContent === 'Delete') {
            companyNamesInput.value = '';
            companyArabicLogo = 'Not Found';

        } else {
            companyNamesInput.value = option.textContent; // Set input value to selected option

            companyArabicLogo = option.getAttribute('logo_arabic_name');
        }


        /* Reset the value of 'company_names_search_bar_input_id' after picking a hotek name */
        document.getElementById('company_names_search_bar_input_id').value = '';

        // Get the dropdown div associated with the input
        let dropdownDivOptions = document.getElementById('company_names_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

        // Reset the display of all <h3> elements
        dropdownDivOptions.forEach(option => {
            option.style.display = 'block'; // Show all options
        });


        hideOverlay(); // Hide overlay after selection
    });
});



/* Dropdown company names functionality */
let propertyNamesInput = document.getElementById('property_names_input_id');

// Get the options within the dropdown
let propertyNamesInputOptions = document.querySelectorAll('#property_names_dropdown h3');

propertyNamesInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        playSoundEffect('click');


        /* if the clicked h3 element was delete then reset the 'company_logo_input_id' value */
        if (option.textContent === 'حذف') {
            propertyNamesInput.value = '';

        } else {
            propertyNamesInput.value = option.textContent; // Set input value to selected option
        }


        /* Reset the value of 'company_names_search_bar_input_id' after picking a hotek name */
        document.getElementById('company_names_search_bar_input_id').value = '';

        // Get the dropdown div associated with the input
        let dropdownDivOptions = document.getElementById('company_names_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

        // Reset the display of all <h3> elements
        dropdownDivOptions.forEach(option => {
            option.style.display = 'block'; // Show all options
        });


        hideOverlay(); // Hide overlay after selection
    });
});



/* Dropdown company names functionality */
let totalUnitInput = document.getElementById('total_unit_input_id');

// Get the options within the dropdown
let totalUnitInputOptions = document.querySelectorAll('#total_unit_dropdown h3');

totalUnitInputOptions.forEach(option => {
    option.addEventListener('click', () => {

        // Play a sound effect
        playSoundEffect('click');


        /* if the clicked h3 element was delete then reset the 'company_logo_input_id' value */
        if (option.textContent === 'حذف') {
            totalUnitInput.value = '';

        } else {
            totalUnitInput.value = option.textContent; // Set input value to selected option
        }


        /* Reset the value of 'company_names_search_bar_input_id' after picking a hotek name */
        document.getElementById('company_names_search_bar_input_id').value = '';

        // Get the dropdown div associated with the input
        let dropdownDivOptions = document.getElementById('company_names_search_bar_input_id').closest('.searchable_names_dropdown_class').querySelectorAll('h3');

        // Reset the display of all <h3> elements
        dropdownDivOptions.forEach(option => {
            option.style.display = 'block'; // Show all options
        });


        hideOverlay(); // Hide overlay after selection
    });
});

















// Select all elements with the class 'search_bar_input_class'
let searchBarInputElements = document.querySelectorAll('.search_bar_input_class');

// Add event listeners to each search bar input element
searchBarInputElements.forEach(input => {

    // Add a click event listener to the input element
    input.addEventListener('click', () => {
        // Find the closest parent element with the class 'searchable_names_dropdown_class'
        let dropdownDiv = input.closest('.searchable_names_dropdown_class');

        // Set a smooth transition for the height property
        dropdownDiv.style.transition = 'height 0.2s ease-in-out';

        // Set the height of the dropdown div to 80vh when the search bar is clicked
        dropdownDiv.style.maxHeight = '80vh';
        dropdownDiv.style.minHeight = '80vh';
    });

    // Add an input event listener to the input element
    input.addEventListener('input', () => {
        // Get the trimmed and lowercased value of the input element
        let filter = input.value.trim().toLowerCase();

        // Find the closest parent element with the class 'searchable_names_dropdown_class'
        let dropdownDiv = input.closest('.searchable_names_dropdown_class');

        // Select all <h3> elements within the same dropdown div
        let options = dropdownDiv.querySelectorAll('h3');

        // Initialize a counter for the number of visible options
        let visibleCount = 0;

        // Loop through each option in the dropdown
        options.forEach(option => {
            // Get the trimmed and lowercased text content of the option
            let optionText = option.textContent.trim().toLowerCase();

            // If the filter is empty and less than 6 options are visible, show the option
            if (filter === '' && visibleCount < 6) {
                option.style.display = 'block'; // Display the option
                visibleCount++; // Increment the visible options count
            }
            // If the option text includes the filter, show the option
            else if (optionText.includes(filter)) {
                option.style.display = 'block'; // Display the option
            }
            // Otherwise, hide the option
            else {
                option.style.display = 'none'; // Hide the option
            }
        });
    });
});




// Event listeners for filtering h3 elements based on letteres inserted in the search bar input
/* (Input id name & the same input dropdown div id name ) */
document.getElementById('company_logo_input_id').addEventListener('input', () => {
    filterOptions('company_logo_input_id', 'company_names_dropdown');
});

document.getElementById('property_names_input_id').addEventListener('input', () => {
    filterOptions('property_names_input_id', 'property_names_dropdown');
});





























// Function to show the overlay
function showOverlay(clickedInputDropdownIdName) {

    // Disable scrolling
    document.documentElement.style.overflow = 'hidden';


    let clickedInputDropdown = document.getElementById(clickedInputDropdownIdName);

    // Store the reference to the last clicked input field
    lastClickedClintMovementsCityInput = document.getElementById(event.target.id);
    clickedInputDropdown.classList.add('show'); // Show the clicked input dropdown
    clickedInputDropdown.style.transition = 'transform 0.2s ease-in-out'; // Ensure transform transition is smooth

    overlayLayer = document.createElement('div'); // Create a new overlay element
    overlayLayer.className = 'black_overlay'; // Set the class name for styling
    overlayLayer.onclick = hideOverlay; // Set the click event listener to hide the overlay when clicked outside
    document.body.appendChild(overlayLayer); // Append overlay to the document body

    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
    }, 50);
}


// Function to hide the overlay and any visible dropdown
function hideOverlay() {

    // Re-enable scrolling
    document.documentElement.style.overflow = 'auto';


    // Check if any dropdown with the class name 'searchable_names_dropdown_class' is visible and hide it
    let visibleDropdown_1 = document.querySelector('.searchable_names_dropdown_class.show');
    if (visibleDropdown_1) {
        visibleDropdown_1.classList.remove('show'); // Remove 'show' class to hide dropdown
    }


    // Reset all 'searchable_names_dropdown_class' elements back to their default styling
    let dropdownDivElements = document.querySelectorAll('.searchable_names_dropdown_class');
    dropdownDivElements.forEach(dropdown => {
        dropdown.style.maxHeight = ''; // Reset maxHeight to default
        dropdown.style.minHeight = ''; // Reset minHeight to default
        dropdown.style.transition = ''; // Reset transition to default
    });

    // Hide the overlay if it exists
    if (overlayLayer) {
        overlayLayer.style.opacity = '0'; // Set opacity to 0 for smooth disappearance

        setTimeout(() => {
            if (overlayLayer) {
                document.body.removeChild(overlayLayer); // Remove overlay from DOM
                overlayLayer = null; // Reset overlay variable
            }
        }, 200); // Assuming 200ms is the duration of your opacity transition
    }
}





























/* Function to change the inserting hotel name method */
insertNewHotelNameMaually = function () {

    let iconElement = document.getElementById('insert_new_hotel_name_maually_icon_id');
    let propertyInput = document.getElementById('property_names_input_id');

    if (iconElement.style.background === 'rgb(0, 87, 116)') {

        // Change the icon color to green
        iconElement.style.background = 'rgb(0, 255, 0)';
        iconElement.style.color = 'black';

        // Disable onclick, readonly, and autocomplete
        propertyInput.onclick = null;
        propertyInput.readOnly = false;
        propertyInput.autocomplete = 'on';

    } else {

        // Change the icon color to the original color
        iconElement.style.background = 'rgb(0, 87, 116)';
        iconElement.style.color = 'white';

        // Enable onclick, readonly, and autocomplete off
        propertyInput.onclick = () => showOverlay('property_names_dropdown');
        propertyInput.readOnly = true;
        propertyInput.autocomplete = 'off';

    }
}




// Function to calculate and log total nights
function calculateTotalNights() {
    // Get the values of check-in and check-out dates
    let checkInValue = document.getElementById('check_in_input_id').value;
    let checkOutValue = document.getElementById('check_out_input_id').value;

    // Ensure both dates are provided before calculating
    if (checkInValue && checkOutValue) {
        // Parse the dates in the format "DD/MM/YYYY"
        let [checkInDay, checkInMonth, checkInYear] = checkInValue.split('/');
        let [checkOutDay, checkOutMonth, checkOutYear] = checkOutValue.split('/');

        // Create Date objects
        let checkInDate = new Date(`${checkInYear}-${checkInMonth}-${checkInDay}`);
        let checkOutDate = new Date(`${checkOutYear}-${checkOutMonth}-${checkOutDay}`);

        // Calculate the absolute time difference and convert to days
        let timeDiff = Math.abs(checkOutDate.getTime() - checkInDate.getTime());
        let totalNights = Math.ceil(timeDiff / (1000 * 3600 * 24));


        /* Set the total nights number in the input value */
        document.getElementById('total_nights_input_id').value = `${totalNights} Nights`;
    }
}

// Add event listeners for both input fields to calculate nights on change
document.getElementById('check_in_input_id').addEventListener('change', calculateTotalNights);
document.getElementById('check_out_input_id').addEventListener('change', calculateTotalNights);

// Function to extract the number of nights
function extractTotalNights(totalNightsInput) {
    // Use a regular expression to match digits at the start of the string
    let match = totalNightsInput.match(/^(\d+)/);
    if (match) {
        // Store the extracted number as a string in readyTotalNightsInput
        let readyTotalNightsInput = match[0]; // The matched number
        return readyTotalNightsInput; // Return or use this value as needed
    }
    return null; // Return null if no number is found
}









/* Create voucher pdf data elements */
enterVoucherData = function () {

    let companyLogoInput = document.getElementById('company_logo_input_id').value;
    let confirmationNumberInput = document.getElementById('confirmation_number_input_id').value;
    let propertyNameInput = document.getElementById('property_names_input_id').value;
    let totalUnitInput = document.getElementById('total_unit_input_id').value;
    let roomTypeInput = document.getElementById('room_type_input_id').value;
    let bedTypeInput = document.getElementById('bed_type_input_id').value;
    let checkInInput = document.getElementById('check_in_input_id').value;
    let checkOutInput = document.getElementById('check_out_input_id').value;
    let totalNightsInput = document.getElementById('total_nights_input_id').value;
    let mealPlanInput = document.getElementById('meal_plan_input_id').value;
    let customerNameInput = document.getElementById('guest_name_input_id').value;



    /* Make the 'Done' button in green color animation */
    document.getElementById('enter_voucher_data_button_id').style.backgroundColor = 'rgb(0, 255, 0)';
    setTimeout(() => {
        document.getElementById('enter_voucher_data_button_id').style.backgroundColor = 'white';
    }, 500);



    // Arrange content for the left side

    // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
    let propertyNameCapitalTextReadyText = propertyNameInput.toLowerCase().replace(/\s+/g, '-');

    // Convert the hotel name to lowercase and replace spaces with hyphens to create a suitable image filename
    let companyLogoSrcReadyText = companyLogoInput.toLowerCase().replace(/\s+/g, '-');

    let readyTotalNightsInput = extractTotalNights(totalNightsInput);

    // Check if the ion-icon element has a background color of rgb(0, 255, 0)
    let ionIcon = document.getElementById("insert_new_hotel_name_maually_icon_id");
    let isGreenBackground = ionIcon && window.getComputedStyle(ionIcon).backgroundColor === "rgb(0, 255, 0)";


    let allPdfContent = `
    
        <div id="voucher_company_logo_div">
            <img src="https://fanadiq-indonesia.com/صور-الشركات/${companyArabicLogo}.jpg" />
        </div>


        <div class="voucher_details_title_div">
            <h5>Booking Details:</h5>
        </div>


        <div id="voucher_booking_details_div">
        
            <div class="booking_detail_div">
                <h5>Confirmation Number:</h5>
                <h6>${confirmationNumberInput}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Property Name:</h5>
                <h6>${propertyNameInput}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Total Room:</h5>
                <h6>${totalUnitInput}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Room Type:</h5>
                <h6>${roomTypeInput}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Bed Type:</h5>
                <h6>${bedTypeInput}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Check In:</h5>
                <h6>${checkInInput}</h6>
            </div>

            <div class="booking_detail_div">
                <h5>Check Out:</h5>
                <h6>${checkOutInput}</h6>
            </div>


            ${readyTotalNightsInput !== null ? `
                <div class="booking_detail_div">
                    <h5>Total Nights:</h5>
                    <h6>${readyTotalNightsInput}</h6>
                </div>
                ` : ''}


            <div class="booking_detail_div">
                <h5>Meal Plan:</h5>
                <h6>${mealPlanInput}</h6>
            </div>

        </div>

        

        <div class="voucher_details_title_div">
            <h5>Customer Details:</h5>
        </div>


        <div id="voucher_customer_details_div">
            <div class="booking_detail_div" style=" border: none">
                <h5>Name:</h5>
                <h6>${customerNameInput}</h6>
            </div>
        </div>


        ${!isGreenBackground ? `
        <div id="voucher_property_image_div">
            <img src="https://fanadiq-indonesia.com/صور-الفنادق/${propertyNameCapitalTextReadyText}.jpg" />
            <h6>${propertyNameInput}</h6>
        </div>` : ''}
    `;




    /* Show the following elements */
    document.getElementById('export_package_pdf_div_id').style.display = 'block';

    /* Reset the inner content of the 'voucher_pdf_file_structure_div' and then set the new one */
    document.getElementById('voucher_pdf_file_structure_div').innerHTML = '';
    document.getElementById('voucher_pdf_file_structure_div').innerHTML = allPdfContent;
}

















/* Function to open choosing pdf file name box */
openPdfDownloadBox = function () {
    // Create overlay layer
    let overlayLayer = document.createElement('div');
    overlayLayer.className = 'black_overlay';
    document.body.appendChild(overlayLayer);



    // Show overlay layer with smooth opacity transition
    setTimeout(() => {
        overlayLayer.style.opacity = '1'; // Delayed opacity transition for smooth appearance
        // Slide to the center of the screen
        namePdfBoxDiv.style.transform = 'translate(-50%, -50%)';
    }, 100);


    // get the name pdf file box
    let namePdfBoxDiv = document.getElementById('name_pdf_file_div');



    let voucherHotelName = document.getElementById('property_names_input_id').value;
    let voucherGuestName = document.getElementById('guest_name_input_id').value;


    document.getElementById('pdf_file_name_input_id').value = `VCR ${voucherHotelName} For ${voucherGuestName}`


    /* Function to hide the name pdf file box */
    closeDownloadPdfBox = function () {
        // Hide edit/delete options div
        namePdfBoxDiv.style.transform = 'translate(-50%, -100vh)';

        // Hide overlay layer with opacity transition
        overlayLayer.style.opacity = '0';

        // Remove overlay and edit/delete div from DOM after transition
        setTimeout(() => {
            document.body.removeChild(overlayLayer);
        }, 300); // Match transition duration in CSS
    }

};


/* Function to check if the 'pdf_file_name_input_id' input contain value or no */
checkThePdfNameToDownload = function () {

    /* If there is no value then change the 'check_pdf_name_button' color */
    if (document.getElementById('pdf_file_name_input_id').value === '') {
        document.getElementById('check_pdf_name_button').style.backgroundColor = 'red';
        setTimeout(() => {
            document.getElementById('check_pdf_name_button').style.backgroundColor = 'white';
        }, 200);


        /* If there is any value then pass the value to the 'downloadPdfWithCustomName' function */
    } else {
        document.getElementById('check_pdf_name_button').style.backgroundColor = 'rgb(0, 255, 0)';
        setTimeout(() => {
            document.getElementById('check_pdf_name_button').style.backgroundColor = 'white';
        }, 200);


        let pdfNameReadyText = document.getElementById('pdf_file_name_input_id').value;
        downloadPdfWithCustomName(`${pdfNameReadyText}`);
    }

}


/* Download the pdf file with the given name */
downloadPdfWithCustomName = function (pdfName) {
    let { jsPDF } = window.jspdf;
    let section = document.getElementById('voucher_pdf_file_structure_section');

    // Create a new jsPDF instance with A4 dimensions
    let pdf = new jsPDF('p', 'mm', 'a4');
    let pdfWidth = pdf.internal.pageSize.width;
    let pdfHeight = pdf.internal.pageSize.height;

    // Function to add content to the PDF
    let addContentToPDF = function (canvas) {
        let imgData = canvas.toDataURL('image/jpeg', 1.0); // Use JPEG format with highest quality
        let contentWidth = canvas.width;
        let contentHeight = canvas.height;

        // Calculate the aspect ratio to fit content within the PDF page
        let ratio = Math.min(pdfWidth / contentWidth, pdfHeight / contentHeight);
        let imgWidth = contentWidth * ratio;
        let imgHeight = contentHeight * ratio;

        // Calculate positions to center the content
        let posX = (pdfWidth - imgWidth) / 2;
        let posY = (pdfHeight - imgHeight) / 2;

        // Add centered image to the PDF
        pdf.addImage(imgData, 'JPEG', posX, posY, imgWidth, imgHeight);
    };

    // Show all elements with the class name before capturing the canvas
    let showImages = function () {
        let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
        images.forEach(img => {
            img.style.display = 'inline';
        });
    };

    // Hide all elements with the class name after saving the PDF
    let hideImages = function () {
        let images = document.querySelectorAll('.inserted_package_data_section_page_image_class');
        images.forEach(img => {
            img.style.display = 'none';
        });
    };

    // Generate PDF with centered content from the voucher section
    html2canvas(section, { scale: 2 }).then(canvas => {
        showImages();

        // Add canvas content to PDF
        addContentToPDF(canvas);

        // Save the PDF
        pdf.save(pdfName);

        // Hide images after saving the PDF
        hideImages();
    });
};


















// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsModuleScript = document.createElement('script');
ioniconsModuleScript.type = 'module';
ioniconsModuleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModuleScript);

// Create and append script for 'Ionicons' Website Icons (Module Script)
let ioniconsNomoduleScript = document.createElement('script');
ioniconsNomoduleScript.setAttribute('nomodule', '');
ioniconsNomoduleScript.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsNomoduleScript);
