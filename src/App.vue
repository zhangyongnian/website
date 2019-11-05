<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
export default {
  name: "app",
  components: {
    Header,
    Footer
  }
};
</script>

<style lang='stylus' rel='stylesheet/stylus'>
#app
  width 100%
  height 100%
  Header
    position fixed
    top 0
</style>
