<template>
  <div class="container content">
    File Upload section
    <VueFileAgent
      v-model="file"
      theme="grid"
      :thumbnailSize="120"
      :deletable="true"
      ref="fileAgent"
      :multiple="true"
      accept="image/*,.pdf"
      :maxSize="'5MB'"
      @beforedelete="onBeforeDelete($event)"
      :meta="true"
    />

    <Profile key="1" />
  </div>
</template>

<script>
export default {
  components: {
    Profile: require("@/components/Profile.vue").default,
  },
  data() {
    return {
      // file: {
      //   name: "Cancelled Cheque",
      //   type: "image/jpeg",
      //   size: 4949393,
      //   ext: "jpeg",
      //   url: "https://api-bii.preview.im/storage/company-16/documents/314d29ed-e7fb-4806-a848-c1902e4befec.jpeg",
      // },

      file: null,
    };
  },
  methods: {
    onBeforeDelete(fileRecord) {
      if (confirm("Are you sure?")) {
        this.$refs.fileAgent.deleteFileRecord(fileRecord);
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
