/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let result =nums.map((a)=>a*a)
    let b =result.sort((a,b)=>a-b)
    return b
};