import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });
  

  async function main() {
    // Create user without Todo items
    const user1 = await prisma.users.create({
        data: {
            username: "yashsaini",
            email: "yashsaini2459@gmail.com",
            password: "yash123",
            city: "New Delhi"
        }
    });

    const user2 = await prisma.users.create({
        data: {
            username: "Tannu",
            email: "tannu_chaudhary@gmail.com",
            password: "tannu456",
            city: "New Delhi"
        }
    });

    // Create Todo items for the user
    await prisma.todo.createMany({
        data: [
            {
                title: "Learn Prisma",
                desc: "Complete Prisma tutorial",
                done: false,
                userId: user1.id
            },
            {
                title: "Learn GraphQL",
                desc: "Complete GraphQL tutorial",
                done: true,
                userId: user1.id
            },
            {
                title: "Learn TypeScript",
                desc: "Complete TypeScript tutorial",
                done: false,
                userId: user2.id
            }
        ]
    });


    console.log({ user1, user2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
