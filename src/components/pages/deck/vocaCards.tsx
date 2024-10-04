import { useParams } from "react-router-dom";
import { DeckData } from "../../data/DeckData";

export const VocaCards = () => {
    const { id } = useParams<{ id: string }>();
    const deck = DeckData.find(deck => deck.deckId === Number(id));

    if(!deck.words){
        return <p>単語が見つかりません。</p>
    }

    return (
        <div>
            <h2>デッキ {deck.deckId} の単語リスト</h2>
            <ul>
                {deck.words.map((word) => (
                <li key={word.id}>
                    {word.term}: {word.definition}
                </li>
                ))}
            </ul>
        </div>
    )
}