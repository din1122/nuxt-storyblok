<template>
  <div>
    <v-toolbar
      :class="{'v-toolbar--fixed': $vuetify.breakpoint.smAndDown, '': $vuetify.breakpoint.mdAndUp}"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-toolbar-side-icon>
      <span class="display-2">AMSRFRIEND</span>
      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-md-and-down">
        <v-btn href :to="'/'"><a>Home</a></v-btn>
        <v-btn href :to="'/Models'"><a>Models</a></v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer class="drawer darken-3" dark v-model="drawer" fixed temporary>
      <v-list>
        <v-list-tile @click="drawer = !drawer" :href="'/'">
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="drawer = !drawer" :href="'/Models'">
          <v-list-tile-content>
            <v-list-tile-title>Models</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    };
  }
};
</script>
<style scoped>
.v-toolbar {
  border-bottom: 4px solid #ca278c;
}
.logo {
  height: 140px;
  margin-top: 10px;
}
.display-2{
color:white !important;
}
.drawer {
    background:#111111;
}
a{
    text-decoration:none;
    color:white;
}
>>>.theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat){
background:transparent;
}
>>>.theme--light.v-toolbar{
background:#111111;
}
</style>