/**
 * 연산자
 */

/**
 * 산술 연산자
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10+10);
console.log(10-10);
console.log(10*10);
console.log(10/10);
console.log(10%10);

console.log("--------------------");

console.log(10*(10+10));

/**
 * 증가와 감소
 */

let number=1;
number++;
console.log(number);

number--;
console.log(number);

/**
 *연산자의 위치
 */

 let result = 1;
 console.log(result);
 result = number++;
 console.log(number);

 /**
  * 숫자 타입이 아닌 타입에 +, -
  */
 let sample='99';
 console.log(+sample);
 console.log(typeof +sample);

 console.log(sample);
 console.log(typeof sample);

 sample=true;
 console.log(+sample);
 console.log(typeof +sample);

 sample=false;
 console.log(+sample);
 console.log(typeof +sample);


 sample='안유진';
 console.log(-sample);
 console.log(typeof -sample);

 sample='99';
 console.log(-sample);
 console.log(typeof -sample);

 
 sample='99';
 console.log(--sample);
 console.log(typeof --sample);

 /**
  * 할당 연산자
  */

 number =100;
 console.log(number);

 number += 10;
 console.log(number);

 number *= 10;
 console.log(number);

 number -= 10;
 console.log(number);

 /**
  * 비교 연산자
  * 1) 값의 비교
  * 2) 값과 타입의 비교
  */
 console.log(5==5);
 console.log(5=='5');
 console.log(0=='');
 console.log(true==1);
 console.log(true=='1');
 console.log(false==0);

 console.log("===========================");

 //타입까지 비교
 console.log(5===5);
 console.log(5==='5');
 console.log(0==='');
 console.log(true===1);
 console.log(true==='1');
 console.log(false===0);

 console.log("===========================");

 console.log(5!=5);
 console.log(5!='5');
 console.log(0!='');
 console.log(true!=1);
 console.log(true!='1');
 console.log(false!=0);

 console.log("===========================");



 //타입까지 비교
 console.log(5===5);
 console.log(5==='5');
 console.log(0==='');
 console.log(true===1);
 console.log(true==='1');
 console.log(false===0);
 
 console.log("===========================");