// var addition = document.getElementById("screen");
// function add(){
//     var value = parseInt(addition.innerHTML)
//     value = value + 1
//     addition.innerHTML = value

// }

// function sub(){
//     var value = parseInt(addition.innerHTML)
//     value = value - 1
//     addition.innerHTML = value

// }


// ****************** CALCULATOR ***************** //
var calc = document.getElementById('screen');
var value = '0';

function b1(){

    value = value + '1';
    calc.innerHTML = value;
}
function b2(){

    value = value + '2';
    calc.innerHTML = value;
}

function b3(){

    value = value + '3';
    calc.innerHTML = value;
}

function b4(){

    value = value + '4';
    calc.innerHTML = value;
}
function b5(){

    value = value + '5';
    calc.innerHTML = value;
}

function b6(){

    value = value + '6';
    calc.innerHTML = value;
}

function b7(){

    value = value + '7';
    calc.innerHTML = value;
}

function b8(){

    value = value + '8';
    calc.innerHTML = value;
}

function b9(){

    value = value + '9';
    calc.innerHTML = value;
}

function b0(){

    value = value + '0';
    calc.innerHTML = value;
}
function dec(){

    value = value + '.';
    calc.innerHTML = value;
}

function add(){

    value = value + '+';
    calc.innerHTML = value;
}

function sub(){

    value = value + '-';
    calc.innerHTML = value;
}

function mul(){

    value = value + '*';
    calc.innerHTML = value;
}

function div(){

    value = value + '/';
    calc.innerHTML = value;
}
// function sq(){
//     value = value + '**2'
//     calc.innerHTML = value;
// }
// function cubic(){
//     value = value + '**3'
//     calc.innerHTML = value;
// }
// function sqrt(){
//     value = 'Math.sqrt(value)' + value
//     calc.innerHTML = value;
// }

function be(){
    var a = value[0];
    if (value != ''){
        
        if(a == "*" || a == "/"){
            calc.innerHTML = 0;
            value = '0'
        }
        else {
            value = String(eval(value));
            calc.innerHTML = value;    
        }
        
    }
    else {
        calc.innerHTML
    }
}

function ac(){

    value = 0;
    calc.innerHTML = value;
    value = ''
}

function del(){
    value = document.getElementById('screen').innerHTML;
    
    if (value == '0') {
        calc.innerHTML = value;
        value = ''
    }
    else if(value.length === 1) {
        calc.innerHTML = 0;
        value = '';

    }
    else {
        value = value.substring(0,value.length - 1);
        calc.innerHTML = value;
        // value = '';
    }
    
}

value = '';


function light(){
    document.getElementById('b1').style.background = "white";
    document.getElementById('b2').style.background = "white";
    document.getElementById('b3').style.background = "white";
    document.getElementById('b4').style.background = "white";
    document.getElementById('b5').style.background = "white";
    document.getElementById('b6').style.background = "white";
    document.getElementById('b7').style.background = "white";
    document.getElementById('b8').style.background = "white";
    document.getElementById('b9').style.background = "white";
    document.getElementById('b0').style.background = "white";
    document.getElementById('be').style.background = "white";
    document.getElementById('ac').style.background = "white";
    document.getElementById('del').style.background = "white";
    document.getElementById('dec').style.background = "white";
    document.getElementById('add').style.background = "white";
    document.getElementById('sub').style.background = "white";
    document.getElementById('div').style.background = "white";
    document.getElementById('mul').style.background = "white";
    document.getElementById('screen').style.background = "white";
    document.getElementById('screen').style.color = "black";
    document.getElementById('maindiv').style.background = "white";
    // document.getElementById('b1').style. =;
    // document.getElementById('b1').style.background = "white";
    // document.getElementById('b1').style.background = "white";
    // document.getElementById('b1').style.background = "white";
    
}
function Dark(){
    document.getElementById('b1').style.background = "rgb(211, 124, 9)";
    document.getElementById('b2').style.background = "rgb(211, 124, 9)";
    document.getElementById('b3').style.background = "rgb(211, 124, 9)";
    document.getElementById('b4').style.background = "rgb(211, 124, 9)";
    document.getElementById('b5').style.background = "rgb(211, 124, 9)";
    document.getElementById('b6').style.background = "rgb(211, 124, 9)";
    document.getElementById('b7').style.background = "rgb(211, 124, 9)";
    document.getElementById('b8').style.background = "rgb(211, 124, 9)";
    document.getElementById('b9').style.background = "rgb(211, 124, 9)";
    document.getElementById('b0').style.background = "rgb(211, 124, 9)";
    document.getElementById('be').style.background = "rgb(211, 124, 9)";
    document.getElementById('ac').style.background = "rgb(211, 124, 9)";
    document.getElementById('del').style.background = "rgb(211, 124, 9)";
    document.getElementById('dec').style.background = "rgb(211, 124, 9)";
    document.getElementById('add').style.background = "rgb(211, 124, 9)";
    document.getElementById('sub').style.background = "rgb(211, 124, 9)";
    document.getElementById('div').style.background = "rgb(211, 124, 9)";
    document.getElementById('mul').style.background = "rgb(211, 124, 9)";
    document.getElementById('screen').style.background = "black";
    document.getElementById('screen').style.color = "rgb(211, 124, 9)";
    document.getElementById('maindiv').style.background = "black";
    document.getElementById('mul').style.hover_background = "white";
    
}

// function light(){
// }