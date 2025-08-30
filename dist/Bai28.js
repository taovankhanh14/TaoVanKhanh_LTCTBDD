"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Hàm giả lập một task async
function simulateTask_6(id, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done after ${time}ms`);
        }, time);
    });
}
// Hàm batchProcess chạy 5 task song song
function batchProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [
            simulateTask_6(1, 1000),
            simulateTask_6(2, 2000),
            simulateTask_6(3, 1500),
            simulateTask_6(4, 3000),
            simulateTask_6(5, 2500),
        ];
        const results = yield Promise.all(tasks);
        console.log("All tasks finished:");
        console.log(results);
    });
}
// Gọi thử
batchProcess();
