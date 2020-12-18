export type ResultProps = {
    id: string
    description: string
    color?: string
    price: string
    currency?: string
    thumbnailURL: string
    maxresURL?: string
}
export type ProductsProps = {
    results: ResultProps[]
}

export type ProductsPageProps = {
    products: ProductsProps
}