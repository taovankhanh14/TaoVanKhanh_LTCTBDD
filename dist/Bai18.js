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
// Simulate fetching a user from API
function fetchUser(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id,
                    name: `User_${id}`
                });
            }, 1000); // simulate 1s API delay
        });
    });
}
// Example usage
function run_4() {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield fetchUser(1);
        console.log(user); // { id: 1, name: "User_1" }
    });
}
run_4();
