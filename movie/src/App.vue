<template>
  <div id="app">
    <MovieHeader></MovieHeader>
    <div class="container">
      <router-view></router-view>
    </div>
    <MovieFooter v-if="this.$store.state.showFoot"></MovieFooter>
  </div>
</template>

<script>
  import MovieHeader from '@/components/movieHeader'
  import MovieFooter from '@/components/movieFooter'
  export default {
    name: 'App',
    components:{
      MovieHeader, MovieFooter
    }
  }
</script>

<style>
  *{ margin:0; padding:0; list-style:none; text-decoration: none; line-height: 1; }
  html, body{ width:100%; height: 100%; }
  body{ font-size: 0.28rem; background-color:#f8f8f8; font-family: "Microsoft Yahei" }
  a{ color: #333; }
  a:active, a:link, a:hover{ -webkit-tap-highlight-color:rgba(0, 0, 0, 0); -moz-tap-highlight-color:rgba(0, 0, 0, 0); -ms-tap-highlight-color:rgba(0, 0, 0, 0); -o-tap-highlight-color:rgba(0, 0, 0, 0); tap-highlight-color:rgba(0, 0, 0, 0); }
  #app{ width:100%; max-width: 7.5rem; }
  .container{ width:100%; height:100%; padding: .88rem 0 1rem; }
</style>
