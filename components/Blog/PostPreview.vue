<template>
    <nuxt-link :to="'/blog/' + id"
    >
      <v-card elevation="4" max-height="800" height="700">
      <v-img :src="thumbnailImage" aspect-ratio="1" ></v-img>
       <v-card-title primary-title  >
          <div>
                <h1>{{title}}</h1>
                <p>{{excert}}</p>
          </div>  
        </v-card-title>
        <!--
          <div class="post-preview-content">
       
           
          </div>
          -->
      </v-card>
    </nuxt-link>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      excert: {
        type: String,
        required: true
      },
      thumbnailImage: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    }
  }

</script>

<style scoped>
  a {
    text-decoration: none;
    color: black;
  }

  /*.post-preview {
    border-radius: 3px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
    width: 90%;
    height: 20rem;
    margin: 1rem; 
  }
*/
  .post-preview-thumbnail {
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 10rem;
  }

  .post-preview-content {
    text-align: center;
    padding: 1rem;
  }
  p{
    padding:1rem;
  }

  @media (min-width:35rem) {
    .post-preview {
      width: 25rem;
    }
  }

</style>
