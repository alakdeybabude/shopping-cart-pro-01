let plusItem = document.getElementById('plusItem')
let minusItem = document.getElementById('minusItem')

let plusItem1 = document.getElementById('plusItem1')
let minusItem1 = document.getElementById('minusItem1')

let subtotal = document.getElementById('subTotalPrice')
let totalPrice = document.getElementById('TotalPrice')
let vatPrice = document.getElementById('vatPrice')

function  increaseNumbers(itemValue,mobileCasePrices,Price,vPrice){
    var itemVal = document.getElementById(itemValue)//textBox1
       let casePrice = document.getElementById(mobileCasePrices)//case
       // console.log(casePrice.innerHTML)
       // console.log(itemVal.value)
       if(itemVal.value >= 100){
           itemVal.value = 100; 
       }else{
           itemVal.value = parseInt(itemVal.value)+1
           casePrice.innerHTML = parseInt(casePrice.innerHTML) + Price;
           subtotal.innerHTML = parseInt(subtotal.innerHTML) + Price;
           vatPrice.innerHTML = parseInt(vatPrice.innerHTML) + vPrice
           totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
       }
}

let increaseNumber = plusItem.addEventListener('click', function(){
    increaseNumbers('textBox','mobilePrice', 120,20)
})
let increaseNumber1 = plusItem1.addEventListener('click', function(){
    increaseNumbers('textBox1','case', 20, 20)
})

function decreaseNumbers(itemValue, mobileCasePrice, price, vPrice){
    var itemVal = document.getElementById(itemValue)
    let casePrice = document.getElementById( mobileCasePrice)
    // console.log(itemVal.value)
    if(itemVal.value <= 0){
        itemVal.value = 0; 
    }else{
        itemVal.value = parseInt(itemVal.value)-1
        casePrice.innerHTML = parseInt(casePrice.innerHTML) - price;
        subtotal.innerHTML = parseInt(subtotal.innerHTML) - price;
        vatPrice.innerHTML = parseInt(vatPrice.innerHTML) - vPrice
        totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
    }
}

let decreaseNumber = minusItem.addEventListener('click', function(){
    decreaseNumbers('textBox', 'mobilePrice', 120, 20)
})
let decreaseNumber1 = minusItem1.addEventListener('click', function(){
    decreaseNumbers('textBox1', 'case', 20, 20)
})

// let increaseNumber = plusItem.addEventListener('click', function(){
  
//     var itemVal = document.getElementById('textBox')
//     let mobilePrice = document.getElementById('mobilePrice')
//     console.log(mobilePrice.innerHTML)
//     // console.log(itemVal.value)
//     if(itemVal.value >= 100){
//         itemVal.value = 100; 
//     }else{
//         itemVal.value = parseInt(itemVal.value)+1;
//         mobilePrice.innerHTML = parseInt(mobilePrice.innerHTML) + 120
//         subtotal.innerHTML = parseInt(subtotal.innerHTML) + 120
//         vatPrice.innerHTML = parseInt(vatPrice.innerHTML) + 20
//         totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
//     }
// })

// let decreaseNumber = minusItem.addEventListener('click', function(){
//     var itemVal = document.getElementById('textBox')
//     var mobilePrice = document.getElementById('mobilePrice')

//     // console.log(itemVal.value)
//     if(itemVal.value <= 0){
//         itemVal.value = 0; 
//     }
//     else{
//         itemVal.value = parseInt(itemVal.value)-1;
//         mobilePrice.innerHTML = parseInt(mobilePrice.innerHTML) - 120;
//         subtotal.innerHTML = parseInt(subtotal.innerHTML) - 120;
//         vatPrice.innerHTML = parseInt(vatPrice.innerHTML) - 20
//         totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
//     }
 
// })

// let plusItem1 = document.getElementById('plusItem1')
// let minusItem1 = document.getElementById('minusItem1')

// let increaseNumber1 = plusItem1.addEventListener('click', function(){
//     increaseNumbers('textBox1','case')
    // var itemVal = document.getElementById('textBox1')
    // let casePrice = document.getElementById('case')
    // // console.log(casePrice.innerHTML)
    // // console.log(itemVal.value)
    // if(itemVal.value >= 100){
    //     itemVal.value = 100; 
    // }else{
    //     itemVal.value = parseInt(itemVal.value)+1
    //     casePrice.innerHTML = parseInt(casePrice.innerHTML) + 20;
    //     subtotal.innerHTML = parseInt(subtotal.innerHTML) + 20;
    //     vatPrice.innerHTML = parseInt(vatPrice.innerHTML) + 20
    //     totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
//     // }
// })

// let decreaseNumber1 = minusItem1.addEventListener('click', function(){
//     var itemVal = document.getElementById('textBox1')
//     let casePrice = document.getElementById('case')
//     // console.log(itemVal.value)
//     if(itemVal.value <= 0){
//         itemVal.value = 0; 
//     }else{
//         itemVal.value = parseInt(itemVal.value)-1
//         casePrice.innerHTML = parseInt(casePrice.innerHTML) - 20;
//         subtotal.innerHTML = parseInt(subtotal.innerHTML) - 20;
//         vatPrice.innerHTML = parseInt(vatPrice.innerHTML) - 20
//         totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
//     }
// })


// function  increaseNumbers(itemValue,casePrices){

//  var itemVal = document.getElementById(itemValue)//textBox1
//     let casePrice = document.getElementById(casePrices)//case
//     // console.log(casePrice.innerHTML)
//     // console.log(itemVal.value)
//     if(itemVal.value >= 100){
//         itemVal.value = 100; 
//     }else{
//         itemVal.value = parseInt(itemVal.value)+1
//         casePrice.innerHTML = parseInt(casePrice.innerHTML) + 20;
//         subtotal.innerHTML = parseInt(subtotal.innerHTML) + 20;
//         vatPrice.innerHTML = parseInt(vatPrice.innerHTML) + 20
//         totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
//     }
// }

// function decreaseNumbers(itemValue, mobilePrice, price, vPrice){
//     var itemVal = document.getElementById('textBox1')
//     let casePrice = document.getElementById('case')
//     // console.log(itemVal.value)
//     if(itemVal.value <= 0){
//         itemVal.value = 0; 
//     }else{
//         itemVal.value = parseInt(itemVal.value)-1
//         casePrice.innerHTML = parseInt(casePrice.innerHTML) - 20;
//         subtotal.innerHTML = parseInt(subtotal.innerHTML) - 20;
//         vatPrice.innerHTML = parseInt(vatPrice.innerHTML) - 20
//         totalPrice.innerHTML = parseInt(subtotal.innerHTML) + parseInt(vatPrice.innerHTML)
//     }

// }