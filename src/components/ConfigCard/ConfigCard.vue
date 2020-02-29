<template>
  <div class="pt-5 pb-5">
    <div class="container col-7">
      <div class="pad-15-hor pad-15-ver pb-2 search-parent">
        <div class="col 6 ml-auto text-uppercase font-weight-bold text-center"> 
          <h2> Configure Card </h2> 
        </div>
        <div class="d-flex mt-5 mb-2">
          <b-form-input
            v-model="search"
            type="text"
            placeholder="Search ..."
          ></b-form-input> 
           <font-awesome-icon icon="search" class="icons ml-4 mt-2" />
        </div>
      </div>
      <div class="pb-2">
        <div class="card-body background d-flex mb-2 h-100" v-for="(use, index) in filteredList()" :key="index">
          <div class="image">
            <img class="image" :src="require(`../../assets/${use.img}`)" />
          </div>
          <div class="ml-3">
            <h2 class="title"> {{ use.title }} </h2>
            <p class="date"> {{ use.dates }}
              <span> {{ use.location }} </span>
            </p>
          </div>
          <div class="text-uppercase ml-2">
            <b-button @click="SelectedUses(use, index)" class="btn text-black mt-2 text-uppercase font-weight-bold">Select </b-button> 
            <b-button class="btn text-black mt-2 text-uppercase font-weight-bold">More info</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped src="./ConfigCard.css">
</style>

<script>
  module.exports = require("./ConfigCard.js");
</script> 