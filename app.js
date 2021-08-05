let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')

btn1.addEventListener('click', changeColorOfDiv)
btn2.addEventListener('click', changeColorOfDiv)
btn3.addEventListener('click', changeColorOfDiv)
btn4.addEventListener('click', changeColorOfDiv)

const characterArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']

function changeColorOfDiv(event){
    const newColor = randomColor()
    const reversedColor = reverseColor(newColor)
    const childDiv = event.target.parentElement
    childDiv.style.backgroundColor = newColor

    childDiv.children[0].textContent = newColor
    childDiv.children[0].style.color = reversedColor

    // console.log(childDiv.children[0])
    // console.log(childDiv.childNodes)

    // console.log(event.target.parentElement)
}

function randomColor(){
    let str = "#"
    for(let i=0; i<6; i++){
        let index = Math.floor(Math.random() * characterArr.length) // 0 - 15
        str = str + characterArr[index]
    }
    return str
}

function reverseColor(str){
    str = str.slice(1)
    console.log(str)

    let reverseStr = "#";

    for(let i=str.length-1; i>=0; i--){
        reverseStr = reverseStr + str[i]
    }

    return reverseStr
}

// console.log(Math.floor(Math.random() * 16)) // 0 - 15

// let val = null
// console.log(val)

// Data Types
// Primitive Data - Number, String, Boolean, null, undefined, Symbol

// User Defined/Object - object, arrays, function








// getElementsByClassName, getElementsByTagName, querySelectorAll

// --> HTML Collections [Array], Node List [Array]

// keypress, keydown, keyup, mouseover, mousein, mouseout