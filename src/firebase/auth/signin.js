import { FirebaseApp, db } from "@/config";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(FirebaseApp);

export default async function signIn(email, password) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    error = e;
  }

  return { result, error };
}
