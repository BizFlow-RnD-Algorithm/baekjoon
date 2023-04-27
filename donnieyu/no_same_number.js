function solution(arr)
{
    var answer = [];

    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')
    answer = arr.filter((item, index) => item !== arr[index - 1]);
    return answer;
}