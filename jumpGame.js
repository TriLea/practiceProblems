/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    
    for (var i = 0; i < nums.length - 1; i++) {

        if  (nums[i] + i + 1 >= nums.length) {

            return true;
        }

        if (nums[i] == 0) {

            for (var j = 1; ; j++) {
                
                if (j > i) {

                    return false;
                }

                if (nums[i - j] > j) {

                    break;
                }
            }
        }
    }

    return true;
};

// You are given an integer array nums.
// You are initially positioned at the array's
// first index, and each element in the
// array represents your maximum jump length
// at that position.

// Return true if you can reach the
// last index, or false otherwise.
