import { Person } from "./Bai1";

export class Student extends Person{
    grade: String;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    displayAll() {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Sinh viên năm: ${this.grade}`);
    }
}