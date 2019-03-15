<template>
  <section id="posts">
   <PostPreview v-for="post in posts" :key="post.id" 
   :title="post.title"
   :id="post.id"
   :excert="post.previewText"
   :thumbnailImage="post.thumbnail"
   />
  </section>
</template>

<script>
import PostPreview from '@/components/Blog/PostPreview';
  export default {
     data() {
       return {
       }
     },
    asyncData(context){
      return context.app.$storyapi.get('cdn/stories',{
       version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with:'blog/'
      }).then(res => {
        return {
        posts: res.data.stories.map(bp =>{
          console.log(res)
          return{
            id:bp.slug,
            title:bp.content.title,
            previewText:bp.content.summary,
            thumbnail:bp.content.thumbnail
          }
        })
        }
      })

    },
    components:{
      PostPreview
    }
  };

</script>

<style scoped>
#posts{
  display:flex;
padding-top:2rem;
justify-content:center;
align-items:center;
flex-direction:column;
}

@media  (min-width:35rem){
  #posts{
    flex-direction:row;
  }
}
</style>
