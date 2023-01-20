<template>
  <div>
    <VueTable
      api-url="https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json"
      :fields="fields"
      data-path="Results"
      pagination-path=""
    />
  </div>
</template>

<script>
import VueTable from "vuetable-2";

export default {
  components: {
    VueTable,
  },
  data() {
    return {
      fields: [
        "Country",
        "Mfr_Name",
        {
          name: "VehicleTypes",
          callback: "convertVehicleTypes",
        },
      ],
    };
  },
  methods: {
    convertVehicleTypes(value) {
      if (value.length) {
        let types = "";
        for (let type of value) {
          types = types + `<div>${type.Name}</div>`;
        }

        return types;
      } else return "";
    },
  },
};
</script>
