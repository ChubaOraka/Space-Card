import Vue from "vue";
import UseCases from "../../components/UseCases/UseCases.vue";
import TheatreNewsletter from "../../components/TheatreNewsletter/TheatreNewsletter.vue";

export default Vue.extend({
  name: "HomePage",
  components: {
    UseCases,
    TheatreNewsletter
  }
});