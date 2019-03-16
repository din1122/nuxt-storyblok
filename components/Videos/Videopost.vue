<template>
    <a :href='VideoUrl'
    >
      <v-card elevation="4" class="VideoCard">
      <v-img :src="thumbnail" aspect-ratio="1"  ></v-img>
       <v-card-title primary-title  >
          <div>
                <h1>{{VideoTitle}}</h1>
          </div>  
        </v-card-title>
        <!--
          <div class="post-preview-content">
       
           
          </div>
          -->
      </v-card>
    </a>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      videolink: {
        type: String,
        required: true
      },
      thumbnail: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      }
    },
    data(){
        return{
            VideoUrl:'',
            VideoTitle:''
        }
    },
    created(){
            //url
    const str = this.$props.videolink
    const URL = str.replace('/f/', '/embed/');
     this.VideoUrl = URL;

    const strt = this.$props.title
const title = strt.replace(/_/g, ' ');
   this.VideoTitle = title
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
    .VideoCard{
    height:750px;
    }
  @media (max-width:40rem) {
     .VideoCard{
    height:unset;
    }
  }

</style>
