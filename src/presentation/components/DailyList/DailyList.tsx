import { DailyCard } from '../Daily_Card/DailyCard'
import './DailyList.css'
import { fetchDailies } from '../../../application/dailyService'
import { useEffect, useState } from 'react'
import type { Daily } from '../../../types/daily'

export const DailyList = () => {
  const [dailies, setDailies] = useState<Daily[]>([])
  useEffect(() => {
  const getData= async() => {try {
    const data=await fetchDailies()
    setDailies(data)
  } catch (error) {
    console.error(error)
  }}
  getData()
},[])
  

  return (
    <div className="DailyList">
      {dailies.map((daily) => (
        <DailyCard key={daily.id} daily={daily} />
      ))}
    </div>
  )
}
