/**
 * 使用new调用，如:
 * var compareResult = new Comparer(obj1, obj2);
 */
function Comparer() {

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
};

/**
 * 和sameStructure类似，只是同时要判断类型，例如：
 * {x : 1}, {x : true} 结构不同
 */
Comparer.prototype.sameStructureAndDataType = function() {
};
