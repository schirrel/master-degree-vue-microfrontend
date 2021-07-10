<!-- Usingin stepper couse a strange behavior and a lot or erros-->
<template>
  <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step :complete="e1 > 1" step="1"> Cart </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 2" step="2"> Address </v-stepper-step>

      <v-divider></v-divider>

      <v-stepper-step :complete="e1 > 3" step="3"> Payment </v-stepper-step>

      <v-divider></v-divider>
      <v-stepper-step :complete="e1 == 4" step="4"> Finished </v-stepper-step>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <CartProductList />
        <v-card-actions class="justify-end">
          <v-btn color="primary" @click="next"> Next </v-btn>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-content step="2">
        <CartAddress />
        <v-card-actions class="justify-end">
          <v-btn text @click="prev"> Previous </v-btn>
          <v-btn color="primary" @click="next"> Next </v-btn>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-content step="3">
        <CartPayment />
        <v-card-actions class="justify-end">
          <v-btn text @click="prev"> Previous </v-btn>
          <v-btn color="primary" @click="next"> Finished </v-btn>
        </v-card-actions>
      </v-stepper-content>

      <v-stepper-content step="4">
        <CartFinish />
        <v-card-actions class="justify-end">
          <v-btn color="primary" > Go to Home </v-btn>
        </v-card-actions>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
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
      e1: 1,
    };
  },
  methods: {
    next() {
      this.el++;
    },
    prev() {
      this.el--;
    },
  },
};
</script>
