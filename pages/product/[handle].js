import { getProductByHandle } from '../../lib/shopifyClient';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function ProductPage() {
  const router = useRouter();
  const { handle } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      if (!handle) return;
      try {
        const data = await getProductByHandle(handle);
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product', err);
      }
    }
    fetchProduct();
  }, [handle]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <div>
          {product.images.edges.map(({ node }, index) => (
            <img key={index} src={node.transformedSrc} alt={node.altText || product.title} className="mb-2 w-full" />
          ))}
        </div>
        <div>
          <p className="mb-4">{product.description}</p>
          <p className="font-bold mb-4">{product.priceRange.minVariantPrice.amount} {product.priceRange.minVariantPrice.currencyCode}</p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Add to Cart</button>
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Variants</h2>
        <ul className="list-disc pl-6">
          {product.variants.edges.map(({ node }) => (
            <li key={node.id}>{node.title} - {node.priceV2.amount} {node.priceV2.currencyCode}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}