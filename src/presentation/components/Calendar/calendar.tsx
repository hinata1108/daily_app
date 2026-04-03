import { fetchDailies } from '../../../application/dailyService'
import { useEffect, useState,useMemo } from 'react'
import { CalendarGrid } from './calendarGrid'
import { CalendarAnime } from './calendarAnime'
import { CalendarModal } from './calendarModal'
import type { Daily } from '../../../types/daily'
import { getJSTDate } from '../../../constant/getJSTDate'
import './calendar.css'


export const Calendar = () => {
    const [dailies, setDailies] = useState<Daily[]>([])
    const [currentDate, setCurrentDate] = useState(getJSTDate())
    const [direction , setDirection] = useState<"left" | "right" | "">("")
    const [selectedDaily, setSelectedDaily] = useState<Daily | null>(null)
    const year= Number(currentDate.split("-")[0]);
    const month = Number(parseInt(currentDate.split("-")[1]) - 1);
    //データ取得
        useEffect(() => {
    const getData= async() => {try {
        const data=await fetchDailies()
        setDailies(data)
    } catch (error) {
        console.error(error)
    }}
    getData()
},[])
//カレンダーの日にち配列
    const calendarDays=useMemo(()=>{
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
// 空配列だから型定義する
    const days: (number|null)[]=[];
    for(let i=0; i<firstDay; i++){
        days.push(null);
    }
    for(let i=1; i<=daysInMonth; i++){
        days.push(i);
    }
    while(days.length < 42){
        days.push(null);
    }
    return days;
    },[currentDate]);

    const getDateString = (day:number) => {
    return `${year}-${String(month+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`
}

//月移動
    const handleMoveMonth = (offset:number)=> {
    setDirection(offset>0? "right":"left")
    const newMonth = new Date(year, month + offset, 1);
    const newJSTDate = new Date(newMonth.getTime() +9 *60*60*1000).toISOString().split("T")[0]
    setCurrentDate(newJSTDate.toString().split("T")[0])
    setTimeout(() => {setDirection("")},300);};
// 日記データ取得
    const getDaily =(day:number)=>{
        if (!day) return null;
        return dailies.find(daily => daily.date === getDateString(day))|| null;
    }
// 推したらモーダル表示
    const handleDayClick = (day:number|null) => {
    if(!day) return ;
    const daily = getDaily(day);
    if (daily) {
        setSelectedDaily(daily);
    }
};




    return (
        <div className="Calendar">
            <h1>{year}年{month+1}月</h1>
            <div className="calendarHeader">
                <button onClick={()=>(handleMoveMonth(-1))}>&lt;</button>
                <button onClick={()=>(handleMoveMonth(1))}>&gt;</button>
            </div>
            <CalendarAnime direction={direction}>
                <CalendarGrid calendarDays={calendarDays} getDaily={getDaily} dayClick={handleDayClick} />
            </CalendarAnime>
                            {selectedDaily &&<CalendarModal daily={selectedDaily} onClose={()=>setSelectedDaily(null)}/>}
        </div>
    );
};