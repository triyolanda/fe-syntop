<template>
  <div id="ProductDetails">
    <HeaderComp />
    <ProductComp />
    <DetailContent />
    <RekomendasiComp />
    <FooterComp />
  </div>
</template>

<script>
// import Component
import HeaderComp from "@/components/HeaderComp.vue";
import ProductComp from "@/components/ProductComp.vue";
import DetailContent from "@/components/DetailContent.vue";
import RekomendasiComp from "@/components/RekomendasiComp.vue";
import FooterComp from "@/components/FooterComp.vue";

export default {
  name: "ProductDetails",
  // Regist Component
  components: {
    HeaderComp,
    ProductComp,
    DetailContent,
    RekomendasiComp,
    FooterComp,
  },
};
</script>

<style>
</style>