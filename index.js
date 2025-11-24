let scoreDisplayer1 = document.getElementById("score-displayer1")
let scoreDisplayer2 = document.getElementById("score-displayer2")
let totalScore1Displayer = document.getElementById("total1")
let totalScore2Displayer = document.getElementById("total2")


let score1 = 0;
let score2 = 0;


let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")

btn1.addEventListener("click", function(){
    score1 += 1
    scoreDisplayer1.textContent = score1	
})

btn2.addEventListener("click", function(){
    score1 += 2
    scoreDisplayer1.textContent = score1	
})
btn3.addEventListener("click", function(){
    score1 += 3
    scoreDisplayer1.textContent = score1	
})
btn4.addEventListener("click", function(){
    score2 += 1
    scoreDisplayer2.textContent = score2	
})

btn5.addEventListener("click", function(){
    score2 += 2
    scoreDisplayer2.textContent = score2
})
btn6.addEventListener("click", function(){
    score2 += 3
    scoreDisplayer2.textContent = score2
})


btn7.addEventListener("click", function(){
let scoreStr1 = score1 + " - "
    totalScore1Displayer.textContent += scoreStr1
    scoreDisplayer1.textContent = 0
    score1 = 0;
    
    
    
})
btn8.addEventListener("click", function(){
     let scoreStr2 =  score2 + " - "
    totalScore2Displayer.textContent += scoreStr2
    scoreDisplayer2.textContent = 0
    score2 = 0
})



// function save() {
//     let countStr = count + " - "
//     saveEl.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }

// console.log("Let's count people on the subway!")