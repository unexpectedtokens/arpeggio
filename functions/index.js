const functions = require("firebase-functions")
const admin = require("firebase-admin")
admin.initializeApp()

const createUser = (userID, displayName) => {
  return {
    userid: userID,
    name: displayName,
    description: "",
    dateofbirth: new Date(),
    instruments: [],
    favouritebands: [],
    town: "",
  }
}

exports.createProfileOnUserCreate = functions.auth.user().onCreate(user => {
  admin
    .firestore()
    .collection("profiles")
    .doc(user.uid)
    .set(createUser(user.uid, user.displayName))
})
