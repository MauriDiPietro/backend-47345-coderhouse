class Count {
    constructor(name){
        this.name = name;
        this.count = 0;
    };

    static countGlobal = 0;

    static getResp(){
        return this.count
    };

    getResponsable(){
        return this.name;
    };

    getCountGlobal(){
        return Count.countGlobal;
    }

    getCountInd(){
        return this.count;
    };

    countMethod(){
        this.count++;
        Count.countGlobal++;
    }
};

const ariel = new Count('Ariel');
const alvaro = new Count('Alvaro');

console.log(ariel.getResponsable());
console.log(alvaro.getResponsable());
console.log('--sumo 1 a ariel--');
ariel.countMethod();
console.log('contador ariel = ', ariel.getCountInd());
console.log('contador global =', Count.countGlobal);

console.log('--sumo 1 a alvaro--');
alvaro.countMethod();
console.log('contador alvaro = ', alvaro.getCountInd());
console.log('contador global =', Count.countGlobal);
console.log('--sumo 1 a alvaro--');
alvaro.countMethod();
console.log('contador global =', Count.countGlobal);

// console.log(Count.getResp());