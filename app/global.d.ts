// global.d.ts
import { PrismaClient } from '@prisma/client';
import { MongoClient } from 'mongodb';

declare global {
  var prisma: PrismaClient | undefined;
  var _mongoClientPromise: Promise<MongoClient>;

}

export {};
