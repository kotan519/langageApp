import { useParams } from "react-router-dom";
import { DeckData } from "../../data/DeckData";
import { VocaCard } from "../../organisms/VocaCard/VocaCard";
import { useState } from "react";
import { Box, Center, Text } from "@chakra-ui/react";

export const VocaCards = () => {
    const [ currentWord, setCurrentWord ] = useState(0);
    const { id } = useParams<{ id: string }>();
    const deck = DeckData.find(deck => deck.deckId === Number(id));

    if(!deck.words){
        return <p>単語が見つかりません。</p>
    }

    

    const onClickUnderstandingButton = () => {
        setCurrentWord((prevIndex) =>
            prevIndex === deck.words.length - 1 ? 0 : prevIndex + 1
        );
    }

    return (
        <div>
            <Center>
                
                <Box>
                    <Text fontSize="3xl" fontWeight="bold" p={8} align="center">{deck.title}</Text>
                    <VocaCard deckId={deck.deckId} voca={deck.words[currentWord]} onClickUnderstandingButton={onClickUnderstandingButton}/>     
                </Box>
                
            </Center>
            
        </div>
    )
}