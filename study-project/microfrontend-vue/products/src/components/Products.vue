<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="4">
        <Product :product="product" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Product from "./Product.vue";
import { fetchProducts } from "@/service/products.service.js";
export default {
  name: "Products",
  components: { Product },
  data: () => ({
    products: [],
  }),
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        this.products = await fetchProducts();
      } catch (err) {
        console.log(console.log);
      }
    },
  },
};
</script>
