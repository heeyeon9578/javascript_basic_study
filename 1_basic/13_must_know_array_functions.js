/**
 * Array Functions
 */

let iveMembers =[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

console.log(iveMembers);
//push 마지막 값 넣기
iveMembers.push('희연');
console.log(iveMembers);

//pop 마지막 값을 삭제
console.log(iveMembers.pop());
console.log(iveMembers);

//shift() 첫번째 값을 삭제
console.log(iveMembers.shift());
console.log(iveMembers);

//unshift() 처음 값 넣기
console.log(iveMembers.unshift('희연'));
console.log(iveMembers);

console.log(iveMembers.splice(0,3));
console.log(iveMembers);


console.log(iveMembers);

iveMembers =[
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서'
]

console.log(iveMembers);

//concat() 새로운 공간을 만들어서 반환
console.log(iveMembers.concat('코드팩토리'));
console.log(iveMembers);

//slice() 새로운 공간을 만들어서 반환
console.log(iveMembers.slice(0,3));
console.log(iveMembers);

//spread operator
let iveMembers2 =[
    ...iveMembers,
]

console.log(iveMembers2);

//join()
console.log(typeof iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

//sort()
//오름차순
iveMembers.sort();
console.log(iveMembers.reverse());

let numbers=[
    1,
    9,
    7,
    5,
    3,
];

//a,b 를 비교했을때
//1) a를 b보다 나중에 정렬 - 0보다 큰 숫자 반환
//2) 원래 그대로 두려면 0 반환
console.log(numbers);
numbers.sort((a,b)=>{
    return a>b? 1:-1;
});
console.log(numbers);

numbers.sort((a,b)=> a > b ? -1 : 1);
console.log(numbers);

//map() 모든 값을 순회
console.log(iveMembers.map(x=>x));
console.log(iveMembers.map(x=>`아이브: ${x}`));

console.log(iveMembers.map(x=>{
    if(x==='안유진'){
        return  `아이브: ${x}`;
    }else{
        return x;
    }
}));

console.log(numbers);

//filter() 해당되는 값 모두 반환
numbers=[1,8,7,6,3];
console.log(numbers.filter((x)=>x %2 ===0));

//find() 해당되는 값 첫번째 값만 반환
console.log(numbers.find((x)=> x%2===0));

//findIndex()
console.log(numbers.findIndex((x)=> x%2===0));
 
//reduce() 콜백함수, 초기값
console.log(numbers.reduce((p,n)=>p+n,0));

