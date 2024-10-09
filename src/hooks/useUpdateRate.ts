import { useState } from "react";
import { DeckData } from "../components/data/DeckData";

export const useUpdateRate = () => {
    const [deck, setDeck] = useState(DeckData);

    const UpdateRate = (rate: number, id: number, deckId: number) => {
        console.log(rate, id, deckId);
        setDeck((changeDeck) => 
            changeDeck.map((deck) => {
                if(deck.deckId === deckId) {
                    console.log("Found deck:", deck);
                    return {
                        ...deck,
                        words: deck.words.map((word) => {
                            if(word.id === id) {
                                console.log("Updating word:", word.understanding_rate);
                                return {
                                    ...word,
                                    understanding_rate: rate,
                                };
                                
                            }
                            return word;
                        }),
                    }
                }
                return deck;
            })
        )
    }

    return { UpdateRate };
}