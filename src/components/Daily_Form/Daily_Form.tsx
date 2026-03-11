import React, { useState } from "react";
import { ChoiceColor } from "./Choice_Colors/ChoiceColor";
import './Daily_Form.css'


export const Daily_Form = () => {
    const [title, setTitle] = useState("")
    const [selectColor, setSelectColor] = useState("")
    const [memo, setMemo] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title, selectColor, memo)
    }

    return (
            <form onSubmit={handleSubmit}>
             <div className="DailyForm">
                <div className="todayTitle">
                    <h2>今日は</h2>
                    <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="(例) 楽しかった、疲れた" />
                    <h2>日</h2>
                </div>
                <div className="todayColor">
                    <h3 className="todayColorTitle">今日のいろ</h3>
                    <div className="colors">  
                        <ChoiceColor selectColor={selectColor} setSelectColor={setSelectColor} />
                    </div>
                </div>
                <div className="todayMemo">
                        <h3 className="todayMemoTitle">今日のこと</h3>
                        <textarea id="memo" name="memo" value={memo} onChange={(e) => setMemo(e.target.value)} placeholder="今日の出来事や感想を書いてみましょう" />
                </div>
                <div className="submitButton">
                    <button type="submit">投稿する</button>
                </div>
            </div>
            </form>   
        
    )
}