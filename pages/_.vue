<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
    <v-flex v-for="post in videos" :key="post.id" xl4 xs12 md4>
      <Videopost 
      :title="post.title"
      :id="post.id"
      :thumbnail="post.thumbnail"
      :videolink="post.videolink"
      />
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
import Videopost from '@/components/Videos/Videopost';
  export default {
     data() {
       return {
           videos:[]
       }
     },
    asyncData(context){
      return context.app.$storyapi.get('cdn/stories',{
        version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with:'videos/'
      }).then(res => {
        return {
        videos: res.data.stories.map(bp =>{
          console.log(res)
          return{
            id:bp.slug,
            title:bp.content.title,
            thumbnail:bp.content.thumbnail,
            videolink:bp.content.videolink
          }
        })
        }
      })

    },
    components:{
      Videopost
    }
  };

</script>

<style>
body{

}
html{
    background:#222222 !important;
}
</style>
