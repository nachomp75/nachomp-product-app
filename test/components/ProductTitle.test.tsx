import React from 'react';
import renderer from 'react-test-renderer';

import { ProductTitle } from '../../src/components';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('should show the component properly with custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title="Custom product" className="custom-class" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('should show the component with the product name', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
