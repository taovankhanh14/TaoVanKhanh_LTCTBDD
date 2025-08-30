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
function fetchData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return yield response.json();
        }
        catch (error) {
            throw new Error(error.message);
        }
    });
}
function runMultipleAPIs() {
    return __awaiter(this, void 0, void 0, function* () {
        const urls = [
            "https://jsonplaceholder.typicode.com/todos/1", // OK
            "https://jsonplaceholder.typicode.com/todos/2", // OK
            "https://jsonplaceholder.typicode.com/invalid", // lỗi 404
        ];
        const results = yield Promise.allSettled(urls.map(url => fetchData(url)));
        results.forEach((result, index) => {
            if (result.status === "fulfilled") {
                console.log(`API ${index + 1} succeeded:`, result.value);
            }
            else {
                console.log(`API ${index + 1} failed:`, result.reason);
            }
        });
    });
}
runMultipleAPIs();
