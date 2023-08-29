'use client';

import { Typography } from '@material-tailwind/react';

export default function FooterWithLogo() {
  return (
    <>
      <footer className="ml-16 p-8">
        <div className="flex flex-row  flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          {/* <Img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
          <ul className="flex flex-wrap  items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-white"
              >
                Portfolio
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
              >
                Stock Market
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
              >
                Watchlist
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                color="blue-gray"
                className="font-normal transition-colors text-white hover:text-blue-500 focus:text-blue-500"
              >
                News
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography
          color="blue-gray"
          className="text-center text-white font-normal"
        >
          &copy; 2023 VirtualTrades
        </Typography>
      </footer>
    </>
  );
}
