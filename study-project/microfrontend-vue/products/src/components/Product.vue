<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img
      height="250"
      src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
    ></v-img>
    <v-card-title>Product </v-card-title>

    <v-card-text>
      <div>
        {{ product.title }}
      </div>
    </v-card-text>

    <v-divider v-if="!loading" class="mx-4"></v-divider>
    <v-progress-linear
      v-if="loading"
      color="deep-purple"
      indeterminate
    ></v-progress-linear>

    <v-card-actions>
      <v-btn
        color="deep-purple lighten-2"
        :disabled="added"
        text
        @click="reserve"
      >
        {{ added ? "In Cart" : "Add to Cart" }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { buyRequest } from "@/service/buy.service.js";
export default {
  name: "Product",
  props: ["product"],
  data: () => ({
    loading: false,
    added: false,
  }),

  methods: {
    async reserve() {
      this.loading = true;

      try {
        const response = await buyRequest(this.product);
        this.added = !!response.id;
      } catch (err) {
        console.dir(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
