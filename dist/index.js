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
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Getting all users");
        const users = yield client.users.findMany();
        console.log(users);
        console.log("\n--------------------------------------------------------------------\n");
        console.log("Getting all todos");
        const todos = yield client.todo.findMany();
        console.log(todos);
        console.log("\n--------------------------------------------------------------------\n");
        console.log("Getting all users with their todos");
        const usersWithTodos = yield client.users.findMany({
            include: {
                Todo: true,
            },
        });
        console.log(usersWithTodos);
    });
}
main().catch((e) => {
    throw e;
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield client.$disconnect();
}));
