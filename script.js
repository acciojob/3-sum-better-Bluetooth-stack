function threeSum(arr, target) {
// write your code here
	let closest = Number.MAX_VALUE;
	for(let i = 0; i<arr.length; i++){
		for(let j = i+1; j<arr.length; j++){
			for(let k = j+1; k<arr.length; k++){
				if(Math.abs(target-closest)>
				  Math.abs(target-(arr[i]+arr[j]+arr[k]))){
					closest = arr[i]+arr[j]+arr[k];
				  }
			}
		}
	}
  return closest;
}

// let arr = [-1, 2, 1, -4], target = 1;
// let res = threeSum(arr, target)
// console.log(res);

module.exports = threeSum;
