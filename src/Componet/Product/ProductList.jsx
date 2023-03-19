import React from 'react'
import { useFilterContext } from '../contex/Filter_context';
import GridView from './GridView';
import ListView from './ListView';



const ProductList = () => {
  const { filter_products, gird_view } = useFilterContext();
  
  if (gird_view === true) {
    return <GridView products={filter_products} />
  }

  if (gird_view === false) {
    return <ListView products={filter_products} />
  }
}

export default ProductList;
