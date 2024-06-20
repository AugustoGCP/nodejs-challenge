const { PrismaClient } = require('@prisma/client')

const Prisma = new PrismaClient()

Prisma.$use(async (params, next) => {
    const result = await next(params);

    // Função recursiva para converter BigInt em string
    const convertBigIntToString = (obj) => {
        if (obj === null || obj === undefined) return obj;

        if (typeof obj === 'bigint') {
            return obj.toString();
        }

        if (Array.isArray(obj)) {
            return obj.map(convertBigIntToString);
        }

        if (typeof obj === 'object') {
            for (const key in obj) {
                obj[key] = convertBigIntToString(obj[key]);
            }
        }

        return obj;
    };

    return convertBigIntToString(result);
});

module.exports = Prisma