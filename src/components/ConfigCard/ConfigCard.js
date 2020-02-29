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
    SelectedUses(use, index) {
      this.$router.push({ 
        name: "SelectedUses", 
        params: { title: use.title, index: index}
      });
    }
  }
});