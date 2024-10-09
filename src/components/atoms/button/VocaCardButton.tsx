import { Button } from "@chakra-ui/react"
import { FC, memo, ReactNode } from "react"

type Props = {
    children: ReactNode;
    onClick: () => void;
}

export const VocaCardButton: FC<Props> = memo((props) => {
    const { children, onClick } = props;
    return (
        <Button mx={1} w="90px" bg="teal.400" color="white" onClick={onClick}>{children}</Button>    
    )
})