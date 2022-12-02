<template>
  <div id="CheckoutPage">
    <HeaderPage />
    <div class="Breadcrumb-back">
      <div class="container">
        <div class="row">
          <div class="col">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#"
                  ><i class=""></i><i class=""></i
                  ><i class="fa-solid fa-circle-arrow-left"></i> Checkout</a
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col">
        <h1>Barang yang dibeli</h1>
      </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-lg-1">
        <div class="card" style="width: 100%">
          <img src="../assets/t490s.png" class="card-img-top" alt="..." />
        </div>
      </div>
      <div class="col-lg-6">
        <h1>Lenovo Thinkpad T490s</h1>
        <p>Harga: <span>Rp. 21.000.000</span></p>
        <b>Spesifikasi</b>
        <div class="bg-deskripsi">
          <h6>
            Processor Up to 8th Gen Intel® Core™ i5/i7 vPro™ Operating System
            Windows 10 Pro 14" Antiglare Display FHD IPS (1920 x 1080, 250 nit)
            FHD IPS touchscreen (1920 x 1080, 300 nit) FHD IPS low power (1920 x
            1080, 400 nit) FHD IPS Privacy Guard (1920 x 1080, 400 nit) Memory
            Up to 32GB Battery Up to 20 hours* 57Wh, Rapid Charge technology
            available with 65W AC
          </h6>
        </div>
        <div class="row mt-6">
          <div class="col-lg-6">
            <input type="number" min="1" placeholder="1" />
          </div>
        </div>
        <div class="row">
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Tulis catatan untuk barang ini....."
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import component
import HeaderPage from "@/components/HeaderPage.vue";
export default {
  name: "CheckoutPage",
  // regist component
  components: {
    HeaderPage,
  },
};
</script>

<style>
</style>