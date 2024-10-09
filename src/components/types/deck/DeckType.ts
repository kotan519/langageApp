import { Vocabulary } from "../voca/VocaType";

export type Deck = {
    deckId: number;
    title: string;
    introduction: string;
    percentage: number;
    words: Vocabulary[]; // Vocabulary型の配列
}