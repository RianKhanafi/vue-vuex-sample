<template>
  <div class="button">
    <button @click="$store.dispatch('decreaseCounter')">-</button
    ><button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>

<script>
export default {};
</script>
