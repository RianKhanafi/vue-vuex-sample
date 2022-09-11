<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
    <CounterSquared />
    <Button />
    <div><ColorCode /></div>
  </div>
</template>

<script>
// @ is an alias to /src

import Counter from "@/components/Counter.vue";
import Button from "@/components/Buttons.vue";
import ColorCode from "@/components/ColorCode.vue";

export default {
  name: "HomeView",
  components: {
    Counter,
    CounterSquared: require("@/components/CounterSquared.vue").default,
    Button,
    ColorCode,
  },
};
</script>

<style>
div {
  margin-bottom: 10px;
}

.counter {
  font-size: 80px;
}

.button button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>
