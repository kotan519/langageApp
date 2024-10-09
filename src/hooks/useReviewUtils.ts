export const useReviewUtils = () => {

    // 理解率に応じて次のレビュー日を計算する関数を作成。
    const calculateNextReviewDate = (understandingRate: number, lastReviewed: string | undefined): string => {
        const today = new Date().toISOString().split('T')[0]; // 今日の日付を YYYY-MM-DD形式で取得
        let nextReviewDate = lastReviewed ? new Date(lastReviewed) : new Date(today);

        switch (understandingRate) {
            case 0:
                nextReviewDate.setDate(nextReviewDate.getDate() + 1); // 理解率0の場合は翌日に出題
                break;
            case 25:
                nextReviewDate.setDate(nextReviewDate.getDate() + 3); // 理解率25の場合は3日後
                break;
            case 50:
                nextReviewDate.setDate(nextReviewDate.getDate() + 7); // 理解率50の場合は7日後
                break;
            case 75:
                nextReviewDate.setDate(nextReviewDate.getDate() + 14); // 理解率75の場合は14日後
                break;
            case 100:
                nextReviewDate.setDate(nextReviewDate.getDate() + 30); // 理解率100の場合は30日後
                break;
            default:
                break;
        }

        return nextReviewDate.toISOString().split('T')[0]; // ISO形式からYYYY-MM-DD形式で返す
    };






    return { calculateNextReviewDate };
}