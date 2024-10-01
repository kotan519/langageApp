import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react"
import { FC, memo, useCallback } from "react"
import { useNavigate } from "react-router-dom";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";


export const Header: FC = memo(() => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onClickHome = useCallback(() => navigate("/home"), [navigate]);
    const onClickUserData = useCallback(() => navigate("/home/userData"), [navigate]);
    const onClickDecks = useCallback(() => navigate("/home/decks"), [navigate]);

    return (
        <>
        <Flex 
            as="nav" 
            bg="teal.500" 
            color="gray.50" 
            align="center" 
            justify="space-between"
            padding={{ base: 3, md: 5 }}
        >   
            <Flex align="center" as="a" mr={8} _hover={{ cursor: "pointer" }} onClick={onClickHome}>
                <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
                単語練習
                </Heading>
            </Flex>
            
            <Flex align="center" fontSize="sm" flexGrow={2} display={{ base: "none", md: "flex"}} >
                <Box pr={4}>
                    <Link onClick={onClickUserData}>ユーザー情報</Link>
                    <Link onClick={onClickDecks}>デッキ</Link>
                </Box>
            </Flex>
            <MenuIconButton onOpen={onOpen} />
        </Flex>
        <MenuDrawer onClose={onClose} isOpen={isOpen} onClickHome={onClickHome} onClickDecks={onClickDecks} onClickUserData={onClickUserData}/>
        </>
    )
})