import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useMessage } from "./useMessage";
import { useNavigate } from "react-router-dom";

export const useLogout = () => {
    const { showMessage } = useMessage();
    const navigate = useNavigate();
    const logoutUser = async (): Promise<void> => {
        try {
            await signOut(auth);
            console.log("User logged out");
            showMessage({title: "ログアウトしました", status:"success"});
            navigate("/");
        }catch(error: any){
            console.error("Error logging out:", error.message);
            showMessage({title: "ログアウトに失敗しました", status:"error"});
        };
    };
    return { logoutUser };
}
