<template>
  <div>
    <Topbar/>
    <main class="main-content">
    <nuxt/>
    </main>
  </div>
</template>
<script>
import Topbar from "@/components/Toolbar";
export default {
  data() {
    return {};
  },
  components: {
    Topbar
  }
};
</script>
<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.main-content{
  margin-top:4.5rem;
}
.teaser,
.column {
  font-size: 2rem;
  text-align: center;
  line-height: 3;
  background: #ebeff2;
  border-radius: 10px;
  margin: 10px 5px;
}

.grid {
  display: flex;
}

.column {
  flex: 1;
}
</style>

