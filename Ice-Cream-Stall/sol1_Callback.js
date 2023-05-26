// Steps 🧐 to prepare Ice-Cream
/*
                                  ⏲️ 
    1️ Place order               - 2s
    2️ Cut🔪 the Fruit🍓         - 2s 
    3️ Add water💧 and ice 🧊    - 1s
    4 Start the machine 🔨      - 1s
    5 Select Container 🥡       - 2s
    6 Select Toppings 🍫 🥜     - 3s
    7 Serve the Ice Cream 🍦    - 2s

*/


let stocks = {
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    toppings:["chocolate","peanuts"]
}




// 1️⃣ Function

let order = (fruit_name, call_production)=>{
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} was selected`);
        call_production();
    },2000);
}




// 2️⃣ Function

let production = ()=>{
    setTimeout(()=>{
        console.log("production has started")
        setTimeout(()=>{
          console.log("The fruit has been chopped")
          setTimeout(()=>{
            console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
            setTimeout(()=>{
              console.log("start the machine")
              setTimeout(()=>{
                console.log(`Ice cream placed on ${stocks.holder[1]}`)
                setTimeout(()=>{
                  console.log(`${stocks.toppings[0]} as toppings`)
                  setTimeout(()=>{
                    console.log("serve Ice cream")
                  },2000)
                },3000)
              },2000)
            },1000)
          },1000)
        },2000)
      },0000)  
};


// Trigger 👇
order(0,production);



// 🆗 CONCLUSION 
/*

 😫 😕 This approach gets us into callback hell.
 Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other.

*/