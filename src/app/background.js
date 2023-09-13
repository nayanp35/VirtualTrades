const { PrismaClient } = require('@prisma/client');
const { default: axios } = require('axios');

const globalForPrisma = global;
const prisma = globalForPrisma.prisma || new PrismaClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = function updateStockPriceEveryHour() {
  console.log('hi')
  setInterval(async () => {
    const stocks = await prisma.stock.findMany({
      select: {
        symbol: true,
      },
    });

    await Promise.all(
      stocks.map(async (stock) => {
        const res = await axios
          .get(
            `https://finnhub.io/api/v1/quote?symbol=${stock.symbol}&token=${process.env.FINNHUB_API_KEY5}`
          )
          .then((res) => res.data)
          .catch((err) => console.log(err));
        const resData = {
          symbol: stock.symbol,
          price: Number(res.c.toFixed(2)),
        };

        await prisma.stock.update({
          where: {
            symbol: stock.symbol,
          },
          data: {
            current_price: resData.price,
          },
        });
        console.log(stocks);
        return resData;
      })
    );
  }, 3600000);
};
