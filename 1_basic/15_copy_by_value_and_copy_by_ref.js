/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value 이다
 * 2) 객체는 copy by reference
 */

let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

// clone+= '안유진';
// console.log(original);
// console.log(clone);

original+= '안유진';
console.log(original);
console.log(clone);

let originalObj={
    name:'최희연',
    group:'아이브'
}

let cloneObj = originalObj;
console.log("originalObj, cloneObj");
console.log(originalObj);
console.log(cloneObj);

originalObj['name']= '희요니';
console.log(originalObj);
console.log(cloneObj);
console.log(originalObj===cloneObj);

let originArray=['희연','수연'];
let cloneArray=originArray;
console.log(originArray);
console.log(cloneArray);
originArray.push('엄마');
console.log(originArray);
console.log(cloneArray);

const yuJin1={
    name:'안유진',
    group:'아이브'
};

const yuJin2 = yuJin1;
const yuJin3={
    name:'안유진',
    group:'아이브'
};

console.log(yuJin1 ===yuJin2); //true
console.log(yuJin1 ===yuJin3); //false
console.log(yuJin2 ===yuJin3); //false

/**
 * spread operator 
 * 순서가 매우 중요!!!
 * copy by value
 */
const yuJin4={
    ...yuJin3,
}

console.log(yuJin4);
console.log(yuJin4===yuJin3);

const yuJin6 = {
    name:'코드팩토리',
    ...yuJin3,
}
const yuJin7 = {
   
    ...yuJin3,
    name:'코드팩토리',
}
console.log(yuJin7);

const numbers=[1,3,5];

const numbers2 =[
    10,
    ...numbers,
];

console.log(numbers2);