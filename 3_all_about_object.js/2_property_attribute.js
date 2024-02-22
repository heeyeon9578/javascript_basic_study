/**
 * property attribute
 * 
 * 프로퍼티에 속성이 추가 된다. 
 * 
 * 1) 데이터 프로퍼티 - 키와 값으로 형성된 실질적 값을 갖고있는 프로퍼티
 * 2) 액세서 프로퍼티 - 자체적으로 값을 가지고 있지 않지만 다른 값을 가져오거나
 * 설정할때 호출되는 함수로 구성된 프로퍼티
 * ex) getter ,setter
 */

const yuJin ={
    name:'안유진',
    year:2003,
};
console.log(Object.getOwnPropertyDescriptor(yuJin,'name')); //클래스에 직접 붙어있는 점-> static 메서드
console.log(Object.getOwnPropertyDescriptor(yuJin,'year'));

/**
 * value: 실제 프로퍼티 값
 * writable: 값을 수정할 수 있는지 여부, false면 프로퍼티 수정 불가
 * enumerable: 열거가 가능한지 여부, for...in 등을 사용할 수 잇으면 true
 * configurable: 프로퍼티 어트리뷰트의 재정의가 가능한지 여부 판단
 *                false 일 경우 프로퍼티 삭제나 어트리뷰트 변경 불가
 *                단, writable이 true인 경우 값 변경과 writable 을 변경하는 건 가능
 */

console.log(Object.getOwnPropertyDescriptors(yuJin));

const yuJin2 = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear() -this.year;
    },

    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}

console.log(yuJin2);
console.log(yuJin2.age);

yuJin2.age  =32;
console.log(yuJin2.age);
console.log(yuJin2.year);

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'age'));

// yuJin2.height = 172;
// console.log(yuJin2.height);
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));


Object.defineProperty(yuJin2,'height',{
    value: 172,
    writable:true,
    enumerable:true,
    configurable:true,
});
console.log(yuJin2);
console.log(yuJin2.height);
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

yuJin2.height=180;
console.log(yuJin2.height);

// Object.defineProperty(yuJin2,'height',{
    
//     writable:false,
// })
// console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));


yuJin2.height=110;
console.log(yuJin2.height);

/**
 * Enumerable
 */

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2,'name',{
    
    enumerable:false,
})

console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

console.log(Object.keys(yuJin2));
for(let key in yuJin2){
    console.log(key);
}

Object.defineProperty(yuJin2,'height',{
    writable:true,
    configurable:false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));
Object.defineProperty(yuJin2,'height',{
    value:172,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//writable 이 true 면 configurable 이 false더라도, false로 변경 가능
Object.defineProperty(yuJin2,'height',{
    writable:false,
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'height'));

//에러 !! configurable:false,
// Object.defineProperty(yuJin2,'height',{
    
//     enumerable:false,
// })