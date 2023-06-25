import Head from 'next/head'
import NextImage from 'next/image';
import { SubscribeButton } from '../components/SubscribeButton';

import { GetStaticProps } from 'next';
import { stripe } from '../services/stripe';

import styles from './home.module.scss';


interface HomeProps {
  product: {
    priceId: string;
    amount: string
  }
}

export default function Home({product}: HomeProps) {

  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {` `} <strong>{product.amount} month</strong></span>
          </p>
          <SubscribeButton/>
        </section>
        <NextImage
          src="/images/avatar.svg"
          width={600} height={600}
          // layout='fill'
          alt="Girl Coding"
        />
      </main>
    </>
  )
}

// Camanda Next
export const getStaticProps: GetStaticProps = async () => {

  const price = await stripe.prices.retrieve('price_1LfxItIcUwnI9poe5ND5kuPY')

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, // 24 hours
  }
}
