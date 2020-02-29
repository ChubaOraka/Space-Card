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
          label: "Not spending at the moment",
          value: "0"
        },
        {
          label: "Thrifty, aren't we?",
          value: "1"
        },
        {
          label: "This is half your available funds",
          value: "2"
        },
        {
          label: "Significant amount put up for spending",
          value: "3"
        },
        {
          label: "Allocating all available funds!",
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