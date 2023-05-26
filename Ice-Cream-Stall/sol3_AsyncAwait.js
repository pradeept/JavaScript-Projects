// Steps 🧐 to prepare Ice-Cream using Async/Await functions and Promises.
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

// We will approach the problem with 2️⃣ functions namely 
// Kitchen(for doing work)🧑‍🍳 Time(for assigning the amount of time)⏲️

is_shop_open = true;



let Time = (ms)=>{
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
           setTimeout(resolve,ms);
        }
        
        else{
            reject(console.log("Shop is closed"));
        }
    });
}



let Kitchen = async ()=>{
    try{
        await Time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        await Time(0000)
        console.log("production has started")

        await Time(2000)
        console.log("fruit has been chopped")

        await Time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await Time(1000)
        console.log("start the machine")

        await Time(2000)
        console.log(`ice cream placed on ${stocks.holder[1]}`)

        await Time(3000)
        console.log(`${stocks.toppings[0]} as toppings`)

        await Time(2000)
        console.log("Serve Ice Cream")
    }  

    catch(error){
        console.log("Customer left")
    }
    

}

// 👇Trigger
Kitchen();

