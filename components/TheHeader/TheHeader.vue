<template>
    <header class="main-header">
    <nav class="main-nav">
        <ul class="nav-links">
        <nuxt-link to="/blog" tag="li" class="nav-link" ><a>All Posts</a></nuxt-link>
        <nuxt-link to="/about" tag="li" class="nav-link"><a>About</a></nuxt-link>
        <nuxt-link to="/models" tag="li" class="nav-link"><a>Models</a></nuxt-link>
        </ul>
    </nav>
    </header>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.nav-links{
list-style:none;
margin:0;
padding:0;
display:flex;
justify-content:center;
align-items:center;
height:100%;
}
.main-header{
    top:0;
    left:0;
    width:100%;
    background:#022d30;
    height:4.5rem;
}

.nav-link a{
    color:white;
    display:block;
    text-decoration:none;

}
.nav-link{
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 1rem;
    padding:0.3rem;
}
.nav-link a:hover,
.nav-link a:active{
    color:#579ce3;
    transition:0.2s;
}
.nuxt-link-active a{
     color:#579ce3;
}
.nav-link.nuxt-link-active{
    border-bottom:#579ce3 3px solid;
    transition:0.2s;
}
.main-nav{
height:100%;
}
</style>