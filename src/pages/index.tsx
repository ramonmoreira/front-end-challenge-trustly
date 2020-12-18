import axios from 'axios'
import { GetStaticProps } from 'next'
import { ProductsPageProps, ResultProps } from 'types/api'

import Products from 'components/Products'

export default function Index({ products }: ProductsPageProps) {
  return (
    <>
      <Products {...products} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await axios.get(
    'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'
  )
  const products: ResultProps[] | undefined = await res.data
  return {
    props: {
      products: products
    }
  }
}
