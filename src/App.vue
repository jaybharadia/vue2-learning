<template>
  <div id="app">
    <!-- <router-view/> -->

    <Sidebar :menu="menu" />
    <div class="layout-content">
      <router-view></router-view>
    </div>
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
          href: { name: "vue-select" },
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
          title: "Axios Get Data Caching",
          href: { name: "axios-data" },
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
        {
          title: "Input Mask Library",
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
          child: [
            {
              title: "V Mask",
              href: { name: "vue-mask-v-mask" },
            },
            {
              title: "I Mask ",
              href: { name: "vue-mask-i-maskjs" },
            },
          ],
        },
        {
          title: "Customers",
          icon: {
            element: "IcOutlineArrowDropDownCircle",
          },
        },
        {
          title: "Vue Tour",
          href: { name: "vue-tour" },
          icon: {
            element: "IcAirplane",
          },
        },
        {
          title: "Otp Input",
          href: { name: "otp-input" },
          icon: {
            element: "MdiNumeric6CircleOutline",
          },
        },
      ],
    };
  },
  mounted() {},

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
.layout-content {
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
</style>
