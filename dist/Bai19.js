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
// Reuse the fetchUser function
function fetchUser_2(id) {
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
// Fetch multiple users in parallel
function fetchUsers(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const userPromises = ids.map((id) => fetchUser_2(id)); // tạo mảng promise
        const users = yield Promise.all(userPromises); // chờ tất cả xong
        return users;
    });
}
// Example usage
function run_5() {
    return __awaiter(this, void 0, void 0, function* () {
        const users = yield fetchUsers([1, 2, 3]);
        console.log(users);
    });
}
run_5();
