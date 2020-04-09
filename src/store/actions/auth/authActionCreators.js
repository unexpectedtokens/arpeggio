import { signout, authenticate, setProfile } from "./authActions"

export const signoutCreator = () => {
  return { type: signout }
}
export const authCreator = user => {
  return { type: authenticate, payload: user }
}
export const setProfileCreator = profile => {
  return { type: setProfile, payload: profile }
}
