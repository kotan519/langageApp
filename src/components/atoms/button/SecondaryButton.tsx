import { Button } from "@chakra-ui/react"
import { FC, memo, ReactNode } from "react"

type Props = {
    children: ReactNode;
    disabled?: boolean;
    loading?: boolean;
    onClick: () => void;
}

export const SecondaryButton: FC<Props> = memo((props) => {
    const { children, disabled=false, loading=false, onClick } = props;
    return (
       <Button bg="yellow.300" color="black" _hover={{ opacity: "80%"}} isDisabled={disabled} isLoading={loading} onClick={onClick}>{children}</Button>
    )
})