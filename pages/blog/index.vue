<template>
  <section id="posts">
   <PostPreview v-for="post in posts" :key="post.id" 
   :title="post.title"
   :id="post.id"
   :excert="post.previewText"
   :image="post.thumbnail"
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
      console.log(res.data);
        return {
        posts: res.data.stories.map(bp =>{
          return{
            id:bp.slug,
            title:bp.content.title,
            summary:bp.content.summary,
            image:bp.content.thumbnail
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
