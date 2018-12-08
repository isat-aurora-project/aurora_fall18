<template>
  <ion-content padding="true" scroll="false" class="has-header">
    <div class="upload">
      <img alt="Aurora" src="../assets/aurora.png" style="display: block; width: auto; height: auto; margin-left: auto; margin-right: auto;">
      <h1 style="text-align: center;">Upload your Light-Show here!</h1>
      <p style="text-align: center;"> Please upload your light-show as an Arduino file. </p>
      <item class="button button-positive" style="text-align:center; display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;">
        <label>
          <input type="file" @change="onFileSelected">
        </label>
      </item>
     <ion-button 
        v-on:click.prevent="onUpload"
        id="upload-button3"
        class="button button-positive button-block icon ion-upload"
        style="display: block; width: 310px; height: 57px; margin-left: auto; margin-right: auto;"
       >Upload</ion-button>
    </div>
  </ion-content>
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