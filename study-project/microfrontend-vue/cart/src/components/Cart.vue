<template>
  <section>
    <v-card v-if="step == 1">
      <CartProductList />
      <v-card-actions class="justify-end">
        <v-btn color="primary" @click="next"> Next </v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="step == 2">
      <CartAddress />
      <v-card-actions class="justify-end">
        <v-btn text @click="prev"> Previous </v-btn>
        <v-btn color="primary" @click="next"> Next </v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="step == 3">
      <CartPayment />
      <v-card-actions class="justify-end">
        <v-btn text @click="prev"> Previous </v-btn>
        <v-btn color="primary" @click="next"> Finished </v-btn>
      </v-card-actions>
    </v-card>

    <v-card v-if="step == 4">
      <CartFinish />
      <v-card-actions class="justify-end">
        <v-btn color="primary"> Go to Home </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import CartProductList from "./CartProductList.vue";
import CartPayment from "./CartPayment.vue";
import CartAddress from "./CartAddress.vue";
import CartFinish from "./CartFinish.vue";
export default {
  name: "Cart",
  components: { CartProductList, CartPayment, CartAddress, CartFinish },
  data() {
    return {
      step: 1,
    };
  },
  methods: {
    next() {
      this.step++;
    },
    prev() {
      this.step--;
    },
  },
};
</script>
