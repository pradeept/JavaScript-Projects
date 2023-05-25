// Steps 🧐 to prepare Ice-Cream using Promises.
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


//we will divide task into two aspects namely Time ⏲️ and Work 👷🔨



let is_shop_open = false;



let order = (time,work)=>{
    //we are gonna make Promise 🙌 to our customer, We will serve the ice-cream 👍 
    
    return new Promise((resolve,reject)=>{
        if (is_shop_open){
            setTimeout(()=>{
                resolve(work())
            },time)
        }else{
            
            reject(console.log("Shop is closed"));
        }
    });
}

//this is "resolve"
// step 1️
order(2000,()=>console.log(`${stocks.fruits[0] } was selected`))


//.then returns promises when it is resolved 👆, and we form Promise Chaining ⛓️ (chain of .then's)


//step 2️
.then(()=>{
    return order(0000,()=>console.log("Production has started"));
})

// step 3
.then(()=>{
  return order(2000, ()=>console.log("Fruit has been chopped"))
})

// step 4
.then(()=>{
  return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})

// step 5
.then(()=>{
  return order(1000, ()=>console.log("start the machine"))
})

// step 6
.then(()=>{
  return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
})

// step 7
.then(()=>{
  return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
})

// Step 8
.then(()=>{
  return order(2000, ()=>console.log("Serve Ice Cream"))
})


//.catch works when promise is rejected
.catch(()=>{
    console.log("Come Tomorrow!");    
})

//.finally works regardless of whether our promise was resolved or rejected
.finally(()=>{
    console.log("End of the Day!");
});
