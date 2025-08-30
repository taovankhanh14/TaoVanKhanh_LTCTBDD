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
function tripleAfter1Sec_2(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 3);
            }, 1000);
        });
    });
}
// Run multiple async calls sequentially
function runSequential() {
    return __awaiter(this, void 0, void 0, function* () {
        const result1 = yield tripleAfter1Sec_2(2); // ~1s
        console.log("Result 1:", result1); // 6
        const result2 = yield tripleAfter1Sec_2(3); // waits after result1
        console.log("Result 2:", result2); // 9
        const result3 = yield tripleAfter1Sec_2(4); // waits after result2
        console.log("Result 3:", result3); // 12
    });
}
runSequential();
