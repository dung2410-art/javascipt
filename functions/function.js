function sum(a, b, callback){
    let tong = a+b
    //return a + b; 
    setTimeout(()=>{
        callback(tong)
    },5000)
   
}

let printSum = (message) => {
    console.log("sum a +b = ", message)
}

sum(6,9, printSum)

// function getName(){
//     //return tín hiệu xem hàm trả về cái gì, thoát ra khỏi 1 function
// }


// let sum = (a,b) => {

// }