let counterAction = (e) => {
    var value = document.getElementById('value');
    var counter = parseFloat(value.textContent);
    if (e == '-') {
        counter -= 1;
    } else if (e == '+') {
        counter += 1;
    } else {
        counter = 0;
    }
    value.textContent = counter;
    if (counter < 0) {
        value.style.color = 'red';
    } else if (counter == 0) {
        value.style.color = 'black';
    } else {
        value.style.color = 'green';
    }
}