export class Car {
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showInfo(){
        console.log(`Xe: ${this.brand} ${this.model}, Năm: ${this.year}`);
    }
}