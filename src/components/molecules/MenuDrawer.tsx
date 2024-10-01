import { Button, Drawer, DrawerBody, DrawerContent, DrawerFooter, DrawerOverlay } from "@chakra-ui/react"
import { FC, memo } from "react"
import { useLogout } from "../../hooks/useLogout";

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickDecks: () => void;
    onClickUserData: () => void;

}

export const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickDecks, onClickUserData } = props;
    const { logoutUser } = useLogout();
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent p={3} bg="gray.100">
                    <DrawerBody p={0} >
                        <Button w="100%" onClick={onClickHome}>ホーム</Button>
                        <Button w="100%" onClick={onClickUserData}>ユーザー情報</Button>
                        <Button w="100%" onClick={onClickDecks}>デッキ</Button>
                    </DrawerBody>
                    <DrawerFooter p={0}>
                        
                        <Button color="red.500" w="100%" onClick={logoutUser}>ログアウト</Button>
                        <Button color="red.500" w="100%" onClick={onClose}>閉じる</Button>
                    </DrawerFooter>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})