import React, { Suspense } from 'react'
import Image from 'next/image';
import DataTable from '@/components/DataTable';
import Link from 'next/link';
import { cn, formatCurrency } from '@/lib/utils';
import { TrendingDown, TrendingUp } from 'lucide-react';
import { fetcher } from '@/lib/coingecko.action';
import CoinOverview from '@/components/home/CoinOverview';
import TrendingCoins from '@/components/home/TrendingCoins';
import { CoinOverviewFallback, TrendingCoinsFallback } from '../components/home/fallback';






const page = async () => {


  return (
    <main className="main-container">
      <section className='home-grid'>
        <Suspense fallback={<CoinOverviewFallback />}>
          <CoinOverview />
        </Suspense>

        <Suspense fallback={<TrendingCoinsFallback />}>
          <TrendingCoins />
        </Suspense>

      </section>

      <section className="w-full mt-7 space-y-4">
        <p>Categories</p>
      </section>

    </main>
  )
}

export default page
