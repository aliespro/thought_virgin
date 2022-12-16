var input_one = document.getElementById("input-one");
var input_two = document.getElementById("input-two");
var input_three = document.getElementById("input-three");
var input_four = document.getElementById("input-four");
var june = document.getElementById("june");


var one = Math.floor(Math.random() * 9 + 1);
var two = Math.floor(Math.random() * 9 + 1);
var three = Math.floor(Math.random() * 9 + 1);
var four = Math.floor(Math.random() * 9 + 1);

var win = new Audio('./sounds/win.mp3');

var lose = new Audio('./sounds/break_down.mp3');
console.log(one, two, three, four);
var number = [0, 0, 0, 0];


function check() {


    console.log(number);


    if (input_one.value == one) {
        input_one.style.border = "2px solid green !important";
        if (number[0] == 0) {
            win.play();
        }
        number[0]++;
    } else {
        input_one.style.border = "2px solid red";
        lose.play();
    }

    if (input_two.value == two) {
        input_two.style.border = "2px solid green ";
        if (number[1] == 0) {
            win.play();
        }
        number[1]++;

    } else {
        input_two.style.border = "2px solid red";
        lose.play();
    }

    if (input_three.value == three) {
        input_three.style.border = "2px solid green ";
        if (number[2] == 0) {
            win.play();
        }
        number[2]++;

    } else {
        input_three.style.border = "2px solid red";
        lose.play();
    }

    if (input_four.value == four) {
        input_four.style.border = "2px solid green ";
        if (number[3] == 0) {
            win.play();
        }
        number[3]++;


    } else {
        input_four.style.border = "2px solid red";
        lose.play();
    }

    if (one == input_one.value) {
        input_one.style.border = "2px solid green";

    } else if (two == input_one.value || three == input_one.value || four == input_one.value && one !== input_one.value) {
        input_one.style.border = "2px solid yellow";

    } else {
        input_one.style.border = "2px solid red";
    }

    if (two == input_two.value) {
        input_two.style.border = "2px solid green";

    } else if (one == input_two.value || three == input_two.value || four == input_two.value && two !== input_two.value) {
        input_two.style.border = "2px solid yellow";
    } else {
        input_two.style.border = "2px solid red";

    }

    if (three == input_three.value) {
        input_three.style.border = "2px solid green";

    } else if (two == input_three.value || one == input_three.value || four == input_three.value && three !== input_three.value) {
        input_three.style.border = "2px solid yellow";

    } else {
        input_three.style.border = "2px solid red";

    }
    if (four == input_four.value) {
        input_four.style.border = "2px solid green";
    } else if (two == input_four.value || three == input_four.value || one == input_four.value && four !== input_four.value) {
        input_four.style.border = "2px solid yellow";
    } else {
        input_four.style.border = "2px solid red";

    }

    if (input_one.value == one && input_two.value == two && input_three.value == three && input_four.value == four) {
        input_one.style.border = "2px solid blue";
        input_two.style.border = "2px solid blue";
        input_three.style.border = "2px solid blue";
        input_four.style.border = "2px solid blue";

        var victory = new Audio('./sounds/you_wind.mp3');


        setInterval(() => {
            victory.play();

        }, 2000);

        document.getElementById("btn-winner").click();

    }

    if (input_one.value !== one || input_two.value !== two || input_three.value !== three || input_four.value !== four) {
        june.innerText--;
    }

    if (june.innerText == 0) {
        document.getElementById("btn-lose").click();

        var break_down = new Audio('./sounds/you_lose.mp3');
        break_down.play();

        setInterval(() => {
            break_down.play();

        }, 2000);
    }
    document.getElementById("retern-lose").addEventListener('click', (e) => {
        window.location.reload()
    });
    document.getElementById("retern-winner").addEventListener('click', (e) => {
        window.location.reload()
    });

}


function tab_input_code() {
    var elts = document.getElementsByClassName('input_number')
    Array.from(elts).forEach(function(elt) {
        elt.addEventListener("keyup", function(event) {
            if (event.keyCode === 13 || elt.value.length == 1) {
                elt.nextElementSibling.focus();
            }
        });
    });
};