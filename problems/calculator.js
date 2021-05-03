function calculator(math, ...nums) {
    if (math === "+" || math === "add"){
        return nums.reduce((acc, cum) => acc + cum, 0)
    } else if (math === "-" || math === "subtract"){
        return nums.reduce((acc, cum) => acc - cum)
    } else if (math === "x" || math === "*" || math === "multiply"){
        return nums.reduce((acc, cum) => acc * cum)
    } else if (math === "/" || math === "divide"){
        return nums.reduce((acc, cum) => acc / cum)
    } else {
        return "can not compute"
    }
}

module.exports = calculator