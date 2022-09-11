<template>
  <!-- v-model with computed -->
  <!-- <input placeholder="Enter color code" type="text" v-model="colorCode" /> -->
  <!-- v-model directly to the state -->
  <!-- <input placeholder="Enter color code" type="text" v-model="$store.state.colorCode" /> -->

  <input placeholder="Enter color code" type="text" v-model="colorCode" />

  <!-- process -->
  <!-- state direct with state.stateName -->
  <!-- input -->
  <!-- computed set -->
  <!-- store action async direct with dispatch('') -->
  <!-- store mutation direct with commit('')-->
</template>

<script>
export default {
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.dispatch("setColorCode", newValue);
      },
    },
  },
};
</script>
