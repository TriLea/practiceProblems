/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    var current = 0; //what index in nums we are currently reading
    var steps = 0;
    var reach = 0; //current num = value of current index
    var nextReach = 0;
    var tempReach;
    //increment current to reach
    //if tempReach reaches end, steps += 1, return steps
    //if tmepReach is bigger than nextReach assign it to nextReach
    //once current == reach, steps += 1, reach = nextReach

    if (nums.length == 1) {

        return 0;
    }

    for (; ; current++) {

        tempReach = current + nums[current];
        if (tempReach >= nums.length - 1) {

            return steps + 1;
        }

        if (tempReach > nextReach) {

            nextReach = tempReach;
        }

        if (current == reach) {

            steps++;
            reach = nextReach;
        }
    }
};


// You are given a 0-indexed array of integers
// nums of length n. You are initially positioned
// at nums[0]. Each element nums[i] represents the
// maximum length of a forward jump from index i.
// In other words, if you are at nums[i], you
// can jump to any nums[i + j] where:

// 0 <= j <= nums[i] and
// i + j < n

// Return the minimum number of jumps to reach
// nums[n - 1]. The test cases are generated such
// that you can reach nums[n - 1].