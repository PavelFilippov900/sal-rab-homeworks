function addInCartMessage(title, price) {
    let productName = title;
    let productPrice = price;

    // Задание №1.1. Оповещение о добавлении в корзину

    let message; // создайте переменную message
    message = title; // присвойте переменной message значение переменной productName
    message = title + ' '; // добавьте в конец переменной message пробел
    message = title + ' ' + 'за'; // добавьте в конец переменной message текст 'за'
    message = title + ' ' + 'за' + ' '; // добавьте в конец переменной message пробел
    message = title + ' ' + 'за' + ' ' + price; // добавьте в конец переменной message значение переменной productPrice
    message = title + ' ' + 'за' + ' ' + price + ' '; // добавьте в конец переменной message пробел
    message = title + ' ' + 'за' + ' ' + price + ' ' + 'теперь в корзине!'; // добавьте в конец переменной message текст 'теперь в корзине!'
    
    console.log(message) // выведите переменную message в консоль

    // Конец решения задания №1.1.

    return message;
}

function addInCartCountChange(value) {

    // Задание №1.2. Увеличение количества в корзине
    let oldValue = value;

    let newValue; // создайте переменную newValue
    newValue = value; // присвойте ей значение oldValue
    newValue = value + 1; // увеличьте значение newValue на 1

    // Конец решения задания №1.2.

    return newValue;
}

function addInCartSumChange(sum, delta) {
    let oldSum = sum;
    let difference = delta;

    // Задание №1.3. Увеличение суммы в корзине

    let newSum = oldSum + difference; // создайте переменную newSum и присвойте ей сумму oldSum и difference
    let newSumText = newSum + ' ₽'; // создайте переменную newSumText и присвойте ей результат склеивания переменной newSum и текста ' ₽'
    newSumText = `${newSum} ₽`; // замените склеивание, используемое в newSum Text на шаблонную строку

    // Конец решения задания №1.3.

    return newSumText;
}

