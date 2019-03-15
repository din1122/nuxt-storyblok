<template>

    <section id="about-page" v-editable="blok">
      <h1>{{title}}</h1>
      <p>{{content}}</p>
    </section>

</template>

<script>
export default {
  data(){
    return{
   
    }
  },
  asyncData(context){
    return context.app.$storyapi.get('cdn/stories/about', {
      version: process.env.NODE_ENV == 'production' ? 'published' : 'draft',
    }).then(res => {
      return {
        blok: res.data.story.content,
        title:res.data.story.content.title,
        content:res.data.story.content.content
      }
    })
  },
    mounted() {
        this.$storybridge.on(['input', 'published'], (event) => {
      if (event.action == 'input') {
        if (event.story.id === this.story.id) {
          this.story.content = event.story.content
        }
      else {
        window.location.reload()
      }
      }
    });
    this.$storybridge.on('change', () => {
      location.reload(true);
    })
  }
};
</script>

<style scoped>
#about-page{
width:80%;
max-width:500px;
margin:auto;
}
#about-page p{
  white-space:pre-line;
}
</style>