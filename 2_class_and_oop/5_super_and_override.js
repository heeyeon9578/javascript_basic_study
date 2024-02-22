/**
 * super and override
 */

class myFamily{
    name;
    year;
    constructor(name,year){
        this.name = name;
        this.year = year;
    }
    sayHello(){
        return `안녕하세요! ${this.name}입니다!!`;
    }
}

class FemailMyFamily extends myFamily{
    part;
    constructor(name,year,part){
        super(name,year);
        this.part = part;
    }
    sayHello(){
        // return `안녕하세요! ${this.name}입니다!! ${this.part}를 맡고 있습니다!`;
        return `${super.sayHello()} ${this.part}를 맡고 있습니다!`;
    }
}

const heeYeon = new FemailMyFamily('희연',1999, '청소');
console.log(heeYeon);

const suYeon = new myFamily('수연', 2003);
console.log(suYeon.sayHello());
console.log(heeYeon.sayHello());