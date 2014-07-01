/**
 * 使用new调用，如:
 * var compareResult = new Comparer(obj1, obj2);
 */
function Comparer() {
	this.obj1 = arguments[0];
	this.obj2 = arguments[1];
}


/**
 * 结构相同返回true，反之，返回false。
 * 空数组依然算相同，例如：
 * {x : 1},  {x : 2}结构相同
 * {x : 1}, {x : true} 结构相同
 * {x : [{y:1}]}, {x : []} 结构相同
 * {x: 1}, {y : 1} 结构不同
 * {x : 1, y : 1},  {x : 1} 结构不同
 * {x : [{y:1}], {x : [{z:1}]} 结构不同
 */
Comparer.prototype.sameStructure = function() {
	var i,j=1;
	//便利所有属性在obj1中
	for(i in this.obj1){
		//判断obj1的属性是否在obj2中
		if(i in this.obj2){
			//判断类型是否相同
			if(Object.prototype.toString.call(this.obj1[i]) === Object.prototype.toString.call(this.obj2[i])){
				if(Object.prototype.toString.call(this.obj1[i]) == "[object Array]" && this.obj1[i].length == 0 || this.obj2[i].length == 0){
					continue;
				}else{
					
				}
			}else if(this.obj1[i] == this.obj2[i]){
				continue;
			}else{

			};
		}else{
			return false;
		}
	}
	return true;
};
var dd = {a:123,b:456},cc = {a:456,b:123};
var aa = new Comparer(dd,cc);

/**
 * 和sameStructure类似，只是同时要判断类型，例如：
 * {x : 1}, {x : true} 结构不同
 */
Comparer.prototype.sameStructureAndDataType = function() {
};
