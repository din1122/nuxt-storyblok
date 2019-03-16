<template>
    <div>
    <v-flex v-for="video in videos" >
    {{$route.params.modelName}}
    
    {{video.title}}
    </v-flex>
    </div>
</template>

<script>
    export default {
        props: {
       
        },
        data(){
            return{
                videos:[]
            }
        },
    asyncData(context){
      return context.app.$storyapi.get('cdn/stories',{
       version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
        starts_with:'models/',
        'filter_query[catergory][exists]': "a1419fd4-e151-49c6-aa01-8fb395466136"
      }).then(res => {
          console.log(res)
        return {
        videos: res.data.stories.map(bp =>{
          return{
            title:bp.content.title,
            summary:bp.content.summary,
            image:bp.content.Profile,
            id:bp.slug,
            age:bp.content.Age
          }
        })
        }
      })
    },
    }
</script>

<style scoped>

</style>