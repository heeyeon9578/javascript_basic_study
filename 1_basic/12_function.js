/**
 * 함수
 * 
 * Object 임
 */

/**
 * 만약에 2라는 숫자에 * 10/2%3 스트링으로 변환해서 
 * 반환받고 싶다면 어떻게 해야할까?
 * 
 */

console.log((2*10/2%3).toString());
console.log((3*10/2%3).toString());
/**
 * DRY
 * D-> Don't
 * R-> Repeat
 * Y->Yourself
 */

function calculate(x){
    console.log((x*10/2%3).toString());
}


calculate(4);

/**
 * 함수에서 입력받은 값에 대한 정의를 parameter 라고 한다
 * 
 * 실제 입력하는 값은 argument라고 한다
 */

function multiply(x, y){
    console.log(x*y);
}

multiply(2, 3);

function multiply(x, y=10){
    console.log(x*y);
}

multiply(2);

/**
 * 반환받기
 * 
 */

function multiply(x, y=10){
    return x*y;
}

const result1 = multiply(2);
console.log(result1);

/**
 * Arrow 함수
 */

const multiply2 = (x, y) =>{
    return x * y;
}
const result2 = multiply2(2,3 );
console.log(result2);

const multiply3 = (x, y) => x*y;
const result3 = multiply2(2,3 );
console.log(result3);

const multiply4 = x => x*2;
const result4 = multiply4(2);
console.log(result4);

const multiply5 = x=> y=> z=> `${x} ${y} ${z}`;
console.log(multiply5(2)(5)(9));

function multiply6(x){
    return function(y){
        return function(z){
            return `${x} ${y} ${z}`;
        }
    }
}
console.log(multiply6(2)(5)(9));

const multiplyTwo = function(x,y){
    return x*y;
}

console.log(multiplyTwo(4,5));

const multiplyThree = function(x,y,z){
    console.log("arguments"+arguments);
    return x*y*z;
}
console.log(multiplyThree(4,5,6));

const multiplyAll = function(...arguments){
    return Object.values(arguments).reduce((a,b)=>a*b,1);
}

console.log(multiplyAll(3,4,5,6,7,8));

/** 즉시 실행 */
(function(x,y){
    console.log(x,y);
})(4,5)

console.log(typeof multiply);
console.log(multiply instanceof Object);

