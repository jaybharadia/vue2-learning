<template>
  <div class="flex flex-col gap-4">
    <div class="flex gap-4 items-center">
      <LvButton label="This is a Button" type="button" size="xl" />

      <LvButton label="Submit" class="lv--primary" />
      <LvButton label="Disabled" disabled="disabled" class="lv--primary" />
      <LvButton label="Link" class="--link-button lv--primary" />
      <LvButton label="Cancel" class="lv--complementary" />

      <LvButton icon="light-icon-alert-circle" class="lv--primary" />
      <LvButton
        label="Submit"
        icon="light-icon-arrow-down-circle"
        class="lv--primary"
      />
      <LvButton
        label="Submit"
        icon-right="light-icon-arrow-down-circle"
        class="lv--primary"
      />
    </div>

    <!-- COLORS -->

    <div class="flex gap-4 items-center">
      <LvButton label="Login" class="lv--primary" @click="login" />
      <LvButton label="Secondary" class="lv--secondary" />
      <LvButton label="Success" class="lv--success" />
      <LvButton label="Info" class="lv--info" />
      <LvButton label="Warning" class="lv--warning" />
      <LvButton label="Help" class="lv--help" />
      <LvButton label="Danger" class="lv--danger" />
      <LvButton label="Cancel" class="lv--complementary" />
    </div>

    <div class="flex gap-4 items-center">
      <LvButton label="Primary" class="--text-button lv--primary" />
      <LvButton label="Secondary" class="lv--secondary --text-button" />
      <LvButton label="Success" class="lv--success --text-button" />
      <LvButton label="Info" class="lv--info --text-button" />
      <LvButton label="Warning" class="lv--warning --text-button" />
      <LvButton label="Help" class="lv--help --text-button" />
      <LvButton label="Danger" class="lv--danger --text-button" />
      <LvButton label="Plain" class="--text-button lv--plain" />
      <LvButton label="Complementary" class="--text-button lv--complementary" />
    </div>

    <div class="flex gap-4 items-center">
      <LvButton label="Primary" outlined class="lv--primary" />
      <LvButton label="Secondary" outlined class="lv--secondary" />
      <LvButton label="Success" outlined class="lv--success" />
      <LvButton label="Info" outlined class="lv--info" />
      <LvButton label="Warning" outlined class="lv--warning" />
      <LvButton label="Help" outlined class="lv--help" />
      <LvButton label="Danger" outlined class="lv--danger" />
      <LvButton label="Complementary" outlined class="lv--complementary" />
      <LvButton icon="light-icon-heart" outlined class="lv--danger" />
    </div>

    <div class="flex gap-4 items-center">
      <LvButton label="Primary" rounded class="lv--primary" />
      <LvButton label="Secondary" rounded class="lv--secondary" />
      <LvButton label="Success" rounded class="lv--success" />
      <LvButton label="Info" rounded class="lv--info" />
      <LvButton label="Warning" rounded class="lv--warning" />
      <LvButton label="Help" rounded class="lv--help" />
      <LvButton label="Danger" rounded class="lv--danger" />
      <br />

      <div class="flex gap-4 items-center">
        <LvButton icon="light-icon-bookmark" rounded class="lv--secondary" />
        <LvButton icon="light-icon-search" rounded class="lv--success" />
        <LvButton icon="light-icon-user" rounded class="lv--info" />
        <LvButton icon="light-icon-bell" rounded class="lv--warning" />
        <LvButton icon="light-icon-heart" rounded class="lv--help" />
        <LvButton icon="light-icon-trash" rounded class="lv--danger" />
        <LvButton icon="light-icon-circle-check" rounded class="lv--primary" />
      </div>

      <br />

      <div class="flex gap-4 items-center">
        <LvButton
          icon="light-icon-circle-check"
          rounded
          outlined
          class="lv--primary"
        />
        <LvButton
          icon="light-icon-bookmark"
          rounded
          outlined
          class="lv--secondary"
        />
        <LvButton
          icon="light-icon-search"
          rounded
          outlined
          class="lv--success"
        />
        <LvButton icon="light-icon-user" rounded outlined class="lv--info" />
        <LvButton icon="light-icon-bell" rounded outlined class="lv--warning" />
        <LvButton icon="light-icon-heart" rounded outlined class="lv--help" />
        <LvButton icon="light-icon-trash" rounded outlined class="lv--danger" />
      </div>
    </div>

    <div class="flex gap-4 items-center">
      <LvButton
        label="Small"
        size="sm"
        icon="light-icon-arrow-down-circle"
        class="lv--primary"
      />
      <LvButton
        label="Normal"
        size="md"
        icon="light-icon-arrow-down-circle"
        class="lv--primary"
      />
      <LvButton
        label="Large"
        size="lg"
        icon="light-icon-arrow-down-circle"
        class="lv--primary"
      />
      <LvButton
        label="Extra Large"
        size="xl"
        icon="light-icon-arrow-down-circle"
        class="lv--primary"
      />
    </div>

    <div class="flex gap-4 items-center">
      <span class="lv-buttonset">
        <LvButton
          label="Save"
          icon="light-icon-circle-check"
          class="lv--primary"
        />
        <LvButton label="Delete" icon="light-icon-trash" class="lv--danger" />
        <LvButton
          label="Complementary"
          icon="light-icon-x"
          class="lv--complementary"
        />
      </span>
    </div>

    <div class="flex flex-wrap gap-4 items-center">
      <LvButton label="Primary" push class="lv--primary" />
      <LvButton label="Secondary" push class="lv--secondary" />
      <LvButton label="Success" push class="lv--success" />
      <LvButton label="Info" push class="lv--info" />
      <LvButton label="Warning" push class="lv--warning" />
      <LvButton label="Help" push class="lv--help" />
      <LvButton label="Danger" push class="lv--danger" />
      <LvButton label="Plain" push class="lv--plain" />
      <br />
      <LvButton label="Primary" raised class="lv--primary" />
      <LvButton label="Secondary" raised class="lv--secondary" />
      <LvButton label="Success" raised class="lv--success" />
      <LvButton label="Info" raised class="lv--info" />
      <LvButton label="Warning" raised class="lv--warning" />
      <LvButton label="Help" raised class="lv--help" />
      <LvButton label="Danger" raised class="lv--danger" />
      <LvButton label="Plain" raised class="lv--plain" />
      <br />
      <LvButton label="Primary" push outlined />
      <LvButton label="Secondary" push outlined class="lv--secondary" />
      <LvButton label="Success" push outlined class="lv--success" />
      <LvButton label="Info" push outlined class="lv--info" />
      <LvButton label="Warning" push outlined class="lv--warning" />
      <LvButton label="Help" push outlined class="lv--help" />
      <LvButton label="Danger" push outlined class="lv--danger" />
      <LvButton label="Plain" push outlined class="--text-button" />
    </div>

    <div class="flex gap-4 items-center">
      <LvButton label="Primary" deep-shadow-hover class="lv--primary" />
      <LvButton label="Secondary" deep-shadow-hover class="lv--secondary" />
      <LvButton label="Success" deep-shadow-hover class="lv--success" />
      <LvButton label="Info" deep-shadow-hover class="lv--info" />
      <LvButton label="Warning" deep-shadow-hover class="lv--warning" />
      <LvButton
        label="Help"
        deep-shadow-hover
        class="lv--help --deep-shadow-hover"
      />
      <LvButton label="Danger" deep-shadow-hover class="lv--danger" />
      <LvButton label="Plain" deep-shadow-hover class="lv--plain" />
    </div>

    <div class="flex gap-4 items-center">
      <LvButton label="Primary" deep-shadow push class="lv--primary" />
      <LvButton label="Secondary" push deep-shadow class="lv--secondary" />
      <LvButton label="Success" push deep-shadow class="lv--success" />
      <LvButton label="Info" push deep-shadow class="lv--info" />
      <LvButton label="Warning" push deep-shadow class="lv--warning" />
      <LvButton label="Help" push deep-shadow class="lv--help" />
      <LvButton label="Danger" push deep-shadow class="lv--danger" />
      <LvButton label="Plain" push deep-shadow class="lv--plain" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      console.log("inside LOgin");
    },
  },
};
</script>

<style lang="scss" scoped></style>
