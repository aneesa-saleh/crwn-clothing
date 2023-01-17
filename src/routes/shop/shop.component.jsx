import { useContext } from 'react';
import { ProductsContext } from '../../contexts/product.context';
import ProductCard from '../../components/product-card/product-card.component';

import './shop.styles.scss'

function Shop() {
    const { products } = useContext(ProductsContext);

    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard product={product} />
            ))}
        </div>
    )
}

export default Shop;