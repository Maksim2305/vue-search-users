<template>
  <div id="app">
    <main>
      <AppHeader />
      <div class="content-container">
        <SideBar />
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import SideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    AppHeader,
    SideBar,
  },
};
</script>

<style scoped lang="scss">
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding: 0 50px;
}
.content-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 26px 0 55px 0px;
}
</style>
