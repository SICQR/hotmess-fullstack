import fetch from 'isomorphic-unfetch';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const endpoint = `https://${domain}/api/2024-04/graphql.json`;

async function callShopify(query, variables = {}) {
  const result = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': accessToken
    },
    body: JSON.stringify({ query, variables })
  });
  const json = await result.json();
  if (json.errors) {
    console.error(JSON.stringify(json.errors, null, 2));
    throw new Error('Shopify query failed');
  }
  return json.data;
}

export async function getAllProducts() {
  const query = /* GraphQL */ `
    query getProducts($first: Int = 20) {
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  transformedSrc
                }
              }
            }
          }
        }
      }
    }
  `;
  const data = await callShopify(query);
  return data.products.edges.map(({ node }) => node);
}

export async function getProductByHandle(handle) {
  const query = /* GraphQL */ `
    query getProduct($handle: String!) {
      productByHandle(handle: $handle) {
        id
        title
        description
        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
        }
        images(first: 5) {
          edges {
            node {
              transformedSrc
              altText
            }
          }
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              priceV2 {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;
  const data = await callShopify(query, { handle });
  return data.productByHandle;
}