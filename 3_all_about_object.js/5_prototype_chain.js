/**
 * prototype
 */

const testObj = {};

//__proto__ 모든 객체에 존재하는 프로퍼티이다.
//class 강의에서 배울 때 상속에서 부모 클래스에 해당되는 값이다.
console.log(testObj.__proto__);

function IdolModel(name, year){
    this.name=name;
    this.year=year;
}
console.log(IdolModel.prototype);
console.dir(IdolModel.prototype, {
    showHidden:true,
});
/**
 * 서로가 서로를 참조하고 있는 현상
 * circular reference
 */
console.log(IdolModel.prototype.constructor==IdolModel) //같은 메모리 주소 참조
console.log(IdolModel.prototype.constructor.prototype==IdolModel.prototype) //같은 메모리 주소 참조

const yuJin=new IdolModel('안유진',2003);
console.log(yuJin.__proto__);
console.log(yuJin.__proto__===IdolModel.prototype);

console.log(testObj.__proto__=== Object.prototype);

console.log(IdolModel.__proto__=== Function.prototype);
console.log(Function.prototype.__proto__===  Object.prototype);
console.log(IdolModel.prototype.__proto__=== Object.prototype);

console.log(yuJin.toString());
console.log(Object.prototype.toString());

function IdolModel2(name,year){
    this.name = name;
    this.year = year;

    this.sayHello = function(){
        return `${this.name}이 인사를 합니다.`;
    }
}

const yuJin2 =  new IdolModel2('안유진', 2003);
const wonYoung2 = new IdolModel2('장원영', 2002);

console.log(yuJin2.sayHello());
console.log(wonYoung2.sayHello());
console.log(yuJin2.sayHello===wonYoung2.sayHello); //false

console.log(yuJin2.hasOwnProperty('sayHello')); //상속을 받은건지, 고유로 갖고 있는지 알려줌 //true

function IdolModel3(name,year){
    this.name=name;
    this.year= year;
}

//공용인 sayHello 함수를 만들기 위해 함수밖에서 정의
IdolModel3.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다`;
}

const yuJin3 = new IdolModel3('안유진', 2003);
const wonYoung3 = new IdolModel3('장원영', 2002);
console.log(yuJin3.sayHello());
console.log(wonYoung3.sayHello());
console.log(yuJin3.sayHello===wonYoung3.sayHello); //true

console.log(yuJin.hasOwnProperty('sayHello')); //false

IdolModel3.sayStaticHello = function(){
    return '안녕하세요 저는 static method 입니다.';
}

console.log(IdolModel3.sayStaticHello());

/**
 * Overriding
 * 
 * 클래스 내에서 재정의
 */

function IdolModel4(name, year){
    this.name = name;
    this.year = year;

    this.sayHello=function(){
        return '안녕하세요 저는 인스턴스 메서드 입니다!';
    }
}

IdolModel4.prototype.sayHello = function(){
    return '안녕하세요 저는 prototype 메서드 입니다!';
}

const yuJin4 = new IdolModel4('안유진',2003);
console.log(yuJin4.sayHello());

/**
 * getPrototypeOf, setPrototypeOf
 * 
 * 인스턴스의 __proto__ 변경 vs 함수의 prototype 변경
 */

function IdolModel(name, year){
    this.name = name;
    this.year =year;
}

IdolModel.prototype.sayHello = function(){
    return `${this.name}이 인사를 합니다.`;
}

function FemaleIdolModel(name, year){
    this.name=name;
    this.year=year;
    this.dance = function(){
        return `${this.name}이 춤을 춥니다`;

    }
}

const gaEul = new IdolModel('가을',2004);
const ray  = new FemaleIdolModel('레이', 2004);

console.log(gaEul.__proto__);
console.log(gaEul.__proto__ === IdolModel.prototype); //true
console.log(Object.getPrototypeOf(gaEul) === IdolModel.prototype); //true
console.log(gaEul.sayHello());
console.log(ray.dance());
console.log(Object.getPrototypeOf(ray) === IdolModel.prototype); //false

Object.setPrototypeOf(ray, IdolModel.prototype);
console.log(ray.sayHello());

console.log(ray.constructor===FemaleIdolModel); //false
console.log(ray.constructor ===IdolModel); //true
console.log(Object.getPrototypeOf(ray)=== FemaleIdolModel.prototype);//false
console.log(Object.getPrototypeOf(ray)=== IdolModel.prototype);//true
console.log(FemaleIdolModel.prototype === IdolModel.prototype);//false

FemaleIdolModel.prototype = IdolModel.prototype;

const eSeo = new FemaleIdolModel('이서',2007);
console.log("Object.getPrototypeOf(eSeo)=== FemaleIdolModel.prototype: "+(Object.getPrototypeOf(eSeo)=== FemaleIdolModel.prototype)); //true
console.log("Object.getPrototypeOf(eSeo)=== IdolModel.prototype: "+(Object.getPrototypeOf(eSeo)=== IdolModel.prototype)); //true

