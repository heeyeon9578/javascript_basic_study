/**
 * Immutable Object "Immutable"이란 객체나 데이터가 생성된 후에 변경될 수 없음
 */

const yuJin = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear()- this.year;
    },
    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}

console.log(yuJin);

/**
 * Extensible 확장
 */

console.log(Object.isExtensible(yuJin));
yuJin['position']= 'vocal';

Object.preventExtensions(yuJin);
console.log(Object.isExtensible(yuJin));
yuJin['gg']= 'vocal';
console.log(yuJin);

delete yuJin['position'];
console.log(yuJin);

/**
 * Seal
 */

const yuJin2 = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear()- this.year;
    },
    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}
console.log(yuJin2);
console.log(Object.isSealed(yuJin2));
Object.seal(yuJin2);
console.log(Object.isSealed(yuJin2));

delete yuJin2['name'];
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name',{
    value:'코드팩토리',
})
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));

/**
 * freezed
 * 
 * 읽기 외의 모든 기능을 불가능하게 만들기
 */
const yuJin3 = {
    name:'안유진',
    year:2003,

    get age(){
        return new Date().getFullYear()- this.year;
    },
    set age(age){
        this.year = new Date().getFullYear()-age;
    }
}
console.log(yuJin3);
console.log(Object.isFrozen(yuJin3));
Object.freeze(yuJin3);
console.log(Object.isFrozen(yuJin3));
console.log(Object.getOwnPropertyDescriptor(yuJin3,'name'));

const yuJin4 = {
    name:'안유진',
    year:2003,
    wonYoung:{
        name:'장원영',
        year:2002,
    },
}
Object.freeze(yuJin4);
console.log(Object.isFrozen(yuJin4));
console.log(Object.isFrozen(yuJin4['wonYoung']));