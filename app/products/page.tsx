import { shopifyFetch } from "@/components/fetchProducts";

export async function getAllProducts() {
    return shopifyFetch({
      query: `{
          products(sortKey: TITLE, first: 100) {
            edges{
              node {
                id
                title
                description
              }
            }
          }
        }`
    });
  }