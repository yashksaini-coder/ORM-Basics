import { PrismaClient } from "@prisma/client";
import { title } from "process";

const client = new PrismaClient();

async function main() {
    console.log("Getting all users");
    const users = await client.users.findMany();
    console.log(users);

    console.log("\n--------------------------------------------------------------------\n");

    console.log("Getting all todos");
    const todos = await client.todo.findMany();
    console.log(todos);

    console.log("\n--------------------------------------------------------------------\n");

    console.log("Getting all users with their todos");
    const usersWithTodos = await client.users.findMany({
        include: {
            Todo: true,
        },
    });
    console.log(usersWithTodos);

    console.log("\n--------------------------------------------------------------------\n");

    console.log("Getting all todos with their users");
    const todosWithUsers = await client.todo.findMany({
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
    const updatedTodo = await client.todo.update({
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

    // console.log("Deleting a user");
    // const deletedUser = await client.users.delete({
    //     where: {
    //         id: users[2].id,
    //     },
    // });
    // console.log(deletedUser);
    // // This will fail because of foreign key constraint

    console.log("\n--------------------------------------------------------------------\n");

    console.log("Deleting a todo");
    const deteleTodo = await client.todo.delete({
        where: {
            id: 1,
        },
    });
    console.log(deteleTodo);
    // This will delete the todo with id 1

}

main().catch((e) => {
        throw e;
    }).finally(async () => {
        await client.$disconnect();
    });


