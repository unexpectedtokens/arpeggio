export default (userID, displayName) => {
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
