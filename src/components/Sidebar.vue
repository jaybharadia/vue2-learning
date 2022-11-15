<template>
  <sidebar-menu :menu="menu" :collapsed="collapsed" :width="width">
    <span slot="toggle-icon"> <IcRoundCompareArrows /> </span>
  </sidebar-menu>
</template>

<script>
// import variables from "@/styles/variables.scss";
// console.log("scss varibales", variables);
export default {
  props: {
    menu: Array,
    width: {
      type: String,
      Number,
      default: "200px",
    },
  },
  mounted() {
    window.addEventListener("resize", () => {
      this.setCollapsedState();
    });
  },
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    setCollapsedState() {
      if (window.innerWidth < 768) this.collapsed = true;
      else this.collapsed = false;
    },
  },
};
</script>

<style></style>
