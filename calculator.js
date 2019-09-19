var op = "";
var result = "";
var ops = ["+", "-", "*", "/"];
var LocalVariable = "";

function noticewarning(message) 
{ 
	alert(message); 
}
function isnotworking(operation)
{ 
	for (var i = 0; i < ops.length; i++) 
	{
		if(operation.indexOf(ops[i]) > -1) 
			{ 
				return true 
			}
	}
	return false
}

function numberBtnHandler(number) 
{ 
	LocalVariable += number.toString(); 
	setText(); 
}
function setText() 
{ 
	document.getElementById("textBox").value = LocalVariable;
}
function getText() 
{ 
	return LocalVariable; 
}
function OpBtnHandler(id) 
{
 if(id != "-" && LocalVariable == "") 
 	{
 	 noticewarning("연산자가 잘못되었어요"); 
 	 return; 
 	} 
 	LocalVariable += id; 
 	setText(); 
 }
function reset()
{
	LocalVariable = "";
	setText();
	op = "";
	result = "";
}

function calculate() 
{ 
	try {
		var rs = eval(getText());
		if (isNaN(rs) || rs == "Infinity") {
			LocalVariable = 0;
		} else {
			LocalVariable = rs
		} 
		setText();;
	} 
	catch(e) { console.log(e); noticewarning("연산 식이 잘못되었어요!"); } 
}