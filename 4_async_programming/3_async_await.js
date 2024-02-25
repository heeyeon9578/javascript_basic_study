/**
 * Async / Await
 */

const getPromise =(seconds)=>new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('완료');

    }, seconds *1000)
});

async function runner(){
    try{
        const result1 = await getPromise(1);
        console.log(result1);
        const result2 = await getPromise(2);
        console.log(result2);
        const result3 = await getPromise(3);
        console.log(result3);
    }catch(ex){
        console.log(ex);
    }
   
}
runner();
console.log('실행끝');