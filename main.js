document.addEventListener('DOMContentLoaded', function (e) {
    document.addEventListener('submit', function (e) {
        e.preventDefault();

        let monthInput = document.querySelector('#month').value
        let yearInput = document.querySelector('#year').value
        let eligibility=calculateEligibility(monthInput,yearInput)
        console.log('eligible',eligibility)
        document.querySelector('#eligibility').innerHTML=eligibility
    })
})

function calculateEligibility(inputMonth, inputYear) {
    let months = ['aug', 'sep', 'oct', 'nov', 'dec', 'jan', 'feb', 'mar', 'apr', 'may', 'jun',
        'jul'
    ]
    // let inputMonth = 'jun'
    // let inputYear = 2012
    let lookupKey = '' + inputYear + inputMonth
    let currentYear = new Date().getFullYear()

    let minYear = currentYear - 19
    let maxYear = minYear + 15
    console.log(minYear, maxYear)



    let data = {}

    let uAge = 19
    let counter = 0
    for (let i = minYear; i <= maxYear; i++) {
        for (let j = 0; j < months.length; j++) {

            let year = j < 5 ? i : (i + 1)
            let key = '' + year + months[j]

                if (uAge > 4) {
                data[key] = 'U' + uAge
                counter += 1
                if (counter === 12) {
                    uAge -= 1
                    counter = 0
                }
            }
        }
    }
    console.log(data)

    console.log("eligibility: ", data[lookupKey]) 
    if (!eligibility) return "An individual born in the month and year selected is not eligible for any division of play"  
    else return data[lookupKey]
    
}
