<script setup>
  import { ref } from "vue"
  const count = ref(0)

  const addCounter = () => {
    count.value += 1 ;
  }

  const subCounter = () => {
    count.value -= 1 ;
    if(count.value < 0) {
      count.value = 0
    }
  }

</script>

<template>
  <main>
    <div class="main-container">
      <h4>The Current Counte is ...</h4>
      <h1>{{count}}</h1>
      <button @click="subCounter">-</button>
      <button @click="addCounter">+</button>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: aliceblue;
  }
  .main-container {
    text-align: center;
    border: 1px solid gray;
    padding: 100px;
    border-radius: 10px;
  }
  .main-container button {
    width: 100px;
    padding: 10px;
    background-color: blueviolet;
    color: white;
    font-size: 20px;
    font-weight: bold;
    border-radius: 10px;
    margin: 10px;
    border: none;
    cursor: pointer;
  }
  button:hover {
    background-color: blue;
  }
</style>
