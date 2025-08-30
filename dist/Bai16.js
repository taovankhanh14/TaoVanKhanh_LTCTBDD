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
// Async function: waits 1s then returns num × 3
function tripleAfter1Sec_3(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 3);
            }, 1000);
        });
    });
}
// Run multiple async calls in parallel
function runParallel() {
    return __awaiter(this, void 0, void 0, function* () {
        const results = yield Promise.all([
            tripleAfter1Sec_3(2),
            tripleAfter1Sec_3(3),
            tripleAfter1Sec_3(4)
        ]);
        console.log("Results:", results); // [6, 9, 12]
    });
}
runParallel();
