<script setup>
  import { ref} from "vue"
  const showModal = ref(false)
  // create array to save card
  const newnote = ref("")
  const notes = ref([])

  //generate light color function
  function getRandomLightColor(){
    return "hsl("+ Math.random() * 360 + ", 100%, 75%)";
  }

  //addnote function
  const addNote = () =>{
    notes.value.push({
      id: Math.floor(Math.random() * 1000000),
      title: newnote.value,
      date: new Date(),
      backgroundColor:getRandomLightColor()
    })
    newnote.value = ""
    showModal.value = false

  }
</script>


<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newnote" name="note" id="note" cols="30" rows="10" autofocus></textarea>
        <button @click="addNote" class="add">Add Note</button>
        <button @click="showModal=false" class="close">Close</button>
      </div>
    </div>
    <div class="container">
      <header>
        <h1>Notes</h1>
        <button @click="showModal = true">+</button>
      </header>
      <div class="card-container">
        <div v-for="note in notes" class="card" :style="{backgroundColor: note.backgroundColor}">
          <p class="main-text">{{ note.title }}</p>
          <p class="date">{{ note.date.toLocaleDateString("en-US") }}</p>
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
      font-size: 18px;
      padding: 10px;
      border: 0.3px solid #ccc;
      border-radius: 10px;
    }
    textarea:focus {
      outline: none !important;
      border: 0.3px solid #a1b4e9;
    }
</style>