import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="h-screen">
      <Head>
        <title>Home | Housing Prices Tracker</title>
      </Head>
      <Header />
      <main >
        <section className="flex flex-col items-center justify-center bg-white my-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
            Track Housing Prices with Ease
          </h2>
          <p className="text-gray-700 mb-8 text-center max-w-2xl">
            Welcome to our real estate analytics app! Our app is designed to
            help you make informed decisions about the housing market by
            providing up-to-date data and analysis of home prices in various
            areas.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </section>
        <section className="bg-gray-50 py-8">
          <div className="relative flex flex-col items-center">
            <div className="flex flex-row items-center text-gray-700 mb-8 bg-white shadow px-8 py-4 rounded w-3/4">
              <div className="">
                <ArrowTrendingUpIcon className="w-12 h-12256  mr-12" />
              </div>
              <p>
                Our app collects data from a variety of sources, including
                Zillow, Redfin, and local sales data, and organizes it in a
                meaningful way. We use advanced statistical and machine learning
                techniques to analyze the data and identify trends and patterns
                in the housing market.
              </p>
            </div>

            <p className="text-gray-700 mb-8 text-center bg-white shadow px-8 py-4 rounded w-3/4">
              Our app includes a range of powerful tools to help you explore the
              data, including interactive graphs and maps that allow you to
              visualize home prices and trends over time. You can search for
              homes in specific areas, compare prices across regions, and filter
              homes based on criteria such as price, location, and number of
              bedrooms.
            </p>
            <p className="text-gray-700 mb-8 text-center bg-white shadow px-8 py-4 rounded w-3/4">
              Based on our analysis of the data, our app provides personalized
              recommendations on the best areas to buy, along with valuable
              insights into market trends and predictions for future price
              changes.
            </p>
            <p className="text-gray-700 mb-8 text-center bg-white shadow px-8 py-4 rounded w-3/4">
              Whether you're a real estate professional or simply looking to buy
              a new home, our app is the perfect tool to help you make informed
              decisions and stay ahead of the game in the ever-changing housing
              market.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
