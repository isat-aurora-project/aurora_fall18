<template>
  <div class="upload">
    <h1>Upload your Light-Show here!</h1>
    <p> Please upload your light-show as an Arduino file. </p>
    <input type="file" @change="onFileSelected">
    <button v-on:click.prevent="onUpload"> Upload</button>
  
  
  </div>
</template>

<script>
import axios from "axios";
export default {
  data (){
    return {
      selectedFile: null
    }
  },
  methods: {
    onFileSelected(event){
      this.selectedFile = event.target.files[0]
    },
    onUpload() {
      const fd = new FormData();
      fd.append('file', this.selectedFile, this.selectedFile.name)
      axios.post('https://wt-a0f01f0b50faf36ea1feab5c1f6c544c-0.sandbox.auth0-extend.com/Aurora-mongoDB/submit',fd)
      .then(res => {
        console.log('test')
      })
    }
  }
}

</script>