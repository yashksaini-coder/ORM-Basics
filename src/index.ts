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

}

main().catch((e) => {
        throw e;
    }).finally(async () => {
        await client.$disconnect();
    });


