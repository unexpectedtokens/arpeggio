import { signout, authenticate } from "./authActions"

export const signoutCreator = () => {
  return { type: signout }
}
export const authCreator = () => {
  return { type: authenticate }
}
