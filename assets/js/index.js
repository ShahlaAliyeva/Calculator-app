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

    let number=''
    let secondNumber = ''
    let num1 = ''
    let num2 = ''
    let operator = ''
    $(".calc-buttons div").on('click', function() {
        let key = ($(this).valueOf())[0].innerText
        let result = 0
        // console.log('Key: ', key)
        
        if(key !== 'DEL'  && key !== '-' && key !== '+' && key !== '/' && key !== 'X' && key !== 'RESET' && key !== '='){
            
            $(".result").remove();
            if (operator !== '') {
                number = ''
                console.log('operator: ', operator)
                number = number+key
                num2 = number
                $( '.num2' ).text(num2);
                console.log('number 2: ', num2)
            } else {
                number = number+key
                num1 = number
                $( '.num1' ).text(num1);
                console.log('number 1: ', num1)
            }
            
        } else if (key === 'DEL'){
            // number -= number.charAt(number.length - 1)
            number = number.substring(0,number.length-1);
            num1 = number
            $( '.num1' ).text(num1);
            console.log(num1);
        } else if (key === 'RESET') {
            number = ''
            num1 = number
            num2 = number
            operator = ''
            $( '.num1' ).text(num1);
            $('.num2').text(num2)
            $('.operator').text(operator)
        } else if (key === '-' || key === '+' || key === '/' || key === 'X') {
            num1 = number
            if(num2 === '') {
                operator = ($(this).valueOf())[0].innerText
                $('.operator').text(operator)
                console.log('operator: ', operator)
                
                console.log('num1: ', num1)
            }

            // if (operator !== '') {
            //     console.log('operator: ', operator)
            //     num1 = number
            //     number = ''
            //     if(key !== 'DEL'  && key !== '-' && key !== '+' && key !== '/' && key !== 'X' && key !== 'RESET' && key !== '='){
            //         number = number+key
            //         num2 = number
            //         $( '.num2' ).text(num2);
            //         console.log('number 2: ', num2)
            //     }
            // }
    
        } else if (key === '=') {
            if (num1 !== '' && num2 !== '') {
                if(operator === '+') {
                    let sum = 0
                    sum = parseFloat(num1) + parseFloat(num2)
                    result = sum
                } else if(operator === '-') {
                    let difference = 0
                    difference = parseFloat(num1) - parseFloat(num2)
                    result = difference
                } else if(operator === '/') {
                    let division = 1
                    division = parseFloat(num1) / parseFloat(num2)
                    result = division
                } else if(operator === 'X') {
                    let multiple = 1
                    multiple = parseFloat(num1) * parseFloat(num2)
                    result = multiple
                }
                
                console.log('result', result)
            }

            number = ''
            num1 = number
            num2 = number
            operator = ''
            $( '.num1' ).text(num1);
            $('.num2').text(num2)
            $('.operator').text(operator)
            $(`<p class="result">${result}</p>`).appendTo('#calc-monitor');
        } 
        
    //    console.log( ($(this).valueOf())[0].innerText);
    })


});