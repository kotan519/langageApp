import { useState } from "react";
import { Vocabulary } from "../../types/voca/VocaType"
import { Box, Button, Flex, Spacer, Text } from "@chakra-ui/react";

type Props = {
    voca: Vocabulary;
    onClick: () => void;
}

export const VocaCard = (props: Props) => {
    const { voca, onClick } = props;
    const [ isFlipped, setIsFripped ] = useState(true);

    const onUnderstandingButton = () => {
        setIsFripped(!isFlipped);
    }

    return (
        <Box
            w="500px"
            h="200px"
            bg="yellow.200"
            borderRadius="md"
            shadow="lg"
            p={4}
            _hover={{ cursor: "pointer", opacity: 0.9 }}
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
                {isFlipped ? (
                    <Box>
                    <Text p={8} fontSize="lg" fontWeight="bold">{voca.entry}</Text>
                    <Flex justify="space-around" mt={4}>
                        <Button onClick={onUnderstandingButton}>意味へ</Button>
                    </Flex>
                    </Box>
                    
                ) : (
                    <Box>
                        <Text p={8} fontSize="lg" fontWeight="bold">{voca.meaning}</Text>
                    <Flex>
                        <Button mx={1} w="90px" onClick={() => {onClick(); onUnderstandingButton()}}>0%</Button>
                        <Spacer />
                        <Button mx={1} w="90px" onClick={() => {onClick(); onUnderstandingButton()}}>25%</Button>
                        <Spacer />
                        <Button mx={1} w="90px" onClick={() => {onClick(); onUnderstandingButton()}}>50%</Button>
                        <Spacer />
                        <Button mx={1} w="90px" onClick={() => {onClick(); onUnderstandingButton()}}>75%</Button>
                        <Spacer />
                        <Button mx={1} w="90px" onClick={() => {onClick(); onUnderstandingButton()}}>100%</Button>
                        <Spacer />
                    </Flex>
                    </Box>
                    
                )}
        </Box>
    )
}