const form = document.querySelector('form');
//this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value)
//to prevent 

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)//string value convert

    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please provide a valid height ${height}`;

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please provide a valid weight ${weight}`;
    }

    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        let status = ""
        if (bmi < 18.6) {
            status = "Underweight"
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            status = "Normal"
        } else {
            status = "Overweight"
        }
        results.innerHTML = `<span>${bmi} ${status}</span>`
    }

})