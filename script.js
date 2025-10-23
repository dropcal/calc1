// const myFriend = "Toshine"
// console.log(showMyFriend.innerText);
// showMyFriend.innerHTML = myFriend

// console.log(firstNumber.innerHTML);
const multiply = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);
    const answer = firstNumber.value * secondNumber.value
    // console.log(answer);
    showResult.innerHTML = 'The answer is'+ answer + 'cm'
}

// Additional
const addition = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);  
    const result = Number (firstNumber.value) +  Number(secondNumber.value)
    // const num1 = Number(firstNumber.value) 
    // const num2 = Number(secondNumber.value) 
    // const result = num1 + num2
    // console.log(result);
    showResult.innerHTML =  result   
}

// Substitution
const substract = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);
    const equal = Number(firstNumber.value) - Number(secondNumber.value)
    // const num3 = Number(firstNumber.value)
    // const num4 = Number(secondNumber.value)
    // const equal = num3 - num4
    // console.log(equal);   
    showResult.innerHTML =equal
}

// Division
const division = () => {
    // console.log(firstNumber.value);
    // console.log(secondNumber.value);
    const result = firstNumber.value / secondNumber.value
    // console.log(result);
    showResult.innerHTML = result
}

// Area os a Trapezium
// const trapezium = () => {
//     console.log(firstBase.value);
//     console.log(secondBase.value);
//     console.log(onlyHeight.value);
//     const base1 = Number(firstBase.value)
//     const base2 = Number(secondBase.value)
//     const result = (0.5 * (base1+base2)*onlyHeight.value)
//     console.log(result);
//     showTrapezium.innerHTML = result 
// }

// Area of a Body Mass Index 
// const BMI = () => {
//     console.log(firstWeight.value);
//     console.log(firstHeight.value);
//     const result = (firstWeight.value/(firstHeight.value**2))
//     console.log(result);
//     showBMI.innerHTML = result
    
// }

