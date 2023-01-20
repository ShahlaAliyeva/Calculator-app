let darkThemeButton = document.getElementById("dark-theme");
let lightThemeButton = document.getElementById("light-theme");
let gradientThemeButton = document.getElementById("gradient-theme");

let buttons = document.querySelectorAll(".calc-buttons div");
let calcKeys = document.querySelectorAll(".calc-buttons div span");
// console.log('calc buttons: ', calcKeys);

let navbar = document.getElementById("navbar");

let keyArr = [];

buttons.forEach((element) => {
  keyArr.push(element);
  // console.log(keyArr);
});

function getLightTheme() {
  $(darkThemeButton).removeClass('" visible-dark "');
  $(gradientThemeButton).removeClass('" visible-gradient "');

  $("body").css("background-color", "hsl(0, 0%, 90%)");
  $(navbar).css("color", "hsl(60, 10%, 19%)");
  $(".count-buttons").css("background-color", "hsl(0, 5%, 81%)");
  $(".count-buttons button").css("background-color", "hsl(0, 5%, 81%)");
  $(".visible-light").css("background-color", "hsl(25, 98%, 40%)");

  $("#calc-monitor").css("background-color", "hsl(0, 0%, 93%)");
  $("#calc-monitor p").css("color", "hsl(60, 10%, 19%)");
  $("#calc-monitor .light-th").css("color", "hsl(60, 10%, 19%)");

  $("#keypad-section").css("background-color", "hsl(0, 5%, 81%)");
  $("#keypad-section .calc-buttons div").css(
    "background-color",
    "hsl(45, 7%, 89%)"
  );
  $("#keypad-section .calc-buttons div").css(
    "box-shadow",
    "0px -5px 4px hsl(35, 11%, 61%) inset"
  );
  $("#keypad-section .calc-buttons div").css("color", "hsl(60, 10%, 19%)");

  $("#keypad-section .calc-buttons .delete-btn").css(
    "background-color",
    "hsl(185, 42%, 37%)"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "background-color",
    "hsl(185, 42%, 37%)"
  );
  $("#keypad-section .calc-buttons .delete-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(185, 58%, 25%) inset"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(185, 58%, 25%) inset"
  );
  $("#keypad-section .calc-buttons .delete-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );

  $("#keypad-section .calc-buttons .equal-btn").css(
    "background-color",
    "hsl(25, 98%, 40%)"
  );
  $("#keypad-section .calc-buttons .equal-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(25, 99%, 27%) inset"
  );
  $("#keypad-section .calc-buttons .equal-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );
}

function getDarkTheme() {
  $(gradientThemeButton).removeClass('" visible-gradient "');
  $(lightThemeButton).removeClass('" visible-light "');

  $("body").css("background-color", "hsl(222, 26%, 31%)");
  $(navbar).css("color", "hsl(0, 0%, 100%)");
  $(".count-buttons").css("background-color", "hsl(223, 31%, 20%)");
  $(".count-buttons button").css("background-color", "hsl(223, 31%, 20%)");
  $(".visible-dark").css("background-color", "hsl(6, 63%, 50%)");

  $("#calc-monitor").css("background-color", "hsl(224, 36%, 15%)");
  $("#calc-monitor p").css("color", "hsl(0, 0%, 100%)");
  $("#calc-monitor").css("color", "hsl(0, 0%, 100%)");

  $("#keypad-section").css("background-color", "hsl(223, 31%, 20%)");
  $("#keypad-section .calc-buttons div").css(
    "background-color",
    "hsl(30, 25%, 89%)"
  );
  $("#keypad-section .calc-buttons div").css(
    "box-shadow",
    "0px -5px 4px hsl(28, 16%, 65%) inset"
  );
  $("#keypad-section .calc-buttons div").css("color", "hsl(221, 14%, 31%)");

  $("#keypad-section .calc-buttons .delete-btn").css(
    "background-color",
    "hsl(225, 21%, 49%)"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "background-color",
    "hsl(225, 21%, 49%)"
  );
  $("#keypad-section .calc-buttons .delete-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(224, 28%, 35%) inset"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(224, 28%, 35%) inset"
  );
  $("#keypad-section .calc-buttons .delete-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );

  $("#keypad-section .calc-buttons .equal-btn").css(
    "background-color",
    "hsl(6, 63%, 50%)"
  );
  $("#keypad-section .calc-buttons .equal-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(6, 70%, 34%) inset"
  );
  $("#keypad-section .calc-buttons .equal-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );
}

function getGradientTheme() {
  $(darkThemeButton).removeClass('" visible-dark "');
  $(lightThemeButton).removeClass('" visible-light "');

  $("body").css("background-color", "hsl(268, 75%, 9%)");
  $(navbar).css("color", "hsl(52, 100%, 62%)");
  $(".count-buttons").css("background-color", "hsl(268, 71%, 12%)");
  $(".count-buttons button").css("background-color", "hsl(268, 71%, 12%)");
  $(".visible-gradient").css("background-color", "hsl(176, 100%, 44%)");

  $("#calc-monitor").css("background-color", "hsl(268, 71%, 12%)");
  $("#calc-monitor p").css("color", "hsl(52, 100%, 62%)");
  $("#calc-monitor").css("color", "hsl(52, 100%, 62%)");

  $("#keypad-section").css("background-color", "hsl(268, 71%, 12%)");
  $("#keypad-section .calc-buttons div").css(
    "background-color",
    "hsl(268, 47%, 21%)"
  );
  $("#keypad-section .calc-buttons div").css(
    "box-shadow",
    "0px -5px 4px hsl(290, 70%, 36%) inset"
  );
  $("#keypad-section .calc-buttons div").css("color", "hsl(52, 100%, 62%)");

  $("#keypad-section .calc-buttons .delete-btn").css(
    "background-color",
    "hsl(281, 89%, 26%)"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "background-color",
    "hsl(281, 89%, 26%)"
  );
  $("#keypad-section .calc-buttons .delete-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(285, 91%, 52%) inset"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(285, 91%, 52%) inset"
  );
  $("#keypad-section .calc-buttons .delete-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );
  $("#keypad-section .calc-buttons .reset-btn").css(
    "color",
    "hsl(0, 0%, 100%)"
  );

  $("#keypad-section .calc-buttons .equal-btn").css(
    "background-color",
    "hsl(176, 100%, 44%)"
  );
  $("#keypad-section .calc-buttons .equal-btn").css(
    "box-shadow",
    "0px -5px 4px hsl(177, 92%, 70%) inset"
  );
  $("#keypad-section .calc-buttons .equal-btn").css(
    "color",
    "hsl(198, 20%, 13%)"
  );
}

$(document).ready(function () {
  getDarkTheme();

  $(darkThemeButton).click(function () {
    if (!$(darkThemeButton).hasClass("visible-dark")) {
      $(darkThemeButton).addClass('" visible-dark "');

      //Dark theme CSS
      getDarkTheme();
    }
  });

  $(lightThemeButton).click(function () {
    if (!$(lightThemeButton).hasClass("visible-light")) {
      $(lightThemeButton).addClass('" visible-light "');

      //Light theme CSS
      getLightTheme();
    }
  });

  $(gradientThemeButton).click(function () {
    if (!$(gradientThemeButton).hasClass("visible-gradient")) {
      $(gradientThemeButton).addClass('" visible-gradient "');

      //Gradient theme CSS
      getGradientTheme();
    }
  });

  let number = "";
  let secondNumber = "";
  let num1 = "";
  let num2 = "";
  let operator = "";
  let result = "";
  let operationCount = 0;
  $(".calc-buttons div").on("click", function () {
    let key = $(this).valueOf()[0].innerText;

    console.log("Key: ", key);

    if (
      key !== "DEL" &&
      key !== "-" &&
      key !== "+" &&
      key !== "/" &&
      key !== "X" &&
      key !== "RESET" &&
      key !== "="
    ) {
      $(".result").remove();
      if (operator !== "") {
        console.log("operator: ", operator);
        number = number + key;
        num2 = number;
        $(".num2").text(num2);
        console.log("number 2: ", num2);
      } else {
        number = number + key;
        num1 = number;
        $(".num1").text(num1);
        console.log("number 1: ", num1);
      }
    } else if (key === "DEL") {
      // number -= number.charAt(number.length - 1)
      number = number.substring(0, number.length - 1);
      // if(num2 === '') {
      //   operator =''
      //   $('.operator').text(operator)
      // }

      // operator num1 den evvel silinende num1 silinmir indi hal-hazirda da num1 operatordan evvel silinir operator yerinde qalir sonra da alem deyir
      
      if (num1 !== "" && num2 !== "") {

        if(number.length === 0) {
          num2 =''
        } else {
          num2 = number;
        }
        $(".num2").text(num2);
        console.log("Deleted number 2: ", num2);
      } else if (result !== "") {
        result = result.substring(0, result.length - 1);
        console.log("Deleted result num: ", result);
        $(".result").text(result);
      } else {
        if(number.length === 0) {
          num1 =''
        } else {
          num1 = number;
        }
        $(".num1").text(num1);
        console.log(num1);
      } 
    } else if (key === "RESET") {
      number = "";
      num1 = number;
      num2 = number;
      operator = "";
      result = "";
      $(".num1").text(num1);
      $(".num2").text(num2);
      $(".operator").text(operator);
      $(".result").text(result);
    } else if (key === "-" || key === "+" || key === "/" || key === "X") {
    
      if (num1!=='' && num2!=='') {
        operator = $(this).valueOf()[0].innerText;
        $(".operator").text(operator);
        console.log("operator: ", operator);
      } else if (num2 === "" && num1 !== '') {
        num1 = number;
        console.log("operator and num1: ", num1);
        operator = $(this).valueOf()[0].innerText;
        $(".operator").text(operator);
        console.log("operator: ", operator);
        //ilk if scope undan cixardildi
        number = "";
      }  

      if (result !== "") {
        number = result;
        num1 = number;
        result = "";

        $(".num1").text(num1);
        $(".result").remove();
        console.log("result is num1 now: ", num1);
      }

    } else if (key === "=") {
      if (num1 !== "" && num2 !== "") {
        if (operator === "+") {
          let sum = 0;
          sum = parseFloat(num1) + parseFloat(num2);
          result = sum.toString();
        } else if (operator === "-") {
          let difference = 0;
          difference = parseFloat(num1) - parseFloat(num2);
          result = difference.toString();
        } else if (operator === "/") {
          let division = 1;
          division = parseFloat(num1) / parseFloat(num2);
          result = division.toString();
        } else if (operator === "X") {
          let multiple = 1;
          multiple = parseFloat(num1) * parseFloat(num2);
          result = multiple.toString();
        }

        console.log("result", result);
      }

      number = "";
      num1 = number;
      num2 = number;
      operator = "";
      $(".num1").text(num1);
      $(".num2").text(num2);
      $(".operator").text(operator);
      $(`<p class="result light-th">${result}</p>`).appendTo("#calc-monitor");
    }
  });
});
