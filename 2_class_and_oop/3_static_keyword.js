/**
 * static keyword
 * 
 * 인스턴스가 아닌 클래스 자체에 귀속됌
 */

class myFamily{
    name;
    year;
    static groupName='아이브';
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    static returnGroupName(){
        return '아이브';
    }
}


const sungJin = new myFamily('성진',1999);
console.log(sungJin);
console.log(myFamily.groupName);
console.log(myFamily.returnGroupName());

/**
 * factory constructor
 */
class myFamily2{
    name;
    year;

    constructor(name, year){
        this.name = name;
        this.year = year;
    }


    static fromObject(object){
        return new myFamily2(
            object.name,
            object.year,
        );
    }

    static fromList(list){
        return new myFamily2(
            list[0],
            list[1],
        )
    }

}

const mom = myFamily2.fromObject({
    name:'혜림',
    year:1971,
});

console.log(mom);

const father = myFamily2.fromList(
    [
        '장원영',
        2003,
    ]
);

console.log(father);



