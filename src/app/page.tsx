"use client";
import React from "react";
import HorizontalCard from "./components/cards/HorizontCard";
import Img from "next/image"
import SimpleCard from "./components/cards/SimpleCard";

export default function Home() {
  return (

    <div>

      <div className="leading-normal tracking-normal text-white gradient">
        <div className="pt-24">
          <div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">
            <div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
              <p className="uppercase tracking-loose w-full">WHERE INVESTMENT BEGINS</p>
              <h1 className="my-4 text-5xl font-bold leading-tight">Welcome to VirtualTrades</h1>
              <p className="leading-normal text-2xl mb-8">This is our app Virtual Trades. Welcome to the world of stocks,
            market and money! Learn while staying safe, and get ready for the
            real world.</p>
              <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Trade</button>
            </div>
            <div className="w-full md:w-3/5 py-6 text-center">
              <Img className="w-full md:w-4/5 z-50" src="https://loopnewslive.blob.core.windows.net/liveimage/sites/default/files/2022-05/83603f5df4bb7a5f0afb72cbd50cf88cnew-york-stock-exchange-ap.jpg/" alt="hero img" width={50} height={50}/>
            </div>
          </div>
        </div>
      </div>


      <div className="relative -mt-12 lg:-mt-24">
        <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
            </g>
          </g>
        </svg>
      </div>

    <section>
      <div className="bg-grey border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white-800">Watchlist</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-9">
            <h3 className="text-3xl text-white-700 font-bold leading-none mb-3">Watch the market move live</h3>
            {/* <p className="text-gray-600 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
            <a className="text-orange-500 underline" href="https://undraw.co/">undraw.co</a></p> */}
              </div>
             {/* Other content */}

            <HorizontalCard
              img="https://ww2.kqed.org/app/uploads/sites/23/2023/03/teen-first-credit-card-e1679332855781-800x533.jpg"
              text1="This is the benefit Virtual Trading. Learn more about how and when to buy and sell"
              text2="Sign up now to receive real-time updates on the market and practice your best trade."
              text3="Watch trends as they evolve, and learn to invest with us!"
              />
        </div>
      </div>
      </div>
    </section>


    <section>
    <div className="flex flex-wrap flex-col-reverse sm:flex-row">
          <div className="w-full sm:w-1/2 p-9 mt-0">
        {/* <Img className="w-full md:w-4/5 z-50" src="https://images.barrons.com/im-733090?width=1280&size=1.33333333" alt="seciton img" width={50} height={50}/> */}
        <SimpleCard/>
          </div>
          <div className="w-full sm:w-1/2 p-9 mt-6">
            <div className="align-middle">
              <h3 className="text-3xl text-white-700 font-bold leading-none mb-3">Read the current news in finance</h3>
              <p className="text-white-600 mb-8">Stay informed on crucial market changes, treds, and leads that can help your wallet grow exponentially.</p>
              {/* <a className="text-black-500 underline" href="https://undraw.co/">undraw.co</a></p> */}
          </div>
        </div>
      </div>
    </section>


    <section className="bg-white border-b py-8">
      <div className="container mx-auto flex flex-wrap pt-4 pb-12">
        <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white-800">Title</h1>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-white-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div className="w-full font-bold text-xl text-white-800 px-6">Lorem ipsum dolor sit amet.</div>
              <p className="text-white-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-start">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
            </div>
          </div>
        </div>



        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-white-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div className="w-full font-bold text-xl text-white-800 px-6">Lorem ipsum dolor sit amet.</div>
              <p className="text-white-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-center">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
            </div>
          </div>
        </div>



        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
          <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
            <a href="#" className="flex flex-wrap no-underline hover:no-underline">
              <p className="w-full text-white-600 text-xs md:text-sm px-6">GETTING STARTED</p>
              <div className="w-full font-bold text-xl text-white-800 px-6">Lorem ipsum dolor sit amet.</div>
              <p className="text-white-800 text-base px-6 mb-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
              </p>
            </a>
          </div>
          <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
            <div className="flex items-center justify-end">
              <button className="mx-auto lg:mx-0 hover:underline gradient text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action</button>
            </div>
          </div>
        </div>
      </div>
    </section>


    <svg className="wave-top" viewBox="0 0 1439 147" version="1.1" xmlns="http://www.w3.org/2000/svg" >
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1.000000, -14.000000)" fill-rule="nonzero">
          <g className="wave" fill="#f8fafc">
            <path d="M1440,84 C1383.555,64.3 1342.555,51.3 1317,45 C1259.5,30.824 1206.707,25.526 1169,22 C1129.711,18.326 1044.426,18.475 980,22 C954.25,23.409 922.25,26.742 884,32 C845.122,37.787 818.455,42.121 804,45 C776.833,50.41 728.136,61.77 713,65 C660.023,76.309 621.544,87.729 584,94 C517.525,105.104 484.525,106.438 429,108 C379.49,106.484 342.823,104.484 319,102 C278.571,97.783 231.737,88.736 205,84 C154.629,75.076 86.296,57.743 0,32 L0,0 L1440,0 L1440,84 Z"></path>
          </g>
          <g transform="translate(1.000000, 15.000000)" fill="#FFFFFF">
            <g transform="translate(719.500000, 68.500000) rotate(-180.000000) translate(-719.500000, -68.500000) ">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" opacity="0.200000003"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>

    <section className="container mx-auto text-center py-6 mb-12">

      <h1 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">Call to Action</h1>
      <div className="w-full mb-4">
        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>

      <h3 className="my-4 text-3xl leading-tight">Main Hero Message to sell yourself!</h3>

      <button className="mx-auto lg:mx-0 hover:underline bg-white text-white-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Action!</button>

    </section>

      {/* <div className="flex items-center h-screen bg-contain">
        <header className="bg-green-700 text-center flex m-20">
          <div className="w-500 p-4">
            <h1 className="text-white text-2xl font-bold">Virtual Trades</h1>
          </div>
        </header>

        <div className="flex flex-row items-center bg-contain">
          <h3 className="mt-8 text-3xl m-10">
            This is our app Virtual Trades. Welcome to the world of stocks,
            market and money! Learn while staying safe, and get ready for the
            real world.
          </h3>
          <h5 className="mt-8 text-3xl m-10">WHERE INVESTMENT BEGINS</h5>
        </div>
      </div>

      <section className="flex items-center h-screen">
        <h3>Preview live widgets</h3>

        <div className="flex-1 p-8 border border-gray-100 m-4">
          Widget 1
          <h5 className="text-lg font-semibold">Widget 1</h5>
        </div>
        <div className="flex-1 p-8 border border-gray-100 m-4">
          Widget 2
          <h5 className="text-lg font-semibold">Widget 2</h5>
        </div>
        <div className="flex-1 p-8 border border-gray-100 m-4">
          Widget 3
          <h5 className="text-lg font-semibold">Widget 3</h5>
        </div>
      </section>

      <section className="flex items-center h-screen bg-contain">
        <HorizontalCard
          img="https://ww2.kqed.org/app/uploads/sites/23/2023/03/teen-first-credit-card-e1679332855781-800x533.jpg"
          text1="This is our company Virtual Trading. Learn more about how and when to buy and sell"
          text2="Sign up now to receive real-time updates on the market and practice your best trade."
          text3="Watch trends as they evolve, and learn to invest with us!"
        />
        <HorizontalCard
          img="https://newscenter.baruch.cuny.edu/wp-content/uploads/sites/24/2021/05/Summer-2018-Campus-Photo-Shoot.jpg"
          text1="This is our company Virtual Trading. Learn more about how and when to buy and sell"
          text2="Sign up now to receive real-time updates on the market and practice your best trade."
          text3="Watch trends as they evolve, and learn to invest with us!"
        />
      </section>

      <div className="pt-24">

		<div className="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center">

			<div className="flex flex-col w-full md:w-2/5 justify-center items-start text-center md:text-left">
				<p className="uppercase tracking-loose w-full">What business are you?</p>
				<h1 className="my-4 text-5xl font-bold leading-tight">Main Hero Message to sell yourself!</h1>
				<p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>



				<button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg">Subscribe</button>

			</div>

			<div className="w-full md:w-3/5 py-6 text-center">
				<Img className="w-full md:w-4/5 z-50" src="hero.png" />
			</div>

		</div>

	</div>

      <section className="flex items-center h-screen bg-contain">
        <h3>Stock Market Page</h3>
      </section>

      <section className="flex items-center h-screen bg-contain">
        <h3>Watchlist</h3>
      </section>

      <section className="flex items-center h-screen bg-contain">
        <h3>About us</h3>
      </section> */}
  </div>
  );
}