import Vue from "vue";
import firebase from "firebase";
import allShowsDataJSON from "../../common/currentShowData.json";
import TheatreNewsletter from "../TheatreNewsletter/TheatreNewsletter.vue";
import CustomSlider from "vue-custom-range-slider";
import "vue-custom-range-slider/dist/vue-custom-range-slider.css";

export default Vue.extend({
  name: "SelectedUses",
  components: {
    TheatreNewsletter,
    CustomSlider
  },
  data() {
    return {
      slider: "0",
      sliderValues: [
        {
          label: "Not at all",
          value: "0"
        },
        {
          label: "A tiny bit",
          value: "1"
        },
        {
          label: "Its ok",
          value: "2"
        },
        {
          label: "Its very good",
          value: "3"
        },
        {
          label: "Its AMAZING!",
          value: "4"
        }
      ],
      showName: this.$route.params.title,
      allAvailableShows: allShowsDataJSON.availableShowsList,
      readMore: false
    }
  },
  methods: {
    buyTicketForSelectedUses(indx, show) {
      const currentUser = firebase.auth().currentUser;
      if(!currentUser) {
        // Incomplete: This stills need to query theatre/indx & show name
        this.$router.replace({path: "/login", query: { redirect: '/theatre'} });
      } else {
        this.$router.replace({path: "/theatre" , query: {indx, show} });
      }
    }
  }
});