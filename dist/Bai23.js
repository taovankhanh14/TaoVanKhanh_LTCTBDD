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
function getCompletedTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("https://jsonplaceholder.typicode.com/todos");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const todos = yield response.json();
            // Lọc ra chỉ những todo đã completed
            const completed = todos.filter(todo => todo.completed);
            console.log("Completed Todos:", completed);
            return completed;
        }
        catch (error) {
            console.error("Error fetching todos:", error.message);
            return [];
        }
    });
}
getCompletedTodos();
