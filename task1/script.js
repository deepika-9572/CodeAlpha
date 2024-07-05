
const form = document.getElementById('ageCalculatorForm');
const dayField = document.getElementById('day');
const monthField = document.getElementById('month');
const yearField = document.getElementById('year');
const resultDiv = document.getElementById('result');


function calculateAge(event) {
    event.preventDefault();

 
    const day = parseInt(dayField.value);
    const month = parseInt(monthField.value);
    const year = parseInt(yearField.value);

 
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
        resultDiv.innerHTML = '<p>Please enter valid day, month, and year.</p>';
        return;
    }


    const today = new Date();
    const birthDate = new Date(year, month - 1, day);

   
    let ageInYears = today.getFullYear() - birthDate.getFullYear();
    let ageInMonths = today.getMonth() - birthDate.getMonth();
    let ageInDays = today.getDate() - birthDate.getDate();

   
    if (ageInDays < 0) {
        ageInMonths--;
        const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
        ageInDays += tempDate.getDate();
    }

  
    if (ageInMonths < 0) {
        ageInYears--;
        ageInMonths += 12;
    }


    resultDiv.innerHTML = `
        <p>Your age is:</p>
        <ul>
            <li>${ageInYears} years</li>
            <li>${ageInMonths} months</li>
            <li>${ageInDays} days</li>
        </ul>`;
}


form.addEventListener('submit', calculateAge);
