// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

const twoSum = (nums, target) => {
    const indices = new Map();
    for(let index = 0; index < nums.length; index++) {
        let complement = target - nums[index];
        
        if(indices.has(complement)) {
            return [indices.get(complement), index];
        }

        indices.set(nums[index], index);
    }
}

console.log(twoSum([2,7,11,15], 9));
