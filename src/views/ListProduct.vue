<template>
  <div id="ListProduct">
    <HeaderComp />
    <BreadCrumb />
    <SearchPage />
    <TeratasComp />
    <AccessoriesTwo />
    <FooterComp />
  </div>
</template>

<script>
// import Component
import HeaderComp from "@/components/HeaderComp.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import SearchPage from "@/components/SearchPage.vue";
import TeratasComp from "@/components/TeratasComp.vue";
import AccessoriesTwo from "@/components/AccessoriesTwo.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "ListProduct",
  // Regist Component
  components: {
    HeaderComp,
    BreadCrumb,
    SearchPage,
    TeratasComp,
    AccessoriesTwo,
    FooterComp,
  },
};
</script>

<style>
</style>