<template>
  <button :style="styles" @click="handleClick">
    <!-- @slot Menu Item footer
		@binding {string} icon Icon name which will get rendered
		@binding {string} text text of the Button
	-->
    <slot text="Button Text" icon="IconName"></slot>

    <!-- @slot Use this slot for Displaying Icon in Button -->
    <slot name="icon"></slot>
    <!-- @slot Use this slot for Showing content before Button Content -->
    <slot name="before"></slot>

    <slot name="after"></slot>
  </button>
</template>

<script>
import sizeMixin from "./sizeMixin";
/**
 * @displayName Vayu Button
 */
export default {
  name: "vayu-button",
  mixins: [sizeMixin],
  props: {
    /**
     * Sets the button font color
     */
    color: {
      type: String,
      default: "black",
    },
    /** Sets background color of the button
     * @since 1.2.0
     */
    background: {
      type: String,
      default: "white",
    },
    /** @deprecated Use color instead */
    oldColor: String,

    /**
     * Sets Theme of Button
     * @see https://google.com
     * @values solid,muted,trn,gradient,outline
     */
    theme: {
      type: String,
      default: "solid",
    },
  },
  computed: {
    styles() {
      return {
        "font-size": this.size,
        color: this.color,
        background: this.background,
      };
    },
  },
  methods: {
    handleClick(e) {
      /** Triggered when button is clicked
       * @event JenilClick
       * @type {Event}
       * @property { Boolean} status - It contains new Status of Button
       */
      this.$emit("click", e);

      /** Event for Alligator's example
       * @event gator
       * @type {Event}
       */
      this.$emit("gator", e);
    },
  },
};
</script>

<docs lang="md">
This button is amazing, use it responsibly.

## Examples

Orange button:

```vue
<vayu-button color="red">Push Me</vayu-button>
```

Ugly button with pink font and blue background:

```vue
<vayu-button color="pink">BUTTON IS UGLY</vayu-button>
```

Button containing custom tags:

```vue
<vayu-button>
  Text with <b>bold</b>
</vayu-button>
```
</docs>
