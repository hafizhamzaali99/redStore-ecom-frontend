import FavoriteIcon from '@mui/icons-material/Favorite';
import { Stack } from '@mui/material'
import React from 'react'
import { Product, ProductActionsWrapper, ProductAddToCart, ProductFavButton, ProductImage } from '../../Style/Product/Product'
import ShareIcon from '@mui/icons-material/Share';
import ProductMeta from './ProductMeta'
// import FitScreenIcon from '@mui/icons-material/FitScreen';

const SingleProduct = ({ product, matches }) => {
    return (
        <>
            <Product>
                <ProductImage src={product.image} />
                <ProductMeta product={product} matches={matches} />
                <ProductActionsWrapper show={1}>
                    <Stack direction='row'>
                        <ProductFavButton isFav={0}>
                            <FavoriteIcon />
                        </ProductFavButton>
                        <ProductFavButton>
                            <ShareIcon />
                        </ProductFavButton>
                    </Stack>
                </ProductActionsWrapper>

            </Product>
            {/* <ProductAddToCart variant='contained'>Add to Cart</ProductAddToCart> */}
        </>
    )
}

export default SingleProduct
