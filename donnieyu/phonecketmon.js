function solution(nums) {
    var answer = 0;
    var maxKinds = nums.length/2;
    // var result = [];
    // nums.reduce((prev, curr) => {
    //     const res = prev.filter((value) => {
    //         return (value === curr);
    //     });
    //     if (!res.length) prev.push(curr);
    //     return prev;
    // }, result)
    // answer = result.length > maxKinds ? maxKinds : result.length;
    
    // const distinct = nums.filter((item, index) => {
    //     return nums.indexOf(item) === index;
    // }).length;
    // answer = distinct > maxKinds ? maxKinds : distinct;
    
    const counts = new Set(nums);
    answer = counts.size > maxKinds ? maxKinds : counts.size;
    
    return answer;
}