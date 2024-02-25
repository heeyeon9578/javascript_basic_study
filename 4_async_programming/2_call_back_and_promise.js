/**
 * call back
 */

// function waitAndRun(){
//     setTimeout(()=> {
//         console.log('끝');
//     }, 2000);
// }

// waitAndRun();

// function waitAndRun2(){
//     setTimeout(
//         ()=>{
//             console.log('1콜백 끝');

//             setTimeout(()=>{
//                 console.log('2콜백 끝');

//                 setTimeout(()=>{
//                     console.log('3콜백 끝');
//                 },2000)
//             },2000)
//         },2000
//     )
// }

// waitAndRun2();

/**
 * promise
 */

const timeoutPromise = new Promise((resolve, reject)=>{ //resolve,reject 순서 중요, 변수명은 자유
    setTimeout(()=>{
        resolve('완료');
    },2000)
});

timeoutPromise.then((res)=>{
    console.log(res);

});
//resolve
const getPromise = (seconds)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('완료');
    },seconds*1000);
});

// getPromise(3).then((res)=>{
//     console.log('--------first then----------');
//     console.log(res);
//     return getPromise(3);
// }).then((res)=>{
//     console.log('----second then-------');
//     console.log(res);
//     return getPromise(3);
// }).then((res)=>{
//     console.log('----third then-------');
//     console.log(res);
//     return getPromise(3);
// }).then((res)=>{
//     console.log('----forth then-------');
//     console.log(res);
//     return getPromise(3);
// })
// //reject
// const getPromise2 = (seconds)=> new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         reject('완료');
//     },seconds*1000);
// });

// getPromise2(3)
//     .then((res)=>{
//     console.log('--------first then----------');
//     console.log(res);
    
//     })
//     .catch((res)=>{
//         console.log('--------first catch----------');
//     console.log(res);
//     })
//     .finally(()=>{
//         console.log('--------first finally----------');
//     })


Promise.all([ // 가장 느린 함수 기준으로 then 이나 catch가 불림
    getPromise(1),
    getPromise(4),
    getPromise(1),
]).then(res=>{
    console.log(res);
})

