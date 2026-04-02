import React, { useState } from 'react'
import { ChoiceColor } from './Choice_Colors/ChoiceColor'
import './Daily_Form.css'
import { useNavigate } from 'react-router-dom'
import { addDaily } from '../../../application/dailyService'

export const Daily_Form = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [selectColor, setSelectColor] = useState('')
  const [memo, setMemo] = useState('')
  const [file,setFile] = useState<File | null>(null)
  const[preview,setPreview]=useState<string|null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
        try {
      await addDaily(title,selectColor,memo,file)
      navigate('/home')
    } catch (error) {
      console.error(error)
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null
            setFile(selectedFile)
            // プレビューの生成
          if(selectedFile){
            const previewUrl=URL.createObjectURL(selectedFile)
            setPreview(previewUrl)
          } else {
            setPreview(null)
          }}

  return (
    <form onSubmit={handleSubmit}>
      <div className="DailyForm">
        <div className="todayTitle">
          <h2>今日は</h2>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="(例) 楽しかった、疲れた"
          />
          <h2>日</h2>
        </div>
        <div className="todayColor">
          <h3 className="todayColorTitle">今日のいろ</h3>
          <div className="colors">
            <ChoiceColor
              selectColor={selectColor}
              setSelectColor={setSelectColor}
            />
          </div>
        </div>
        <div className="todayMemo">
          <h3 className="todayMemoTitle">今日のこと</h3>
          <textarea
            id="memo"
            name="memo"
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            placeholder="今日の出来事や感想を書いてみましょう"
          />
        </div>
        <div className="todayImage">
          <h3 className="todayImageTitle">今日の写真</h3>
          <label htmlFor="fileInput" className="fileInputLabel">写真を選択</label>
          <input id="fileInput" type="file" accept="image/*" onChange={handleFileChange} style={{ display: 'none' }} />
          {preview && (
            <div className="imagePreview">
              <img src={preview} alt="Preview" />
            </div>
          )}
        </div>
        <div className="submitButton">
          <button type="submit">投稿する</button>
        </div>
      </div>
    </form>
  )
}
