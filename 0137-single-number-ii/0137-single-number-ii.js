/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
     return  nums.filter((a)=>nums.indexOf(a)===nums.lastIndexOf(a))[0];
    
};