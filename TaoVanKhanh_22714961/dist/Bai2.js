"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Bai1_1 = require("./Bai1");
class Student extends Bai1_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    displayAll() {
        console.log(`Tên: ${this.name}, Tuổi: ${this.age}, Sinh viên năm: ${this.grade}`);
    }
}
exports.Student = Student;
//# sourceMappingURL=Bai2.js.map