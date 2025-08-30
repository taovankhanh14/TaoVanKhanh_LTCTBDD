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
function getTodo_2(id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            console.error(`Error fetching todo ${id}:`, error.message);
        }
    });
}
function getMultipleTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        const ids = [1, 2, 3, 4, 5]; // gọi 5 API
        const promises = ids.map(id => getTodo_2(id));
        const results = yield Promise.all(promises);
        console.log("Todos:", results);
    });
}
getMultipleTodos();
