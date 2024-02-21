/**
 * Class keyword 
 * 타입이 함수
 */

class LoversModel{
    // name;
    // year;
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    sayName(){
        return `안녕하세요 저는 ${this.name}입니다!`;
    }
}
//constructor - 생성자
const heeYeon = new LoversModel('희연', 1999);
const sungJin = new LoversModel('성진', 1999);
const suYeon = new LoversModel('수연', 2003);
const hyeLim = new LoversModel('혜림', 1971);

console.log(heeYeon.name);
console.log(heeYeon.year);
console.log(heeYeon.sayName());
console.log(sungJin.sayName());

console.log(typeof heeYeon);
console.log(typeof LoversModel);
