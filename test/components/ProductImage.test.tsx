import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage } from '../../src/components/ProductImage';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('should show the component properly with custom image', () => {
    const wrapper = renderer.create(<ProductImage img={product2.img} />);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should show the component with the product image', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>
        {() => <ProductImage img={product2.img} />}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
