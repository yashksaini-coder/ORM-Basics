import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function main() {
    const users = await client.users.findMany();
    console.log(users);
}

main().catch((e) => {
        throw e;
    }).finally(async () => {
        await client.$disconnect();
    });


