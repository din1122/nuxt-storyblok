<template>
<v-container>
<v-layout row wrap>
<v-flex v-for="item in posts" xl3 md3 sm12 :key="item.id">
<ModelProfile :catergory="item.catergory" :title="item.title" :summary="item.summary" :age="item.age" :profileimage="item.image" :id="item.id"/>
</v-flex>
</v-layout>
</v-container>  

</template>

<script>
import ModelProfile from '@/components/ModelProfile';
  export default {
     data() {
       return {
           posts:[]
       }
     },
    asyncData(context){
      return context.app.$storyapi.get('cdn/stories',{
       version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with:'models/',
      }).then(res => {
          console.log(res.data)
        return {
        posts: res.data.stories.map(bp =>{
          return{
            title:bp.content.title,
            summary:bp.content.summary,
            image:bp.content.Profile,
            id:bp.slug,
            age:bp.content.Age,
            catergory:bp.content.catergory[0]
            
          }
        })
        }
      })
    },
    components:{
      ModelProfile
    },
    created(){
        console.log(this.posts)
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
