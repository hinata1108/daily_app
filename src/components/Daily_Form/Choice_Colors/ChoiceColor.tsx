import { colors } from '../../../constant/colors'
import './ChoiceColor.css'

type Props = {
  selectColor: string
  setSelectColor: (color: string) => void
}

export const ChoiceColor = ({ selectColor, setSelectColor }: Props) => {
  return (
    <div className="ChoiceColor">
      {colors.map((color) => (
        <button
          type="button"
          key={color}
          className={`color ${selectColor === color ? 'selected' : ''} ${selectColor && selectColor !== color ? 'notSelected' : ''}`}
          onClick={() => setSelectColor(color)}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}
