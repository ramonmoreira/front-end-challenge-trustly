import axios from 'axios'
import { ProductsPageProps, ResultProps } from 'types/api'

import Products from 'components/Products'

const Index = ({ products }: ProductsPageProps) => (
  <>
    <Products {...products} />
  </>
)

Index.getInitialProps = async () => {
  const res = await axios.get(
    'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'
  )
  const products: ResultProps[] | undefined = await res.data
  return { products: products }
}
export default Index
