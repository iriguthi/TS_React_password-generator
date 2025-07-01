import { useState } from 'react'
import './App.css'
import { handleGenerate } from './logic/selectorLogic';
import {InputDigits} from './component/inputDigit';
import {CheckBox} from './component/checkbox';

function App() {
  const [password, setPassword] = useState("");
  const [digit, setDigit] = useState<number>(0);
  const [options, setOption] = useState({
    bigLetters: true,
    smlLetters: true,
    number: true,
    symbol: false,
  })

  return (
    <>
      <h1>パスワードジェネレータ</h1>
      <div className= "Select_Container">
        <div>
          <p>文字</p>
          <CheckBox setOption={setOption} options={options} />
        </div>
        <div>
          <p>文字数(8～16)</p>
          <InputDigits setDigit={setDigit} />
        </div>
      </div>
      <div>
        <button onClick={() => handleGenerate(setPassword, digit, options)}>生成</button>
        <p>生成パスワード</p>
        <pre className='Generate_Container'>
          {password || "ここに表示"}
        </pre>
      </div>
    </>
  )
}

export default App
