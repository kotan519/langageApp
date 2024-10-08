import { useState } from "react";
import { Vocabulary } from "../../types/voca/VocaType"
import { Box, Flex, Text } from "@chakra-ui/react";
import { VocaCardButton } from "../../atoms/button/VocaCardButton";
import { useUpdateRate } from "../../../hooks/useUpdateRate";

type Props = {
    deckId: number;
    voca: Vocabulary;
    onClickUnderstandingButton: () => void;
}

export const VocaCard = (props: Props) => {
    const { deckId, voca, onClickUnderstandingButton } = props;
    const [ isFlipped, setIsFlipped ] = useState(true);
    const { UpdateRate } = useUpdateRate();

    const onFlipButton = () => {
        setIsFlipped(!isFlipped);
    }

    const onUnderstandingButton = (rate: number, vocaId: number) => {
        console.log(`Understanding rate updated: ${rate}% for word ID: ${vocaId} in deck ID: ${deckId}`); // デバッグ用
        setIsFlipped(!isFlipped);
        onClickUnderstandingButton();
        UpdateRate(rate, vocaId, deckId);
    }

    return (
        <Box
            w="550px"
            h="flex"
            bg="yellow.200"
            borderRadius="md"
            shadow="lg"
            p={3}
            textAlign="center"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
                {isFlipped ? (
                    <Box>
                        <Text p={8} fontSize="4xl" fontWeight="bold">{voca.entry}</Text>
                        <Flex justify="space-around" my={10}>
                            <VocaCardButton onClick={onFlipButton}>FLIP</VocaCardButton>
                        </Flex>
                    </Box>
                    
                ) : (
                    <Box p={5}>
                        <Text fontSize="2xl" fontWeight="bold">{voca.entry}</Text>
                        <Text mt={3} fontSize="lg">{voca.ipa}</Text>
                        <Text mt={3} fontSize="lg">{voca.meaning}</Text>
                        <Text mt={5} fontSize="lg">{voca.example_sentence}</Text>
                        <Flex mt={10}>
                            <VocaCardButton onClick={() => onUnderstandingButton(0, voca.id)}>0%</VocaCardButton>
                            <VocaCardButton onClick={() => onUnderstandingButton(25, voca.id)}>25%</VocaCardButton>
                            <VocaCardButton onClick={() => onUnderstandingButton(50, voca.id)}>50%</VocaCardButton>
                            <VocaCardButton onClick={() => onUnderstandingButton(75, voca.id)}>75%</VocaCardButton>
                            <VocaCardButton onClick={() => onUnderstandingButton(100, voca.id)}>100%</VocaCardButton>
                        </Flex>
                    </Box>
                    
                )}
        </Box>
    )
}