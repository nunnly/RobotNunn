/**
 * 写一个类StateManager来控制状态，需要满足下述要求。
 * 多个StateManager实例之间不会相互干扰
 * 必须使用new来创建实例，否则报错
 * 必须使用二进制机制实现
 */


function StateManager(key, state) {
    if(this.constructor != arguments.callee){
        throw new Error("坑爹啊Bosn！")
    }
}
StateManager.prototype.setState = function(key, state){
    this[key] = state;
}

StateManager.prototype.getState = function(key){
    if(this[key] == undefined){
        return false;
    }else{
        return this[key];
    }
}
StateManager.prototype.multiStatesMatcher = function(keys, state) {
    var that = this;
    //console.log("state = " + state);
    if(Object.prototype.toString.call(keys) == "[object Array]"){
        return keys.every(function(x){console.log(that[x] + "=" + state);return that[x]==state;});
    }
}

/**
 * 闭包中只是为了介绍StateManager实例所必须拥有的方法，该部分实际运行时可全部注释掉
 */
!function() {
    // StateManager实例应该提供的方法

    /**
     * 设置状态
     *
     * @param {string}  key   状态的key
     * @param {boolean} state true或false，表示状态，也可以叫开关
     */
    function setState(key, state) {
    }


    /**
     * 获取状态 参数细节同setState
     * 注意key如果没有被set过，要返回false
     *
     * @param {string}  key
     * @return {boolean} state
     */
    function getState(key) {

    }
    /**
     * 多状态匹配器
     * @param {array<string>} keys 多个状态key, 如["a", "b", "c"]
     * @param {boolean} state 需检验的状态
     * @return {boolean} 仅当所有keys中的状态为state时返回true。比如keys为["a", "b", "c"],
     *      state为true时，a,b,c的状态均为true时返回true，否则返回false.
     */
    function multiStatesMatcher(keys, state) {
    }

}();
