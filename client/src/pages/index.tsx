import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Home | Housing Prices Tracker</title>
      </Head>
      <Header />
      <main className="container mx-auto py-12">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">Track Housing Prices with Ease</h2>
          <p className="text-gray-700 mb-8 text-center">Get up-to-date information on housing prices in your desired regions and track their changes over time with our easy-to-use app.</p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
