# Nachomp-Product-App

Project for testing NPM package deployment

### Nacho Martínez

## Example

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'nachomp-product-app';
```

```
<ProductCard
  product={product}
  initialValues={{
    count: 6,
    // maxCount: 10,
  }}
>
  {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
    <>
      <ProductImage />
      <ProductTitle />
      <ProductButtons />
    </>
  )}
</ProductCard>
```
