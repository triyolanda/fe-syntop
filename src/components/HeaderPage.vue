<template>
  <div id="HeaderPage">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img class="logo" src="../assets/logosyntop.png" alt="logosyntop"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <a class="nav-link active text" aria-current="page" href="#">Home</a>
            <a class="nav-link text" href="#">Laptop & Accessories</a>
            <a class="nav-link" href="#"
              ><div class="btn btn-outline-danger"> Kembali</div></a
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "HeaderPage",
};
</script>


<style>
</style>