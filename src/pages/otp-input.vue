<template>
  <div>
    <otp-input :digits="digits" :mode="mode" :type="type" :placeholder="placeholder" :radius="radius" :isDisabled="isDisabled" :isValid="isValid">
      <!-- 	@on-complete="onCompleteHandler"
      :isValid="isCodeValid"
			@on-changed="onChangedHandler"
			@on-paste="onPasteHandler" -->
      <template #errorMessage> OTP Invalid </template>
    </otp-input>
  </div>
</template>

<script>
export default {
  components: {
    OtpInput: require("otp-input-vue2").default,
  },
  data() {
    return {
      digits: 6,
      mode: "separate",
      type: "number",
      placeholder: "-",
      radius: "10",
      isDisabled: false,
      isValid: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
