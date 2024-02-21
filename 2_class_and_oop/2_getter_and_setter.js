/**
 * getter and setter
 */

class myFamily{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
/**
 * 1) 데이터를 가공해서 새로운 데이터를 반환
 * 2) private한 값을 반환할때
 */
    get nameAndYear(){
        return `${this.name}-${this.year}`;
    }

    set setName(name){
        this.name = name;
    }
}

const sungJin = new myFamily('성진', 1999);
console.log(sungJin);
console.log(sungJin.nameAndYear);
sungJin.setName = '지니';
console.log(sungJin);

class myFamily2{
    #name;
    year;
    constructor(name, year){
        this.#name = name;
        this.year = year;
    }
    get name(){
        return this.#name;
    }
    set name(name){
        this.#name = name;
    }
}

const sungJin2 = new myFamily2('성진', 1999);
console.log(sungJin2);
console.log(sungJin2.name);
sungJin2.name = '귀여미';
console.log(sungJin2.name);

