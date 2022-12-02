<template>
  <div id="KeranjangKosong">
    <HeaderPage />
    <div class="Breadcrumb-back">
      <div class="container">
        <div class="row">
          <div class="col">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#"
                  ><i class=""></i><i class=""></i
                  ><i class="fa-solid fa-circle-arrow-left"></i> Keranjang</a
                >
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    \
    <div class="container">
      <div class="row">
        <div class="col">
          <img
            class="img-picture"
            src="../assets/keranjang_kosong.png"
            alt="..."
          />
        </div>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-lg-2">
        <h1>Keranjangmu Masih Kosong....</h1>
        <div class="btn btn-danger">Belanja</div>
      </div>
    </div>
    <div id="FooterComp">
      <div class="row text-center">
          <div class="col-lg-12">
              <div class="bg-footer p-2">
                  <h3>© Copyright Syntop Laptopindo, 2022</h3>
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
  name: "KeranjangKosong",
  // regist component
  components: {
    HeaderPage,
  },
};
</script>

<style>
#KeranjangKosong .breadcrumb-back {
  margin-top: 91px;
  margin-bottom: 20px;
}

#KeranjangKosong .breadcrumb-back a {
  text-decoration: none;
  font-size: 20px;
  color: #ff3d47;
}

#KeranjangKosong .fa-circle-arrow-left {
  color: #ff3d47;
}

#KeranjangKosong a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

#KeranjangKosong .img-picture {
  width: 300px;
  height: 300px;
  object-fit: contain;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#KeranjangKosong h1 {
  font-weight: bold;
  font-size: 10px;
  text-align: center;
}


</style>