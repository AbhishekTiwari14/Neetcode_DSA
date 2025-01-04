//Design Map-Like Data Structure: design a data structure which can hold key: values pair (1 key can hold multiple values) & each value is a pair<string, int> : {val, timestamp}. Write 2 methods: (1)set(key, val, timestamp): to store the val & timestamp corresponding to the key; & (2) get(key, timestamp): which returns corresponding val, if key is not their, return ""; if timestamp is not their, then return val corresponding to the largest imestamp corresponding to this key <= input timestamp. Note: be assured that all the timestamps corresponding to a key will be in increasing order.


var TimeMap = function() {
    this.map = new Map()
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(!this.map.has(key)) this.map.set(key, [])
    this.map.get(key).push([value, timestamp])
}

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key)) return ''
    let ans = ""
    const values = this.map.get(key)
    let l=0, r = values.length-1
    while(l<=r){
        let m = Math.floor(l + (r-l)/2)
        if(values[m][1] <= timestamp){ 
            ans = values[m][0]
            l = m+1
        }
        else r = m-1
    }
    return ans;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */