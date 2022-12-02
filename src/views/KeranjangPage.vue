<template>
  <div id="KeranjangPage">
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
    <div class="container">
      <div class="row">
        <div class="col">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Nama</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Harga</th>
                <th scope="col">Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <img class="img-table" src="../assets/t490s.png" alt="" />
                </th>
                <td>Lenovo Thinkpad t490s</td>
                <td>1</td>
                <td>Rp. 21.000.000</td>
                <td>
                  <b href="#" class="btn btn-danger"
                    ><i class="fa-solid fa-trash-can"></i> Hapus</b
                  >
                </td>
              </tr>
            </tbody>
          </table>
          <div class="row justify-content-end">
            <div class="col-lg-2">
              <h1>Total Harga:</h1>
            </div>
            <div class="col-lg-2 text-end">
              <h2>Rp. 21.000.000</h2>
              <div class="btn btn-success">
                Checkout <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
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
  name: "KeranjangPage",
  // regist component
  components: {
    HeaderPage,
  },
};
</script>

<style>
#KeranjangPage .breadcrumb-back {
  margin-top: 91px;
  margin-bottom: 20px;
}

#KeranjangPage .breadcrumb-back a {
  text-decoration: none;
  font-size: 20px;
  color: #ff3d47;
}

#KeranjangPage .breadcrumb-back b {
  color: black;
}

#KeranjangPage .fa-circle-arrow-left {
  color: #ff3d47;
}

#KeranjangPage a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

#KeranjangPage .img-table {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

#KeranjangPage h1 {
  font-size: 15px;
  font-weight: bold;
}

#KeranjangPage h2 {
  font-size: 15px;
    font-weight: bold;
}

</style>