import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useMessage } from "./useMessage";
import { auth } from "../firebaseConfig";
import { useHistory } from "react-router-dom";

// ログイン関数
export const useLoginUser = () => {
  const { showMessage } = useMessage();
  const history = useHistory();

  const loginUser = async (email: string, password: string): Promise<UserCredential | void> => {
    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      showMessage({title: "ログイン成功！", status: "success"});
      history.push("/home");
      return userCredential;
    } catch (error: any) {
      console.error("Error logging in user:", error.message);
      showMessage({title: "ログイン失敗！", status: "error"});
    }
  }
  return { loginUser };
};