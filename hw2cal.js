// var a,b;
// function setValues() {
// a = Number(document.getElementById("a").value);
// b = Number(document.getElementById("b").value);
// }
// function sum()
// {
// 	setValues();
// 	result = a+b;
// 	alert("The sum is equal to"+result);
// }

// function doAction(alpha) {
// 	console.log(alpha);
// }
    var temp = 0;
	var temp1 = 0;
	var operator = "";

function runAC() {
    document.frm.result.value = "";
    temp = 0;
    temp1 = 0;
}
function runtog() {
	temp = Number(document.frm.result.value);
	document.frm.result.value = temp*-1;
}
function runper() {
	temp = Number(document.frm.result.value);
	document.frm.result.value = temp/100;
}
function rundiv() {
	temp = Number(document.frm.result.value);
	document.frm.result.value = "";
	operator = "divide";
}
function run7() {
	document.frm.result.value += "7";
}
function run8() {
	document.frm.result.value += "8";
}
function run9() {
	document.frm.result.value += "9";
}
function runmult() {
	temp = Number(document.frm.result.value);
	document.frm.result.value = "";
	operator = "mult";
}
function run4() {
	document.frm.result.value += "4";
}
function run5() {
	document.frm.result.value += "5";
}
function run6() {
	document.frm.result.value += "6";
}
function runsub() {
	temp = Number(document.frm.result.value);
	document.frm.result.value = "";
	operator = "subtract";
}
function run1() {
	document.frm.result.value += "1";
}
function run2() {
	document.frm.result.value += "2";
}
function run3() {
	document.frm.result.value += "3";
}
function runplus() {
	temp = Number(document.frm.result.value);
	document.frm.result.value = "";
	operator = "add";
}
function run0() {
	document.frm.result.value += "0";
}
function rundec() {
	document.frm.result.value += ".";
}
function runeql() {
	temp1 = Number(document.frm.result.value) ;

	if (operator === "add") {
		document.frm.result.value = temp + temp1;
	}
	if (operator === "subtract") {
		document.frm.result.value = temp - temp1;
	}
	if (operator === "mult") {
		document.frm.result.value = temp * temp1;
	}
	if (operator === "divide") {
		document.frm.result.value = temp / temp1;
	}
}




