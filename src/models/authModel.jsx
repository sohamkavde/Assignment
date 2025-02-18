
import { listenToAuthChanges } from "../firebase";

export const authListener = (callback) => {
  return listenToAuthChanges(callback);
};
