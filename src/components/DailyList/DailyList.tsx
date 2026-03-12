import { DailyCard } from '../Daily_Card/DailyCard'

export const DailyList = () => {

    const testData = [
  {
    id: "1",
    title: "カフェ行った",
    memo: "今日はゆっくりできた ☕",
    color: "#FFD6A5",
    createdAt: "2026-03-12"
  },
  {
    id: "2",
    title: "散歩した",
    memo: "天気がよかった 🌿",
    color: "#CAFFBF",
    createdAt: "2026-03-11"
  }
]

    return (
        <div>
            <DailyCard />
        </div>
    )
}