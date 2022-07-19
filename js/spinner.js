// const plus = document.querySelector(".plus"),
// minus = document.querySelector(".minus"),
// num = document.querySelector(".num");

// let a = 1;

// plus.addEventListener("click", ()=>{
//     a++;
//     a = ( a < 10 ) ? "0" + a : a;
//     num.innerText = a;
//     console.log("a");
// });

// minus.addEventListener("click", ()=>{
//     if(a > 1){
//         a--;
//         a = ( a < 10) ? "0" + a : a;
//         num.innerText = a;
//     }
// });

// $(function(){
//     $('input[type]').niceNumber();
// })

// const myInput1 = document.getElementById("my-input-1");
// function stepper(btn){
//     let id = btn.getAttribute("id");
//     let min = myInput1.getAttribute("min");
//     let max = myInput1.getAttribute("max");
//     let step = myInput1.getAttribute("step");
//     let val = myInput1.getAttribute("value");
//     let calcStep = (id == "increment") ? (step*1) : (step*-1);
//     let newValue = parseInt(val)+calcStep;

//     if(newValue >= min && newValue <= max){
//         myInput1.setAttribute("value",newValue);
//     }
// }

var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');
// console.log(incrementButton);
// console.log(decrementButton);


// เพิ่มจำนวน INCREMENT
for(var i = 0; i < incrementButton.length; i++){
    var button = incrementButton[i];
    button.addEventListener('click',function(event){

        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        console.log(input);
        var inputValue = input.value;
        // console.log(inputValue);
        var newValue = parseInt(inputValue) + 1;
        // console.log(newValue);
        input.value = newValue;
        
    })
}

// ลดจำนวน INCREMENT

for(var i = 0; i < decrementButton.length; i++){
    var button = decrementButton[i];
    button.addEventListener('click',function(event){

        var buttonClicked = event.target;
        // console.log(buttonClicked);
        var input = buttonClicked.parentElement.children[1];
        console.log(input);
        var inputValue = input.value;
        // console.log(inputValue);
        var newValue = parseInt(inputValue) - 1;
        // console.log(newValue);
        if (newValue >= 1){
            input.value = newValue;
        }
        else{
            alert('กรุณากดลบที่ปุ่ม Remove ( สีส้ม )');
        }

    })
}