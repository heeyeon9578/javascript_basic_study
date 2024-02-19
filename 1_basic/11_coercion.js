/**
 * 
 * 타입변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 32;

//명시적

let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

//암묵적
let test = age+'';

console.log(typeof test, test);
console.log('98'+2);
console.log('98'*2);
console.log('98'-2);

/** 
 * 명시적 변환 몇 가지 더 배우기
 */
console.log("명시적 변환 몇 가지 더 배우기");
console.log(typeof(99).toString());
console.log(typeof(true).toString());
console.log(typeof(Infinity).toString());

/**
 * 숫자 타입으로 변환
 */
console.log("숫자 타입으로 변환");
console.log(typeof parseInt('0'),parseInt('0'));
console.log(typeof parseFloat('0.99'),parseFloat('0.99'));
console.log(typeof+'1', +'1');

/**
 * Boolean 타입으로 변환
 */
console.log("Boolean 타입으로 변환");
console.log(!'x');//false
console.log(!!'x');//true
console.log(!!''); //false
console.log(!!0); //false
console.log(!!'0'); //true


/**
 * 
 */