import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: ['query'],
  errorFormat: 'pretty',
});

const connectDB = async() => {
  try {
    await prisma.$connect();
    console.log("Database connnected !");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

export {connectDB,prisma}
