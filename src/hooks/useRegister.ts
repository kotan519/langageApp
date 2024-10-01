import { createUserWithEmailAndPassword, UserCredential } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useMessage } from "./useMessage";
import { useHistory } from "react-router-dom";

export const useRegister = () => {
    const { showMessage } = useMessage();
    const history = useHistory();

    const registerUser = async (email: string, password: string): Promise<UserCredential | void> => {
        try {
            const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            console.log("User registered:", user);
            showMessage({title: "登録成功！", status: "success"});
            history.push("/home");
            return userCredential;
        } catch (error: any) {
            console.error("Error registering user:", error.message);
            showMessage({title: "登録失敗！", status: "error"});
        }
    };
    return { registerUser };
}