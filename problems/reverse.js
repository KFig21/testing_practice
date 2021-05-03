function reverse(word) {
    let arr = word.split('')
    let answer = "";
    for(i = arr.length - 1; i >= 0; i--){ answer += arr[i] }
    return answer;
}

module.exports = reverse