function caeser(message, shift) {
    const lowerAlpha = "abcdefghijklmnopqrstuvwxyz"
    const upperAlpha = lowerAlpha.toUpperCase();
    let answer = '';
    while (shift > 25){
        shift = shift - 26
    }
    if (shift === undefined){
        shift = 1;
    }
    for (i=0; i<message.length; i++){
        let newIndex = 0;
        if (lowerAlpha.includes(message[i])){
            newIndex = lowerAlpha.indexOf(message[i]) + shift;
            if (newIndex > 25) { newIndex = newIndex - 26 };
            answer += lowerAlpha[newIndex]
        } else if (upperAlpha.includes(message[i])){
            newIndex = upperAlpha.indexOf(message[i]) + shift;
            if (newIndex > 25) { newIndex = newIndex - 26 };
            answer += upperAlpha[newIndex]
        } else {
            answer += message[i]
        }
    }
    return answer
}

module.exports = caeser