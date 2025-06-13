/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let a=s.split('').reverse().join('')
    console.log(a)
    return a==s
};