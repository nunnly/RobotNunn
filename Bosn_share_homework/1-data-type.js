/**
 * 
 * @param {string} param to be judged
 * @return {string} "null", "undefined", "object", "boolean", etc.
 *                  CAUTIONS, customized class object will be returned 
 *                  its class name. eg-> function Person(){}; var obj = new Person();
 *                  typeOfParam(obj); // "Person"
 *-------------------------------------------------------------------------------------
 */

function typeOfParam(param) {
	if(typeof param =="object" && param == null){
		return "null";
	}
	return typeof param;
}