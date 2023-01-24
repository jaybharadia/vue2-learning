<template>
  <div>
    <!-- <template v-if="!isLoading"> -->
    <div v-show="!isLoading">
      <VueTable
        :fields="fields"
        :api-url="api"
        :http-options="httpOptions"
        pagination-path="meta"
        ref="vuetable"
        @vuetable:pagination-data="onPaginationData"
        @vuetable:loading="startLoading"
        @vuetable:loaded="stopLoading"
        :sort-order="sortOrder"
        :query-params="makeQueryParams"
        :detail-row-component="$options.detailRow"
        @vuetable:row-clicked="toggleDetailRow"
      >
      </VueTable>
      <VueTablePagination
        ref="pagination"
        @vuetable-pagination:change-page="onChangePage"
      />
    </div>
    <!-- </template> -->
    <!-- <template v-else> -->
    <!-- <ListLoader v-if="true" /> -->
    <TableLoader v-if="isLoading" />
    <!-- </template> -->
  </div>
</template>

<script>
import TableLoader from "@/components/loader/TableLoader.vue";
import VueTable from "vuetable-2/src/components/Vuetable";
import VueTablePagination from "vuetable-2/src/components/VuetablePagination";
import DetailRow from "@/components/table/DetailRow.vue";
// import companyList from "@/data/companies";
export default {
  // companyList,
  DetailRow,
  components: {
    VueTable,
    VueTablePagination,
    TableLoader,
  },
  data() {
    return {
      sortOrder: [
        {
          field: "credit",
          direction: "desc",
        },
      ],
      isLoading: false,
      api: "https://api-bii.preview.im/api/admin/v1/companies",

      httpOptions: {
        headers: {
          Authorization: "Bearer 3070|gwyRYF4TKc5Qq8Nmb157KuSxJwRfzz3xpdMwEt3C",
        },
      },
      fields: [
        {
          name: "name",
          title: "Name",
          sortField: "name",
        },
        {
          name: "gst_no",
          title: "GST NO",
        },
        {
          name: "mobile_no",
          title: "Mobile Number",
        },
        {
          name: "credit",
          title: "Total Credit",
          sortField: "credit",
        },
      ],
    };
  },
  methods: {
    toggleDetailRow(row) {
      console.log("row----", row);
      this.$refs.vuetable.toggleDetailRow(row.id);
    },
    makeQueryParams(sortOrder, currentPage, perPage) {
      return {
        // sort: {
        //   by: sortOrder[0].field,
        //   order: sortOrder[0].direction,
        // },

        "sort[by]": sortOrder[0].field,
        "sort[order]": sortOrder[0].direction,
        page: currentPage,
        per_page: perPage,
      };
    },
    startLoading() {
      console.log("inside STARTTT loading merhod");

      this.isLoading = true;
    },
    stopLoading() {
      console.log("inside stop loading merhod");
      this.isLoading = false;
    },
    onPaginationData(paginationData) {
      this.$refs.pagination.setPaginationData(paginationData);
    },
    onChangePage(page) {
      this.$refs.vuetable.changePage(page);
    },
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
