import { PrismaClient } from "@/generated/prisma/client";

declare global {
	// allow global `var` to avoid TS errors in development where module reloads
	// can create multiple PrismaClient instances
	// eslint-disable-next-line no-var
	var __prisma_client__: PrismaClient | undefined;
}

const prisma = global.__prisma_client__ ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") global.__prisma_client__ = prisma;

export default prisma;