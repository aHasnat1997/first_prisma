import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

(async function main() {
  await prisma.user.createMany({
    data: [
      {
        email: 'demo.4@email.com',
        name: 'first'
      }
    ]
  });
  const result = await prisma.user.findMany();
  console.log(result);
})()

// console.log('Hello World...');
