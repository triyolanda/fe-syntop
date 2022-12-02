<template>
  <div id="DetailContent">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-5">
          <div class="bg-detail">
            <div
              id="carouselExampleIndicators"
              class="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src="../assets/t490s.png"
                    class="d-block w-100 img-detail"
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="../assets/legion.png"
                    class="d-block w-100 img-detail"
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <i class="fa-solid fa-circle-arrow-left"></i>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <i class="fa-solid fa-circle-arrow-right"></i>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <h1>Lenovo Thinkpad T490s</h1>
          <p>Harga: <span>Rp. 21.000.000</span></p>
          <b>Spesifikasi</b>
          <div class="bg-deskripsi">
            <h6>
              Processor Up to 8th Gen Intel® Core™ i5/i7 vPro™ Operating System
              Windows 10 Pro 14" Antiglare Display FHD IPS (1920 x 1080, 250
              nit) FHD IPS touchscreen (1920 x 1080, 300 nit) FHD IPS low power
              (1920 x 1080, 400 nit) FHD IPS Privacy Guard (1920 x 1080, 400
              nit) Memory Up to 32GB Battery Up to 20 hours* 57Wh, Rapid Charge
              technology available with 65W AC
            </h6>
          </div>
          <div class="row mt-3">
            <div class="col-lg-6">
              <input type="number" min="1" placeholder="1" />
            </div>
            <div class="col-lg-6 text-end">
              <div class="btn btn-outline-danger">+ Keranjang</div>
              <div class="btn btn-danger">
                Pesan Sekarang <i class="fa-solid fa-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>