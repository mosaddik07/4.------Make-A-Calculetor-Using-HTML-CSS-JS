let inputFild = document.getElementById('input_fild');
let buttons = document.getElementById('buttons');

function result() {
    let value = inputFild.value;
    if (value.trim() === "") {
        alert('Please enter a value!');
        return;
    }

    try {
        let folafol = eval(value);
        if (isNaN(folafol)) {
            alert('Invalid input! Please enter a valid number.')
        } else {
            inputFild.value = folafol;
        }

    } catch (error) {
        alert('Invalid input! Please enter a valid expression.')
    }
}