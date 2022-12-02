<template>
  <div id="LandingPage">
      <!-- <h1>ini adalah halaman Landing Page</h1> -->
      <HeaderComp />
      <BannerComp />
      <KategoriComp />
      <SliderComp />
      <RekomendasiComp />
      <AccessoriesComp />
      <FooterComp />
  </div>
</template>


<script>
// import Component
import HeaderComp from "@/components/HeaderComp.vue";
import BannerComp from "@/components/BannerComp.vue";
import KategoriComp from "@/components/KategoriComp.vue";
import SliderComp from "@/components/SliderComp.vue";
import RekomendasiComp from "@/components/RekomendasiComp.vue";
import AccessoriesComp from "@/components/AccessoriesComp.vue";
import FooterComp from "@/components/FooterComp.vue";


export default {
    name: "LandingPage",
    // Regist Component
    components: {
      HeaderComp,
      BannerComp,
      KategoriComp,
      SliderComp,
      RekomendasiComp,
      AccessoriesComp,
      FooterComp,
    },
};
</script>

<style>

</style>