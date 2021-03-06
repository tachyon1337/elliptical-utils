

let object={};

let spec = {
    descriptors:          false,
    extensibility:        false,
    enumerator:           Object.keys
};

/**
 * is object
 * @param obj {*}
 * @returns {boolean}
 */
object.isObject=(obj)=>{
    return typeof obj === 'object' && obj !== null;
};

/**
 * is function
 * @param fn {*}
 * @returns {boolean}
 */
object.isFunction=(fn)=>{
    return typeof fn === 'function';
};

/**
 * returns the value of an object prop by index
 * @param obj {object}
 * @param index {number}
 * @returns {object}
 */
object.propertyByIndex=(obj,index)=>obj[Object.keys(obj)[index]];


/**
 * returns the index of an element with idProp==id in an array
 * @param obj {Object}
 * @param id {String}
 * @param idProp {String}
 * @returns {Number}
 */
object.indexById=(obj,id,idProp="id")=>{
    let arr=object.propertyByIndex(obj,0);
    if(arr.length && arr.length > 0){
        let len=arr.length;
        let index;
        for(var i=0;i<len;i++){
            if(arr[i][idProp]===id){
                index=i;
                break;
            }
        }
        return index;
    }else{
        return null;
    }
};

/**
 * tests if object is empty
 * @param obj
 * @returns {boolean}
 */
object.isEmpty=(obj)=>{
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    if (obj == null) return true;

    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;

};

/**
 * tests if object is a POJO
 * @param obj {object}
 * @returns {*}
 */
object.isPlainObject=(obj)=> {
    var _isObject =function(o) {
        return object.isObject(o) && Object.prototype.toString.call(o) === '[object Object]';
    };

    var ctor,prot;

    if (_isObject(obj) === false) return false;

    // if has modified constructor
    ctor = obj.constructor;
    if (typeof ctor !== 'function') return false;

    // if has modified prototype
    prot = ctor.prototype;
    if (_isObject(prot) === false) return false;

    // if constructor does not have an Object-specific method
    return prot.hasOwnProperty('isPrototypeOf') !== false;

};

/**
 *  equality test
 * @param x {object}
 * @param y {object}
 * @returns {*}
 */
object.isEqual=(x,y)=>{
    return Object.equals(x, y, spec);
};

/**
 * clone object
 * @param src
 * @returns {*}
 */
object.clone=(src)=>{
    return Object.clone(src, false, spec);
};

/**
 * deep clone
 * @param src
 * @returns {*}
 */
object.deepClone=(src)=>{
    return Object.clone(src, true, spec);
};


/**
 * returns modified target
 * @param target {object}
 * @param source {object}
 * @returns {*}
 */
object.mixin=(target,source)=>{
    return Object.mixin(target,source);
};


/**
 * returns modified target
 * @param target {object}
 * @param sources {object}
 * @returns {*}
 */
object.assign=(target,...sources)=>{
    return Object.assign(target,...sources);
};



export default object;


