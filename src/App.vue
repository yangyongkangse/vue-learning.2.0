<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

#app {
  background-image: url(assets/images/background.jpg);
  background-size: 100%;
  background-position: center;
  width: 100%;
  height: 100%;
  position: fixed;
}
</style>
