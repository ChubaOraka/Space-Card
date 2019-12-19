import Vue from "vue";
import firebase from "firebase";
import UserProfileDetails from "../../components/UserProfileDetails/UserProfileDetails.vue";
import Settings from "../../components/Settings/Settings.vue";
import { deleteUserAccount } from "../../firebase.js"
export default Vue.extend({
  name: "Profile",
  components: {
    UserProfileDetails,
    Settings
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      .then(() => {
        this.$router.replace("login")
      })
      .catch(err => console.log(err));
    },
    async deleteAccount() {
      if(confirm("Are you sure?")) {
        await deleteUserAccount();
      } else {

      }
    },
  }
});