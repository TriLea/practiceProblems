/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    
    var i = 0;
    var inp = 0;
    var temp = nums[0]; //1 
    var temp2;
    var out;

    for (i = 0; i < nums.length; i++) { 
        
        out = inp + k; // 6 //9 
        if (out >= nums.length) {

            out -= nums.length; //2
        }

        temp2 = nums[out]; //3
        nums[out] = temp; //index2 = 7
        inp = out; //2
        temp = temp2; //3
    }
};

// Given an integer array nums, rotate the
// array to the right by k steps,
// where k is non-negative.
