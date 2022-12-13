<template>
  <div id="app">
    <Sidebar :menu="menu" />
    <div class="layout-content">
      <!-- <router-view></router-view> -->

      <h2>Testing Array caveats</h2>

      Array {{ companies }}

      <button @click="updateArray">Update</button>
    </div>
  </div>
</template>

<script>
// import productMixin from "@/mixins/product";
export default {
  components: {
    Sidebar: require("@/components/Sidebar.vue").default,
  },
  // mixins: [productMixin],

  created() {
    // this.companies[2] = "TCS";
  },

  data() {
    return {
      file: [],
      companies: ["L&T", "7Span"],
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
        {
          title: "Vee Validate",
          href: { name: "vee-validate" },
          icon: {
            element: "MdiNumeric6CircleOutline",
          },
        },
        {
          title: "Date Picker",
          href: { name: "date-picker" },
          icon: {
            element: "MdiNumeric6CircleOutline",
          },
        },
      ],
    };
  },
  mounted() {
    // this.companies[2] = "Capegemini";
    // this.companies.push("TCS");
  },

  methods: {
    updateArray() {
      this.companies[1] = "Accenture";
      // this.companies.push("TATA");

      // this.$set(this.companies, 2, "IBM");
      console.log("inside update array method", this.companies);
    },
  },
};
</script>

<style lang="scss">
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
