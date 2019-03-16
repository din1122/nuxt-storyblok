<template>
    <div>
    <nuxt-link :to="{ path:'Models/' + id, params: { modelName: catergory }}">
        <v-img :src="profileimage" aspect-ratio="1"></v-img>
        <div>
        <h1>{{title}}</h1>
        <p>{{summary}}</p>  <span>{{age}}</span>
        </div>
    </nuxt-link>
    </v-container>
    </div>
</template>

<script>
    export default {
        props:{
        title: {
        type: String,
        required: true
      },
      summary: {
        type: String,
        required: true
      },
      profileimage: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      age: {
        type: String,
        required: true
      },
      catergory: {
        type: String,
        required: true
      }
        },

        
    }
</script>

<style scoped>

</style>