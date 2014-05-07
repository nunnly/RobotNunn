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
//valExists("a");
