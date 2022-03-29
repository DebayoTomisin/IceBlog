import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseApp from "../firebase/firebaseInit";

const db = firebaseApp.firestore();

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "May 31, 2021"
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "May 31, 2021"
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "May 31, 2021"
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "May 31, 2021"
      }
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null,
    isAdmin: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
    },
    updateUser(state, payload) {
      state.user = payload;
    },
    setProfileInfo(state, payload) {
      state.profileId = payload.id;
      state.profileEmail = payload.data().email;
      state.profileFirstName = payload.data().firstName;
      state.profileLastName = payload.data().lastName;
      state.profileUserName = payload.data().username;
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") +
        state.profileLastName.match(/(\b\S)?/g).join("");
    },
    changeFirstName(state, payload) {
      state.profileFirstName = payload;
    },
    changeLastName(state, payload) {
      state.profileLastName = payload;
    },
    changeUsername(state, payload) {
      state.profileUserName = payload;
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      const database = await db
        .collection("users")
        .doc(firebase.auth().currentUser.uid);
      const dbresults = await database.get();
      commit("setProfileInfo", dbresults);
      commit("setProfileInitials");
    },

    async updateUserSettings({ commit, state }) {
      const database = await db.collection("users").doc(state.profileId);
      await database.update({
        firstName: state.profileFirstName,
        lastName: state.profileLastName,
        username: state.profileUserName
      });
      commit("setProfileInitials");
    },

    async setAdmin({ state }) {
      state.isAdmin = true;
    }
  },
  modules: {}
});
