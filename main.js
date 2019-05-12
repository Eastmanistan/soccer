document.addEventListener('DOMContentLoaded', function (e) {
    
    // find all elements we want to auto update
    var inputs = document.getElementsByClassName("autoUpdate");
    
    // for each of these elements
    for (let i = 0; i < inputs.length; i++) {
    
        // add a event listener to update the text whenever the value changes
        inputs[i].addEventListener("input", function() {
            // grab the values we need
            let birthMonth = document.querySelector('#month').value;
            let birthYear = document.querySelector('#year').value;

            // if the birth year is a 4 digit number and the month is set
            if (birthYear.match(/^[0-9]{4}$/) && birthMonth !== "") {

                // set the inner HTML to the division value
                document.getElementById("eligibility").innerHTML = getDivision(birthMonth, birthYear);
            } else {
                // else show nothing
                document.getElementById("eligibility").innerHTML = ""
            }
        });    
    }
})


/**
 * returns the correct division for the child.  returns null if not eligible for any division
 *
 *  @param int birthMonth the integer equivilent of the month
 *  @param int birthYear  the childs birth year
 *
 *  @return int  the division number or null
 */
function getDivision(birthMonth, birthYear) {

    // if child was born August or later, bump them a division
    var shiftedYear = birthMonth < 8 ? birthYear - 1 : birthYear; 
    var currentYear = new Date().getFullYear();

    // find the childs division
    var division = currentYear - shiftedYear;
    
    if (division > 19) {
        return "Too old";
    }
    if (division < 5) {
        return "Too young"
    }
    return "U" + division;
}






















