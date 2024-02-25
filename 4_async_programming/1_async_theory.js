/**
 * Async theory
 */
/**
 * milliseconds since epoch
 * 1970년도 1월 1일부터 지금 코드가 실행되는 순간까지의 시간을 
 * 밀리초로 반환한다.
 */
// function longWork(){
//     const now = new Date();
//     const milliseconds = now.getTime();
//     const afterTwoSeconds = milliseconds+2*1000;
//     while(new Date().getTime()<afterTwoSeconds){

//     }
//     console.log('완료');
// }
// console.log('hello');
// longWork();
// console.log('world!');

function longWork(){
    setTimeout(()=>{ // 기본제공, 비동기로 설계됨
        console.log('완료');
    },2000);
}

console.log('Hello');
longWork();
console.log('World!');




