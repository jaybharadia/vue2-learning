<template>
  <div class="container content">
    File Upload section
    <VueFileAgent v-model="file" theme="grid" :deletable="true" ref="fileAgent" :multiple="true" accept="image/*,.pdf" :maxSize="'5MB'" @beforedelete="onBeforeDelete($event)" :meta="true" />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      file: {
        name: "Cancelled Cheque",
        type: "image/jpeg",
        size: 4949393,
        ext: "jpeg",
        url: "https://api-bii.preview.im/storage/company-16/documents/314d29ed-e7fb-4806-a848-c1902e4befec.jpeg",
      },
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
