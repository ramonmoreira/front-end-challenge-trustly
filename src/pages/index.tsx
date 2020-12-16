import axios from 'axios'
import { ResultProps } from 'types/api'

import Main from 'components/Main'
import Products from 'components/Products'

const Index = () => (
  <>
    <Products />
  </>
)

Index.getInitialProps = async () => {
  const res = await axios.get(
    'https://voliveira.s3-sa-east-1.amazonaws.com/sneakers/index.json'
  )
  const products: ResultProps[] | undefined = await res.data
  console.log(products)
  return { products: products }
}

export default Index
