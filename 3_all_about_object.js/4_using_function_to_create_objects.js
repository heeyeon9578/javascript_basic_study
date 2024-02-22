/**
 * using function to create objects
 */

function IdolModel(name,year){
    //함수를 new 키워드로 만들지 않았을 경우 실행
    if(!new.target){
        return new IdolModel(name,year);
    }
    console.log("this"+this);
    this.name = name;
    this.year = year;

    this.dance = function(){
        return `${this.name}이 춤을 춥니다.`;
    }
}

const yuJin = new IdolModel('안유진',2003);
console.log(yuJin);
console.log(yuJin.dance());

const yuJin2 = IdolModel('안유진',2003);
console.log(yuJin2);
//console.log(global.name);

const IdolModelArrow =(name, year)=>{
    this.name = name;
    this.year = year;
};
//TypeError: IdolModelArrow is not a constructor
const yuJin3 = new IdolModelArrow('안유진',2003);
