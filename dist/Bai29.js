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
function simulateTask_7(id, time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task ${id} done after ${time}ms`);
        }, time);
    });
}
// Hàm xử lý tuần tự (queue)
function queueProcess() {
    return __awaiter(this, void 0, void 0, function* () {
        const tasks = [
            () => simulateTask_7(1, 1000),
            () => simulateTask_7(2, 2000),
            () => simulateTask_7(3, 1500),
            () => simulateTask_7(4, 3000),
            () => simulateTask_7(5, 2500),
        ];
        const results = [];
        for (const task of tasks) {
            const result = yield task(); // chờ task hoàn thành mới chạy tiếp
            console.log(result);
            results.push(result);
        }
        console.log("All tasks finished (sequentially):");
        console.log(results);
    });
}
// Gọi thử
queueProcess();
