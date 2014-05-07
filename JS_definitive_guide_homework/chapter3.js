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
//var a=123;
function valExists(valName) {
	try{
		return !!eval(valName)// && eval(valName) == undefined;
	}catch(e){
		console.log(e);
	}
}
<<<<<<< HEAD
//valExists("a");
=======


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

function valUndefined(valName) {

}
>>>>>>> 6b9675a3f1febea8fc9c8427263d43fb4bf213fe
