<template>
  <div id="app">
    <!-- <router-view/> -->

    <Sidebar :menu="menu" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {
    Sidebar: require("@/components/Sidebar.vue").default,
  },
  data() {
    return {
      file: [],
      show: false,
      menu: [
        {
          title: "Sidebar",
          header: true,
          hiddenOnCollapse: true,
          href: "/",
        },
        {
          title: "Vue Select",

          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
        {
          title: "Vue File Agent",
          href: { name: "vue-file-agent" },
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
        {
          title: "Customers",
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
        {
          title: "Customers",
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
        {
          title: "Customers",
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
      ],
    };
  },

  methods: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.container {
  padding: 24px;
}

.content {
  margin-left: 200px;
}
</style>
