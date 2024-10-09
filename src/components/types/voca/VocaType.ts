export type Vocabulary = {
    id: number, 
    entry: string, 
    meaning: string, 
    ipa: string, 
    example_sentence: string,
    understanding_rate: number,
    lastReviewed: string | undefined,
    nextReview: string,
}