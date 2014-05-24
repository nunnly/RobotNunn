/**
 * 写一个函数判断变量是否存在
 * 例子：
 * var a;
 * valExists("a"); // true
 * valExists("b"); // false
 *
 * @valName {string} 需要判断的变量名
 * @return  {string} 如果变量名存在，返回true，不存在，返回false
 *
 */

function valExists(valName){
	var abcdefg;
    var abc = 300;
	return eval(valExistsCode(valName));
}
function valExistsCode(valName) {
	var arr =[],i=0;
	arr[i++] = "var result;";
	arr[i++] = "try{";
	arr[i++] = valName + ";";
	arr[i++] = "result=true;";
	arr[i++] = "}catch(e){";
	arr[i++] = "result = false;";
	arr[i++] = "}";
	arr[i++] = "result";
	return arr.join('');
}
function valUndefined(valName){
	var abcdefg;
    var abc = 300;
	return eval(valUndefinedCode(valName));
}
function valUndefinedCode(valName) {
	var arr =[],i=0;
	arr[i++] = "var result;";
	arr[i++] = "try{";
	arr[i++] = valName + ";";
	arr[i++] = "if("+valName+" == undefined){result=true;}else{result=false;}";
	arr[i++] = "}catch(e){";
	arr[i++] = "result = true;";
	arr[i++] = "}";
	arr[i++] = "result";
	return arr.join('');
}

/**
 * 写一个函数判断变量是否未定义或值为undefined
 * 例子：
 * var a;
 * var c = 1;
 * valUndefined("a"); // true
 * valUndefined("b"); // true
 * valUndefined("c"); // false
 *
 * @valName {string} 需要判断的变量名
 * @return  {string} 如果变量名存在，返回true，不存在，返回false
 *
 */

// function valUndefined(valName) {

// }

