<script setup>
  import { ref} from "vue"
  const showModal = ref(false)
</script>


<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea name="note" id="note" cols="30" rows="10"></textarea>
        <button class="add">Add Note</button>
        <button @click="showModal=false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="card-container">
        <div class="card">
          <p class="main-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi est doloremque, numquam similique tenetur magnam?</p>
          <p class="date">5/10/2023</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  main {
    width: 100vw;
    height: 100vh;
  }
  .container {
    max-width: 1000px;
    padding: 10px;
    margin: 0 auto;
  }
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header h1 {
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 25px;
  }
  header button {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 100%;
    background-color: blueviolet;
    font-size: 30px;
    font-weight: bold;
    color: white;
    cursor: pointer;
  }
  .card-container {
    display: flex;
    flex-wrap: wrap;
  }
  .card {
    display: flex;;
    flex-direction: column;
    justify-content: space-between;
    width: 225px;
    height: 225px;
    background-color: rgb(236, 140, 126);
    padding: 10px;
    border-radius: 15px;
    margin-right: 20px;
    margin-bottom: 20px;
  }
  .main-text {
    font-size: 16px;
  }
  .date {
    font-size: 16px;
    font-weight: bold;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.70);
    position: absolute;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .modal {
    width: 750px;
    background-color: white;
    padding: 30px;
    border-radius: 30px;
    position: relative;
    display: flex;
    flex-direction: column;

  }
  .modal button {
      width: 100%;
      padding: 10px;
      border: none;
      border-radius: 10px;
      background-color: blueviolet;
      margin-bottom: 10px;
      font-size: 18px;
      font-weight: bold;
      color: white;
      cursor: pointer;
    }
    .modal .add {
      margin-top: 15px;
    }
    .modal .close {
      background-color: red;
    }
    textarea {
      font-size: 16px;
      padding: 10px;
      border-radius: 10px;
    }
</style>