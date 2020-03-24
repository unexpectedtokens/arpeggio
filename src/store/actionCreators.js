import { signout, authenticate } from "./actions"

export const signoutCreator = () => {
  return { type: signout }
}
export const authCreator = () => {
  return { type: authenticate }
}
