/**
 * Inheritance
 */

class myFamily{
    name;
    year;
    constructor(name, year){
        this.name= name;
        this.year = year;
    }
}

class FemaleMyFamily extends myFamily{
    Cleaning(){
        return '여자분들은 청소합니다';
    }
}

class MaleMyFamily extends myFamily{
    Drying(){
        return '남자분들은 세탁합니다';
    }
}

const sungJin = new MaleMyFamily('성진', 1999);
console.log(sungJin);

const mom  = new FemaleMyFamily('혜림', 1971);
console.log(mom);

console.log(sungJin.Drying());
console.log(mom.Cleaning());

const hana = new myFamily('하나', 0);
console.log(hana); 

console.log(sungJin instanceof myFamily);
console.log(sungJin instanceof MaleMyFamily);