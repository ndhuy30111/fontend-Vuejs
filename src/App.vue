<template>
  <div id="nav">
    <Header></Header>
    <router-view/>
    <Footer :link1="link1"></Footer>
  </div>
</template>

<script>
import Footer from './layout/Footer.vue'
import Header from './layout/Header.vue'
export default {
  components: { Header, Footer },
  data(){
    return {
      link1:[
       { herf:"fejfjwef",
        title:"lhfeihfie"},
        { herf:"fejfjwef",
        title:"lhfeihfie"},
        { herf:"fejfjwef",
        title:"lhfeihfie"}
      ]
    }
  }
}
</script>

<style>

</style>
