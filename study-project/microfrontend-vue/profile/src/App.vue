<template>
  <v-app>
    <Profile />
  </v-app>
</template>

<script>
import Profile from "./components/Profile";

export default {
  name: "App",

  components: {
    Profile,
  },

  data: () => ({
    //
  }),
};
</script>
