import { FC, memo } from "react"
import { Wrap, WrapItem } from "@chakra-ui/react"
import { DeckData } from "../../data/DeckData"
import { useNavigate } from "react-router-dom"
import { DeckCard } from "../../layout/DeckCard"

export const DeckList: FC = memo(() => {
    const navigate = useNavigate();

    const onClickDeck = (id: number) => {
        navigate(`/decks/${id}`)
    }

    return (
        <Wrap p={{ base: 4, md: 10 }}>
                {DeckData.map((deck) => (
                    <WrapItem key={deck.deckId} mx="auto">
                        <DeckCard id={deck.deckId} title={deck.title} introduction={deck.introduction} percentage={deck.percentage} onClick={onClickDeck}/>
                      </WrapItem>
            ))}
        </Wrap>
    )
})