<template>
  <v-card v-if="!loading && user" height="150">
    <v-row class="pt-2 pl-2">
      <v-col class="align-content-center" align-self="center" cols="2">
        <v-avatar align-self="center" class="profile" color="grey" size="124">
          <v-img align-self="center" :src="userPicture"></v-img>
        </v-avatar>
      </v-col>
      <v-col align-self="start" cols="10">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              {{ userName }}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{ user.cell }} - {{user.phone}}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ user.email }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ user.location.street.number }},
              {{ user.location.street.name }}
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              {{ user.location.city }} -
              {{ user.location.state }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>
<script>
import { fetchUser } from "@/service/user.service.js";

export default {
  name: "Profile",

  data: () => ({
    user: {},
    loading: true,
  }),
  mounted() {
    this.loadUser();
  },
  computed: {
    userPicture() {
      return !this.loading && this.user ? this.user.picture.large : "";
    },
    userName() {
      return !this.loading && this.user
        ? `${this.user.name.first} ${this.user.name.last}`
        : "";
    },
  },
  methods: {
    async loadUser() {
      try {
        const response = await fetchUser();
        this.user = response.results[0];
      } catch (err) {
        console.log(err);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.align-content-center {
  margin: auto;
  text-align: center;
}
</style>