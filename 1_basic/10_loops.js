/**
 * Loops
 * 
 * 1) for
 * 2) while
 */

for(let i=0; i<10; i++){
    console.log(i);
}
console.log("========================");
for(let i=10; i>0; i--){
    console.log(i);
}

//*를 이용해서 6x6의 정사각형을 출력
//내 답
for(let i=0; i<6; i++){
    for(let j=0; j<6; j++){
        process.stdout.write("*");
    }
    console.log();
}

//진짜 답
let square='';
let side=6;

for(let i=0; i<side; i++){
    for(let j=0; j<side; j++){
        square+='*';
    }
    square+='\n';
}

console.log(square);

/**
 * for ...in
 */
console.log("======for ...in object======");
const yuJin={
    name:'안유진',
    year:2003,
    group:'아이브',
}
for(let key in yuJin){
    console.log(key);
}


//array
console.log("======for ...in array======");
const iveMembers=['안유진', '가을'];

for(let key in iveMembers){
    
    console.log(`${key}:${iveMembers[key]}`)
}

/**
 * for...of
 */
console.log("======for ...of======");
for(let value of iveMembers){
    console.log(value);
}

/**
 * while
 */
console.log("======while=====");
let number=0;
while(number<10){
    number ++;
    console.log(number);
}

/**
 * do while
 */
console.log("======do while=====");
number=0;
do{
    number ++;
    console.log(number);
}while(number==0);

/**
 * break
 * 
 * 멈추기
 */
console.log("======for break=====");
for(let i=0; i<10; i++){
    console.log(i);
    if(i===5){
        break;
    }
}
console.log("======while break=====");
number=0;
while(number<10){
    if(number===5){
        break;
    }
    number ++;
    console.log(number);
}

/**
 * continue
 * 
 * 건너뛰기
 */
console.log("======continue=====");
for(let i=0; i<10; i++){
    if(i===5){
        continue;
    }
    console.log(i);
}