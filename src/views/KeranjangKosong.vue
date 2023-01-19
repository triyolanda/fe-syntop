<template>
  <div id="KeranjangKosong">
    <div class="container">
      <div class="row mb-10">
        <div class="col">
          <div class="form-group">
            <h2>History Parking</h2>
            <label for="History Parking"></label>
            <textarea name="" id="" rows="5" placeholder="Input"></textarea>
          </div>
        </div>
      </div>
      <div class="row mb-5">
        <div class="col-lg-4">
          <div class="form-group">
            <label for="History Parking"></label>
            <textarea name="" id="" rows="1" placeholder=""></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <h3>Mobil</h3>
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-1">
          <h1>Karyawan</h1>
          <div class="box">
            <div class="header-body">
              <p class="header">MOBIL1</p>
            </div>
          </div>
        </div>
        <div class="col">
          <h1>Tamu</h1>
          <div class="box">
            <div class="header-body">
              <p class="header">MOBIL2</p>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col">
          <h3>Motor</h3>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1>Karyawan</h1>
          <div class="box">
            <div class="header-body">
              <p class="header">MOTOR1</p>
            </div>
          </div>
        </div>
        <div class="col mb-7">
          <h1>Tamu</h1>
          <div class="box">
            <div class="header-body">
              <p class="header">MOTOR2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import component
export default {
  name: "KeranjangKosong",
  // regist component
  components: {},
};
</script>

<style>
#KeranjangKosong .form-group textarea {
  width: 100%;
  padding: 1rem 0.8rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
}

#KeranjangKosong p {
text-align: center;
font-size: 40px;
margin-top: 20px;
padding: 250px;
}

#KeranjangKosong .header {
  width: 200px;
  height: 300px;
}

#KeranjangKosong .box {
background: yellow;
}

#KeranjangKosong h1{
  text-align: center;
}

#KeranjangKosong h3{
font-weight: bold;
text-align: center;
padding: 5%;
font-size: 50px;
}
</style>