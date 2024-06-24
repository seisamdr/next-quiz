import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var cachePrisma: PrismaClient;
}

export let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachePrisma) {
    global.cachePrisma = new PrismaClient();
  }
  prisma = global.cachePrisma;
}
