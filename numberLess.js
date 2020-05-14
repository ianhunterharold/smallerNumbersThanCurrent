/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function(nums) {
  let largerArr = [];

  for (let i =0; i <nums.length;i++){
    let count=0;
    for (let j=0; j < nums.length; j++){
      if (nums[i] > nums[j]){
        count++; 
      }
    }
    largerArr.push(count);
  }  
  return largerArr; 
};