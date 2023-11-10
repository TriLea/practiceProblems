/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    
    var pointer = 1;
    var aryCpy = [...nums]; // for sorting
    
    aryCpy.sort(function(a, b){return a - b});

    var value;
    var count = 0;
    var nwVal = aryCpy[0];
    var nwCnt = 1;

    while(pointer < aryCpy.length) {

        if (aryCpy[pointer] == nwVal) {

            nwCnt++;

        } else {

            if (count < nwCnt) {

                value = nwVal;
                count = nwCnt;
            }
            
            nwVal = aryCpy[pointer];
            nwCnt = 1;
        }

        pointer++;
    }

    if (count < nwCnt) {

        value = nwVal;
        // count = nwCnt;
    }

    return value;
};

// Given an array nums of size n,
// return the majority element.

// The majority element is the element that
// appears more than ⌊n / 2⌋ times.
// You may assume that the majority element
// always exists in the array.
