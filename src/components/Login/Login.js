import Vue from "vue";
import firebase from "firebase";
import LoginSocialMedia from "../LoginSocialMedia/LoginSocialMedia.vue";

export default {
  name: "Login",
  components: {
    LoginSocialMedia
  },
  data () {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(user => { 
        this.$router.push(this.$route.query.redirect || '/profile')
      })
      .catch(err => console.log(err));
    },
    socialLoginIn() {
      const provider = new firebase.auth.GoogleAuthProvider();

      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        this.$router.push(this.$route.query.redirect || '/profile')
      })
      .catch(err => console.log(err));
    }
  }
}