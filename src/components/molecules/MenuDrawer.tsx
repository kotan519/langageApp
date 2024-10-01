import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay } from "@chakra-ui/react"
import { FC, memo } from "react"

type Props = {
    onClose: () => void;
    isOpen: boolean;
    onClickHome: () => void;
    onClickDecks: () => void;
    onClickUserData: () => void;

}

export const MenuDrawer: FC<Props> = memo((props) => {
    const { onClose, isOpen, onClickHome, onClickDecks, onClickUserData } = props;
    return (
        <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p={0} bg="gray.100">
                        <Button w="100%" onClick={onClickHome}>ホーム</Button>
                        <Button w="100%" onClick={onClickUserData}>ユーザー情報</Button>
                        <Button w="100%" onClick={onClickDecks}>デッキ</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
})