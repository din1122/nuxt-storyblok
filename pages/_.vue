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
         posts: [{
             title: 'A new Beginning',
             previewText: 'this will be awosome, dont\'t miss it!',
             thumbnail: 'https://images.pexels.com/photos/1730560/pexels-photo-1730560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
             id: 'a-new-begining'
           },
           {
             title: 'A second Beginning',
             previewText: 'this will be awosome, dont\'t miss it!',
             thumbnail: 'https://images.pexels.com/photos/1730560/pexels-photo-1730560.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
             id: 'a-second-begining'
           },
         ]
       }
     },
    asyncData(context){
      return context.app.$storyapi.get('cdn/stories',{
        version:'draft',
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
