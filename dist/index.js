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
        console.log("\n--------------------------------------------------------------------\n");
        console.log("Getting all todos with their users");
        const todosWithUsers = yield client.todo.findMany({
            include: {
                user: true,
            },
        });
        console.log(todosWithUsers);
        // console.log("\n--------------------------------------------------------------------\n");
        // console.log("Creating a new user");
        // const newUser = await client.users.create({
        //     data: {
        //         username: "John Doe",
        //         email: "johndoe@gmail.com",
        //         password: "john123",
        //         city: "New York",
        //     },
        // });
        // console.log(newUser);
        // console.log("\n--------------------------------------------------------------------\n");
        // console.log("Creating a new todo");
        // const newTodo = await client.todo.createMany({
        //     data: [
        //         {
        //             title: "Learn TypeScript",
        //             desc: "Complete Typescript tutorial",
        //             done: false,
        //             userId: users[2].id,
        //         },
        //         {
        //             title: "Learn Rust",
        //             desc: "Complete Rust tutorial",
        //             done: true,
        //             userId: users[2].id,
        //         },
        //         {
        //             title: "Learn Next.js",
        //             desc: "Complete Prisma tutorial",
        //             done: false,
        //             userId: users[2].id,
        //         }
        //     ]
        // });
        // console.log(newTodo);
        console.log("\n--------------------------------------------------------------------\n");
        console.log("Updating a todo");
        const updatedTodo = yield client.todo.update({
            where: {
                id: 1,
            },
            data: {
                done: true,
            },
        });
        console.log(updatedTodo);
        // console.log("\n--------------------------------------------------------------------\n");
        // console.log("Deleting a todo");
        // const deletedTodo = await client.todo.delete({
        //     where: {
        //         id: 2,
        //     },
        // });
        // console.log(deletedTodo);
        console.log("\n--------------------------------------------------------------------\n");
        console.log("Deleting a user");
        const deletedUser = yield client.users.delete({
            where: {
                id: users[2].id,
            },
        });
        console.log(deletedUser);
        // This will fail because of foreign key constraint
        console.log("\n--------------------------------------------------------------------\n");
    });
}
main().catch((e) => {
    throw e;
}).finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield client.$disconnect();
}));
