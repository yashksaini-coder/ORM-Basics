import { PrismaClient } from "@prisma/client";

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

    console.log("\n--------------------------------------------------------------------\n");

    console.log("Creating a new user");
    const newUser = await client.users.create({
        data: {
            username: "John Doe",
            email: "johndoe@gmail.com",
            password: "john123",
            city: "New York",
        },
    });
    console.log(newUser);

    console.log("\n--------------------------------------------------------------------\n");

}

main().catch((e) => {
        throw e;
    }).finally(async () => {
        await client.$disconnect();
    });


