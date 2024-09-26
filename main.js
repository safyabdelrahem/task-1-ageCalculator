const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
    let today = new Date();
    let inputDate = new Date(document.getElementById("date-input").value);

    if (inputDate == "Invalid Date" || isNaN(inputDate)) {
        alert("Please enter a valid date");
        return;
    }

    let birthDetails = {
        date: inputDate.getDate(),
        month: inputDate.getMonth() + 1,
        year: inputDate.getFullYear(),
    };

    let currentYear = today.getFullYear();
    let currentMonth = today.getMonth() + 1;
    let currentDate = today.getDate();

    // Calculate the year difference
    let ageYear = currentYear - birthDetails.year;

    // Adjust the month and date difference if the birthdate has not occurred yet this year
    if (currentMonth < birthDetails.month || (currentMonth === birthDetails.month && currentDate < birthDetails.date)) {
        ageYear--;
    }

    // Calculate the month difference
    let ageMonth;
    if (currentMonth >= birthDetails.month) {
        ageMonth = currentMonth - birthDetails.month;
    } else {
        ageMonth = 12 + currentMonth - birthDetails.month;
    }

    // Calculate the day difference
    let ageDay;
    if (currentDate >= birthDetails.date) {
        ageDay = currentDate - birthDetails.date;
    } else {
        let lastMonth = currentMonth === 1 ? 12 : currentMonth - 1;
        ageDay = months[lastMonth - 1] + currentDate - birthDetails.date;
        ageMonth--;
        if (ageMonth < 0) {
            ageMonth = 11;
            ageYear--;
        }
    }

    // Update the HTML elements for years, months, and days
    document.getElementById("years").innerText = ageYear;
    document.getElementById("months").innerText = ageMonth;
    document.getElementById("days").innerText = ageDay;
}
