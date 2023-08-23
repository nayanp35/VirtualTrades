/* eslint-disable no-unused-vars */
'use client';

import {
  Card,
  CardHeader,
  CardBody,
  Input,
  Button,
  Typography,
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';
import axios from 'axios';

import { useEffect, useState } from 'react';

interface TradeFormProps {
  price: number;
  sharesOwned: number;
  buyingPower: number;
  userId: string;
  stockId: number;
  ticker: string;
}

export default function TradeForm({
  price,
  sharesOwned,
  buyingPower,
  userId,
  stockId,
  ticker,
}: TradeFormProps) {
  const [type, setType] = useState('buy');
  const [buyShares, setBuyShares] = useState(0);
  const [sellShares, setSellShares] = useState(0);
  const [shares, setShares] = useState(sharesOwned);
  const [cash, setCash] = useState(buyingPower);
  const [latestPrice, setLatestPrice] = useState(price);

  useEffect(() => {
    if (shares <= 0) {
      setType('buy');
    }
  }, [shares]);

  useEffect(() => {
    const socket = new WebSocket(
      `wss://ws.finnhub.io?token=cjhubehr01qonds7gfn0cjhubehr01qonds7gfng`
    );

    // Connection opened -> Subscribe
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify({ type: 'subscribe', symbol: ticker }));
    });

    // Inside the message event listener:
    socket.addEventListener('message', (e) => {
      if (e.data) {
        try {
          const data = JSON.parse(e.data);
          if (data.type === 'trade') {
            const trades = data.data;
            if (trades.length > 0) {
              const lastTrade = trades[trades.length - 1];
              const lastPrice = Number(lastTrade.p.toFixed(2));
              setLatestPrice(lastPrice);
              axios
                .patch(`/api/updateStockPrice`, {
                  ticker,
                  price: lastPrice,
                })
                .catch((err) => console.log(err));
            }
          }
        } catch (error) {
          console.error('Error parsing JSON data:', error);
        }
      }
    });
  }, [ticker]);

  const buyStock = async (e: any) => {
    e.preventDefault();
    const sharesToBuy = Number(e.target.elements.sharesToBuy.value);
    const res = await axios.post(`/api/buyStock`, {
      shares: sharesToBuy,
      stockId,
      userId,
    });

    if (res.status === 200) {
      setCash(cash - sharesToBuy * latestPrice);
      setShares(shares + sharesToBuy);
      setBuyShares(0);
    }
  };

  async function sellStock(e: any) {
    e.preventDefault();
    const sharesToSell = Number(e.target.elements.sharesToSell.value);
    const res = await axios.post(`/api/sellStock`, {
      shares: sharesToSell,
      stockId,
      userId,
    });

    if (res.status === 200) {
      setCash(cash + sharesToSell * latestPrice);
      setShares(shares - sharesToSell);
      setSellShares(0);
    }
  }

  const formatPrice = (price: number) => {
    return price.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };

  return (
    <Card className="w-full max-w-[24rem]">
      <CardHeader
        color="gray"
        floated={false}
        shadow={false}
        className="m-0 grid place-items-center rounded-b-none py-3 px-4 text-center"
      >
        <Typography variant="h4" color="white">
          Trade Stock
        </Typography>
      </CardHeader>
      <CardBody>
        <Tabs value={type} className="overflow-visible">
          <TabsHeader className="relative z-0 ">
            <Tab value="buy" onClick={() => setType('buy')}>
              Buy
            </Tab>
            <Tab
              value="sell"
              onClick={() => setType('sell')}
              disabled={shares <= 0}
            >
              Sell
            </Tab>
          </TabsHeader>
          <TabsBody
            className="!overflow-x-hidden !overflow-y-visible"
            animate={{
              initial: {
                x: type === 'buy' ? 400 : -400,
              },
              mount: {
                x: 0,
              },
              unmount: {
                x: type === 'buy' ? 400 : -400,
              },
            }}
          >
            <TabPanel value="buy" className="p-0">
              <form onSubmit={buyStock} className="mt-6 flex flex-col gap-4">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: 'min-w-[72px]' }}
                    crossOrigin="anonymous"
                    name="sharesToBuy"
                    onChange={(e) => setBuyShares(Number(e.target.value))}
                    value={buyShares}
                    min={1}
                    max={Math.floor(cash / latestPrice)}
                    required
                  />
                </div>

                <div className="my-2">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Details
                  </Typography>
                  <div className="border-y border-black">
                    Quantity: <span className="float-right">{buyShares}</span>
                  </div>
                  <div className="border-b border-black">
                    Buying Power:{' '}
                    <span className="float-right">{formatPrice(cash)}</span>
                  </div>
                  <div className="border-b border-black">
                    Cost per Share:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice)}
                    </span>
                  </div>
                  <div className="border-b border-black">
                    Total:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice * buyShares)}
                    </span>
                  </div>
                </div>
                <Button type="submit" size="lg">
                  Buy
                </Button>
              </form>
            </TabPanel>
            <TabPanel value="sell" className="p-0">
              <form onSubmit={sellStock} className="mt-6 flex flex-col gap-4">
                <div>
                  <Input
                    label="Number of Shares"
                    type="number"
                    containerProps={{ className: 'min-w-[72px]' }}
                    crossOrigin="anonymous"
                    name="sharesToSell"
                    onChange={(e) => setSellShares(Number(e.target.value))}
                    min={1}
                    value={sellShares}
                    max={shares}
                    required
                  />
                </div>

                <div className="my-2">
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-medium"
                  >
                    Details
                  </Typography>
                  <div className="border-y border-black">
                    Quantity: <span className="float-right">{sellShares}</span>
                  </div>
                  <div className="border-b border-black">
                    Shares Owned: <span className="float-right">{shares}</span>
                  </div>
                  <div className="border-b border-black">
                    Buying Power:{' '}
                    <span className="float-right">{formatPrice(cash)}</span>
                  </div>
                  <div className="border-b border-black">
                    Cost per Share:{' '}
                    <span className="float-right">{formatPrice(price)}</span>
                  </div>
                  <div className="border-b border-black">
                    Total:{' '}
                    <span className="float-right">
                      {formatPrice(latestPrice * sellShares)}
                    </span>
                  </div>

                  <div className="my-4 flex items-center gap-4"></div>
                </div>
                <Button type="submit" size="lg" disabled={shares <= 0}>
                  Sell
                </Button>
              </form>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </CardBody>
    </Card>
  );
}