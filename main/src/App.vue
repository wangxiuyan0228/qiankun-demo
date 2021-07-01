<template>
  <el-container id="app">
    <el-header>
      <el-menu
        :default-active="activeIndex2"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="/vue">vue</el-menu-item>
        <el-menu-item index="/purehtml">purehtml</el-menu-item>
      </el-menu>
      <el-button @click="refreshToken">更新全局状态</el-button>
    </el-header>
    <el-main id="subapp-container">
      <div id="subapp-container">
        <h4 v-if="loading" class="subapp-loading">Loading...</h4>
        <div id="subapp-viewport"></div>
      </div>
    </el-main>
    <router-view />
  </el-container>
</template>
<script>
export default {
  name: "",
  props: {
    loading: Boolean
  },
  data() {
    return {
      activeIndex2: "/vue"
    };
  },
  methods: {
    handleSelect(key) {
      this.$router.push(key);
    },
    refreshToken() {
       window.setGlobalState({
        ignore: "master",
        user: {
          name: "master"
        }
      });
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
.el-header {
  background: #545c64;
}
.el-button{
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;
}
</style>
