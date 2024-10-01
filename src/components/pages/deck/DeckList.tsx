import { FC, memo } from "react"
import { DeckCard } from "../../layout/DeckCard."
import { Wrap, WrapItem } from "@chakra-ui/react"
import { DeckData } from "../../data/DeckData"

export const DeckList: FC = memo(() => {
    return (
        <Wrap p={{ base: 4, md: 10 }}>
                {DeckData.map((deck) => (
                    <WrapItem key={deck.id} mx="auto">
                        <DeckCard id={deck.id} title={deck.title} introduction={deck.introduction} percentage={deck.percentage}/>
                      </WrapItem>
            ))}
        </Wrap>
    )
})