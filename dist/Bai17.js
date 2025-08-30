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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
// Async function: waits 1s then returns num × 3
function tripleAfter1Sec_4(num) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(num * 3);
            }, 1000);
        });
    });
}
function run_3() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, e_1, _b, _c;
        const promises = [
            tripleAfter1Sec_4(2),
            tripleAfter1Sec_4(3),
            tripleAfter1Sec_4(4)
        ];
        try {
            // for await...of sẽ lần lượt lấy kết quả khi Promise resolve
            for (var _d = true, promises_1 = __asyncValues(promises), promises_1_1; promises_1_1 = yield promises_1.next(), _a = promises_1_1.done, !_a; _d = true) {
                _c = promises_1_1.value;
                _d = false;
                const result = _c;
                console.log("Result:", result);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (!_d && !_a && (_b = promises_1.return)) yield _b.call(promises_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    });
}
run_3();
