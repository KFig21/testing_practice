function reverse(word) {
    let arr = word.split('')
    let answer = arr[0].toUpperCase();
    for(i=1; i < arr.length; i++){ answer += arr[i].toLowerCase() }
    return answer;
}

module.exports = reverse