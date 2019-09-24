<template>
  <div>
    <component
      @input="$emit('input', selectedValue)"
      v-if="component"
      v-model="selectedValue"
      :name="name"
      :is="component"
      :type="mappedType"
    ></component>
  </div>
</template>

<script>
import HELPERS from "../helpers";
import autocompdefault from "./AutocompDefault";
/* eslint no-param-reassign: ["error", { "props": false }] */

const defaultComponentObject = {
  type: "",
  name: "v-text-field"
};
export default {
  mixins: [HELPERS],
  props: ["type", "name", "value"],
  components: {
    autocompdefault
  },
  name: "FormComponentWrapper",
  data() {
    return {
      selectedValue: this.value,
      loading: false,
      component: null,
      mappedType: null,
      // for Mapping easy components of direct input without API calls.
      componentMap: {
        // contains objects with 2 props: name -> component name;
        // type -> prop to give to component.
        date: { name: "v-date-picker" },
        string: defaultComponentObject,
        text: defaultComponentObject,
        positiveinteger: defaultComponentObject
      }
    };
  },
  created() {
    const typeL = this.type.toLowerCase();
    let c = this.componentMap[typeL];
    if (!c) {
      c = { type: this.type, name: "autocompdefault" };
    }
    if (this.selectedValue) {
      this.$info("FormComponentWrapper created", c, this.selectedValue);
    }
    this.component = c.name;
    this.mappedType = c.type;
    this.selectedValue = this.value;
  },
  updated() {
    this.selectedValue = this.value;
  }
};
</script>
