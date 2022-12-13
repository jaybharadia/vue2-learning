<template>
  <div>
    <!-- Simple date with default value -->
    <!-- <date-picker v-model="date" placeholder="Select" :defaultValue="new Date('2022-08-10')" /> -->

    <!-- Disabled date options -->
    <!-- <date-picker v-model="date" range placeholder="Select" :disabled-date="setDisabledDate" /> -->

    <!-- Date time  -->
    <!-- <date-picker type="datetime" v-model="date" placeholder="Select" format="DD MMM YYYY hh  : mm : ss A" value-type="DD/MM/YYYY" /> -->

    <date-picker type="datetime" v-model="date" placeholder="Select" @input-error="inputInvalid" />

    <!--  Year calendar -->
    <!-- <date-picker type="year" range v-model="date" placeholder="Select" /> -->

    <!-- Month calendar -->

    <!-- <date-picker type="month" v-model="date" placeholder="Select" /> -->

    <!-- Time  -->

    <!-- <date-picker type="time" v-model="date" placeholder="Select" /> -->

    <!-- Week  -->
    <!-- <date-picker type="week" range v-model="date" placeholder="Select" /> -->

    <!-- confirm  -->
    <!-- <date-picker v-model="date" confirm placeholder="Select" confirm-text="Submit" /> -->

    <!-- Multiple option -->
    <!-- <date-picker type="datetime" multiple v-model="date" placeholder="Select" /> -->

    <!-- Disabled -->

    <!-- <date-picker type="datetime" disabled v-model="date" placeholder="Select" /> -->

    <!-- Disabled date  -->

    <!-- <date-picker type="datetime" v-model="date" placeholder="Select" :disabledDate="setDisabledDate" /> -->

    <!-- INline  -->

    <!-- <date-picker type="datetime" v-model="date" placeholder="Select" inline /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: null,
    };
  },
  methods: {
    setDisabledDate(date, dateArray) {
      console.log("inside set disabled date", date, "date array", dateArray);
      return new Date().getTime() < date.getTime() ? true : false;
    },

    inputInvalid(event) {
      console.log("inside input invalid", event);
    },
  },
};
</script>

<style scoped></style>
