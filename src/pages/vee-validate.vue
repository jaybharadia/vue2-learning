<template>
  <div>
    <!-- <validation-provider rules="required|secret" v-slot="{ errors, invalid }">
      <input v-model="value" name="myinput" type="text" />
      <span>{{ errors[0] }}</span>

      <button :disabled="invalid">Submit</button>
    </validation-provider> -->

    <!-- <validation-provider rules="required|minimum:5,10" v-slot="{ errors, invalid }">
      <input v-model="value" name="myinput" type="text" />
      <span>{{ errors[0] }}</span>

      <button :disabled="invalid">Validate minimum 5</button>
    </validation-provider> -->

    <validation-provider rules="required|one_of:1,2,3,4,5,6,7,8,9" v-slot="{ errors, invalid }" name="Option">
      <input v-model="value" name="myinput" type="text" />
      <span>{{ errors[0] }}</span>

      <button :disabled="invalid">Validate minimum 5</button>
    </validation-provider>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
