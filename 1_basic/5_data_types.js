/**
 * Data types
 * 
 * 여섯 개의 Primitive Type
 * 한 개의 오브젝트 Type
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean 
 * 4) undefined
 * 5) null
 * 6) symbol
 * 7) object 
 *      function
 *      array
 *      object
 */

/**
 * 1번
 */

const age = 32;
const tempature = -10;
const pi = 3.14;

console.log(typeof age);
console.log(typeof tempature);
console.log(typeof pi);
console.log("-------------------------------");

const infinity = Infinity;
const nInfinity = -Infinity;


console.log(typeof infinity);
console.log(typeof nInfinity);

/**
 * 2. string
 */

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "'코드팩토리' 안녕";
console.log(typeof ive);
console.log(ive);

/**
 * Template Literal
 * 
 * 1) newline-> \n
 * 2) tab -> \t
 * 3) 백슬래쉬를 스트링? : 2번입력
 */

const iveYuJin2 ='아이브\n유진';
console.log(iveYuJin2);
const iveYuJin3 ='아이브\t유진';
console.log(iveYuJin3);
const iveYuJin4 ='아이브\\유진';
console.log(iveYuJin4);
const smallQutoation ='아이브\'코드팩토리';
console.log(smallQutoation);

const iveWonYoung2 = `아이브


원영`;

console.log(iveWonYoung2);
console.log(`${iveWonYoung2}원영`)

/**
 * Boolean
 */

const isTrue = true;
const isFalse = false;

console.log(typeof isTrue);
console.log(typeof isFalse);

/**
 * undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을 때 
 * 지정되는 값이다.
 * 
 * 직접 undefined로 값을 초기화하는건 지양해야한다.
 */

let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * null
 * 
 * undefined 와 마찬가지로 값이 없다는 뜻이나
 * JS 에서는 개발자가 명시적으로 없는 값으로 초기화할때 사용
 */

let init=null;
console.log(init);
console.log(typeof init); // 버그

/**
 * Symbol 
 * 
 * 유일무이한 값을 생성할 때 사용
 * 다른 프리미티브 값들고 다르게 symbol 함수를 호출해서 사용
 * 
 */

const test1 = '1';
const test2 ='1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/**
 * object 타입 
 * 
 * Map
 * key:value 쌍
 * 
 */

const dictionary={
    red:'빨간색',
    orange:'주황색',
    yellow:'노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(dictionary['orange']);
console.log(dictionary['yellow']);



/**
 * Array 
 * 값을 리스트로 나열 할 수 있는 타입
 */

const iveMembersArray=[
    '안유진',
    '가을',
    '레이',
    '장원영',

]

console.log(iveMembersArray);
console.log(iveMembersArray[0]);
console.log(iveMembersArray[2]);

/**
 * static typing -> 변수를 선언할때 어떤 타입의 변수를 선언할지 명시
 * 
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 추론
 * 
 * js-> dynamic typing 
 */

