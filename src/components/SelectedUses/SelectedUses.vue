<template>
  <div>
    <div v-for="show in allAvailableShows" :key="show.id">
      <div v-if="showName == show.title">
        <div
          class="selected-show-img"
          :style="{ backgroundImage: 'url('+require('../../assets/'+show.img)+')'}"
        ></div>
        <div class="container bg-white layover">
          <div>
            <h1 class="bg-white pt-4 pb-3 padding text-uppercase">{{ show.title }}</h1>
            <h3 class="padding text-muted">{{ show.date }}</h3>
            <div class="padding">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libe
                <span
                  v-if="readMore"
                ></span>
                <span v-else>...</span>
                <span
                  v-show="readMore"
                >sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.</span>
              </p>
            </div>
            <div class="text-center">
              <button class="btn" @click="readMore =! readMore">
                <span v-if="readMore">Read Less</span>
                <span v-else>Read More</span>
              </button>
            </div>
          </div>
          
          <div class="container contact">
            <form>
              <p class="h4 text-center mb-4">Spending limits</p>
              <label for="defaultFormContactNameEx" class="grey-text">Amount</label>
              <input type="text" id="defaultFormContactNameEx" class="form-control" />
              <br />
              <label for="defaultFormContactEmailEx" class="grey-text">Budget</label>
              <custom-slider
                :values="sliderValues"
                min="0"
                max="100"
                raising
                v-model="slider"
              ></custom-slider>
              <!-- remember to set v-model -->
              {{ slider }}
              <br />
              <label for="defaultFormContactSubjectEx" class="grey-text">Location</label>
              <input type="text" id="defaultFormContactSubjectEx" class="form-control" />
              <br />
              <label for="defaultFormContactMessageEx" class="grey-text">Your message</label>
              <textarea type="text" id="defaultFormContactMessageEx" class="form-control" rows="3"></textarea>
              <div class="text-center mt-4">
                <button class="btn btn-outline-warning" type="submit">
                  Send
                  <i class="far fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
          
          <!-- <badger-accordion>
            <badger-accordion-item>
              <template slot="header">First Accordion Header</template>
              <template slot="content">First Accordion Content</template>
            </badger-accordion-item>

            <badger-accordion-item>
              <template slot="header">Second Accordion Header</template>
              <template slot="content">Second Accordion Content</template>
            </badger-accordion-item>
          </badger-accordion> -->
        </div>
      </div>
    </div>
    <TheatreNewsletter />
  </div>
</template>

<script>
module.exports = require("./SelectedUses.js");
</script>

<style scoped src="./SelectedUses.css">
</style>


