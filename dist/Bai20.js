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
// fetchUser với timeout 2s
function fetchUser_3(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiCall = new Promise((resolve) => {
            setTimeout(() => {
                resolve({ id, name: `User_${id}` });
            }, 1000); // giả lập API call mất 1000ms
        });
        const timeout = new Promise((_, reject) => {
            setTimeout(() => {
                reject(new Error("Request timed out after 2s"));
            }, 2000); // Nếu timeout này trên 2000ms sẽ xuất lỗi "Error caught: Request timed out after 2s"
        });
        return Promise.race([apiCall, timeout]);
    });
}
function fetchUsers_2(ids) {
    return __awaiter(this, void 0, void 0, function* () {
        const userPromises = ids.map((id) => fetchUser_3(id));
        return Promise.all(userPromises);
    });
}
function run_6() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const users = yield fetchUsers_2([1, 2, 3]);
            console.log("Fetched users:", users);
        }
        catch (err) {
            console.error("Error caught:", err.message);
        }
    });
}
run_6();
