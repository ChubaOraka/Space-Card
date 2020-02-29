import Vue from "vue";
import allShowsDataJSON from "../../common/currentShowData.json";

export default Vue.extend({
  name: "ConfigCard",
  data() {
    return {
      search: "",
      allAvailableShowsData: allShowsDataJSON.availableShowsList
    }
  },
  methods: {
    filteredList() {
      return this.allAvailableShowsData.filter(show => {
        return show.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    SelectedUses(show, index) {
      this.$router.push({ 
        name: "SelectedUses", 
        params: { title: show.title, index: index}
      });
    }
  }
});