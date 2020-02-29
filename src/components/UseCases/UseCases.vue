<template>
  <div class="mt-5 pb-4">
    <div class="container">
      <h2 class="text-center mb-3 font-weight-bold text-black">Use Cases</h2>
      <p>The Space Card is a special payment card that allows the seamless formation of joint accounts and encourages trust building by giving control of the spending to consumers and enabling transparent transactions.</p>
      <div id="slideshow">
        <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
          <div
            class="slide"
            v-for="(show, index) in allAvailableShowsData"
            :key="index"
            :class="`slide--${index}`"
          >
            <img :src="require(`../../assets/${show.img}`)" />
          </div>
        </agile>
        <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
          <div
            class="slide slide--thumbniail"
            v-for="(show, index) in allAvailableShowsData"
            :key="index"
            :class="`slide--${index}`"
            @click="$refs.thumbnails.goTo(index)"
          >
            <img :src="require(`../../assets/${show.img}`)" />
          </div>
          <template slot="prevButton">
            <i class="fas fa-chevron-left"></i>
          </template>
          <template slot="nextButton">
            <i class="fas fa-chevron-right"></i>
          </template>
        </agile>
      </div>
    </div>
  </div>
</template>

<style scoped src="./UseCases.css">
</style>

<script>
module.exports = require("./UseCases.js");
</script>


