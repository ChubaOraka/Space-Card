<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/">
          <font-awesome-icon icon="place-of-worship" class="orius" />Space Card
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarcontent"
          aria-controls="navbarcontent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarcontent text-center">
          <ul class="navbar-nav ml-auto mr-auto">
            <li class="nav-item">
              <router-link class="nav-link text-uppercase font-weight-bold" to="/config">Configure Card</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase font-weight-bold" to="#">Food & Drink</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link text-uppercase font-weight-bold" to="/products">Shop</router-link>
            </li>
            <li>
              <router-link class="nav-link text-uppercase font-weight-bold" to="/Contact">Contact</router-link>
            </li>
          </ul>
          <form class="form-inline">
            <font-awesome-icon icon="shopping-bag" class="icons" />
            <b-dropdown id="button" variant="transparent" class="btn btn-outline-transparent">
              <template slot="button-content">
                <font-awesome-icon class="icons" icon="sign-in-alt" />
              </template>
              <div v-if="!userAuthenticated">
                <b-dropdown-item class="dropdown">
                  <router-link to="/login" class="link">Login</router-link>
                </b-dropdown-item>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/register" class="link">Registration</router-link>
                </b-dropdown-item>
              </div>
              <div v-else>
                <b-dropdown-divider></b-dropdown-divider>
                <b-dropdown-item>
                  <router-link to="/profile" class="link">My Account</router-link>
                </b-dropdown-item>
              </div>
            </b-dropdown>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
module.exports = require("./Navbar.js");
</script>

<style scoped src="./Navbar.css">
</style>


