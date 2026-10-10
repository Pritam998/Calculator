let access_ans_screen = document.querySelector(".screen_ans")

let access_que_screen = document.querySelector(".screen_que")
let que_after_operation = document.querySelector(".screen_que_opt")
let operation_screen = document.querySelector(".screen_operation")

let zero = document.querySelector(".zero")
let one = document.querySelector(".one")
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let five = document.querySelector(".five")
let six = document.querySelector(".six")
let seven = document.querySelector(".seven")
let eight = document.querySelector(".eight")
let nine = document.querySelector(".nine")
let dot = document.querySelector(".dot")

let add = document.querySelector(".add")
let sub = document.querySelector(".sub")
let mul = document.querySelector(".mul")
let division = document.querySelector(".division")
let equalto = document.querySelector(".equalto")

let delete_btn = document.querySelector(".delete")

let operation_arr = [
    add,sub,mul,division,equalto
]

let cess = 0

function dele(){   // delete the content 
    delete_btn.addEventListener("click",function(){
        if(cess === 0){
            access_que_screen.textContent = access_que_screen.textContent.slice(0, -1)
            if ( access_que_screen.textContent.slice(-1)  == "."){
                d = 0
            }

        }else if(cess >= 1){
            que_after_operation.textContent = que_after_operation.textContent.slice(0,-1)
            if (que_after_operation.textContent.slice(-1) == "."){
                cess = 1
            }
        }
    })
}


let clear_all = document.querySelector(".all_clear")  // All clear Button 
clear_all.addEventListener("click",function(){    // All clear btn logic
    access_ans_screen.textContent = ""
    access_que_screen.textContent = ""
    que_after_operation.textContent = ""
    operation_screen.textContent = ""
    operation_a = ""
    cess = 0
    d = 0
})

let operation_a = ""
function opcheck(){   // Calculate answer based on the operation selctor
    if (operation_a === "add"){
        access_ans_screen.textContent = Number(access_que_screen.textContent) + Number(que_after_operation.textContent) 
    }else if(operation_a === "sub"){
        access_ans_screen.textContent = Number(access_que_screen.textContent) - Number(que_after_operation.textContent) 
    }else if(operation_a === "mul"){
        access_ans_screen.textContent = Number(access_que_screen.textContent) * Number(que_after_operation.textContent) 
    }else if(operation_a === "division"){
        access_ans_screen.textContent = Number(access_que_screen.textContent) / Number(que_after_operation.textContent) 
    }




}

function operation(){
    for(let i in operation_arr){
        operation_arr[i].addEventListener("click",function(){
            let audio = new Audio("./button_audio.mp3")
            audio.play();
            if (operation_arr[i].className === "add" && cess === 0){
                operation_screen.textContent += "+"
                cess += 1
                operation_a = ""
                operation_a += "add"
            }else if(operation_arr[i].className === "sub" && cess === 0){
                operation_screen.textContent += "-"
                cess += 1
                operation_a = ""
                operation_a += "sub"
            }else if(operation_arr[i].className === "mul" && cess === 0){
                operation_screen.textContent += "x"
                cess += 1
                operation_a = ""
                operation_a += "mul"
            }else if(operation_arr[i].className === "division" && cess === 0){
                operation_screen.textContent += "/"
                cess += 1
                operation_a = ""
                operation_a += "division"
            }

            if(operation_arr[i].className === "equalto"){
                opcheck() 
                cess = 0
                d = 1
            }
        })
    }
}

operation()
let btn_arr = [
    zero,one,two,three,four,five,six,seven,eight,nine,dot
]

let d = 0
for(let i in btn_arr){
    btn_arr[i].addEventListener("click",function(){
        let audio = new Audio("./button_audio.mp3")
            audio.play();
        if (Number(i) === btn_arr.length - 1){
            if(cess === 1){
                que_after_operation.textContent += "."
                cess += 1
            }else if(d == 0){
                access_que_screen.textContent += "."
                d = 1
            }
        }else if(cess >= 1){
            que_after_operation.textContent += i
        }else{
            access_que_screen.textContent += i
        }
}
)}

dele()


// CREATE THE DEL BUTTON LOGIC THEN WORK WITH UI THEN DEPLOY IT 
// DONT FORGET TO USE OVERFLOW AND SCROOL BAR SO THE CONTENT SHOULD NOT GO OUT OF THE BOX 



