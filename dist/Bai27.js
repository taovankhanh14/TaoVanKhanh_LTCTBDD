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
function fetchWithRetry(url, retries) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let attempt = 1; attempt <= retries; attempt++) {
            try {
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = yield response.json();
                console.log(`Success on attempt ${attempt}`);
                return data;
            }
            catch (error) {
                console.warn(`Attempt ${attempt} failed: ${error.message}`);
                if (attempt === retries) {
                    throw new Error(`Failed after ${retries} retries`);
                }
            }
        }
    });
}
function run_7() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1", 3);
            console.log("Fetched data:", data);
        }
        catch (error) {
            console.error("Final error:", error.message);
        }
    });
}
run_7();
