let darkThemeButton = document.getElementById("dark-theme")
let lightThemeButton = document.getElementById("light-theme")
let gradientThemeButton = document.getElementById("gradient-theme")

let buttons = document.querySelectorAll(".calc-buttons div")
let calcKeys = document.querySelectorAll(".calc-buttons div span")
// console.log('calc buttons: ', calcKeys);

let keyArr = []

buttons.forEach((element) => {
    keyArr.push(element)
    // console.log(keyArr);
});

$(document).ready(function () {
    $(darkThemeButton).click(function() {
        if(!($(darkThemeButton).hasClass("visible-dark"))) {
            $(darkThemeButton).addClass('" visible-dark "');

            $(gradientThemeButton).removeClass('" visible-gradient "');
            $(lightThemeButton).removeClass('" visible-light "');
        } 
    })

    $(lightThemeButton).click(function() {
        if(!($(lightThemeButton).hasClass("visible-light"))) {
            $(lightThemeButton).addClass('" visible-light "');

            $(darkThemeButton).removeClass('" visible-dark "');
            $(gradientThemeButton).removeClass('" visible-gradient "');
        }
    })

    $(gradientThemeButton).click(function() {
        if(!($(gradientThemeButton).hasClass("visible-gradient"))) {
            $(gradientThemeButton).addClass('" visible-gradient "');

            $(darkThemeButton).removeClass('" visible-dark "');
            $(lightThemeButton).removeClass('" visible-light "');
        }
    })

    // calcKeys.forEach((element, index) => {
    //     $(buttons).click(function () { 
    //         if(keyArr[index] == element.textContent) {
    //             console.log(buttons[index])
    //         }
    //     });
    // });

    $(".calc-buttons div").on('click', function() {
       console.log( ($(this).valueOf())[0].innerText);
    })

    //deyerleri keypadden aldiq

});