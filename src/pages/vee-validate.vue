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

    <!-- <validation-provider rules="required|one_of:1,2,3,4,5,6,7,8,9" v-slot="{ errors, invalid }" name="Option">
      <input v-model="value" name="myinput" type="text" />
      <span>{{ errors[0] }}</span> -->

    <ValidationObserver v-slot="{ invalid }">
      <validation-provider rules="required" name="password" vid="password" immediate v-slot="{ errors }">
        <label for=""> Password </label>
        <input v-model="password" type="text" />
        <span>{{ errors[0] }}</span>
      </validation-provider>

      <validation-provider rules="confirmed:password" name="confirm password" immediate v-slot="{ errors }" :slim="true">
        <label for="">Confirm password</label>
        <input v-model="confirmPassword" type="text" />
        <span>{{ errors[0] }}</span>

        <button :disabled="invalid">Validate</button>
      </validation-provider>

      <!-- FIle Validation -->

      <ValidationProvider rules="required|image" v-slot="{ validate, errors }">
        <input type="file" @change="validate" />
        <p>{{ errors[0] }}</p>
      </ValidationProvider>

      <button :disabled="invalid">Submit</button>
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: null,
      confirmPassword: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
