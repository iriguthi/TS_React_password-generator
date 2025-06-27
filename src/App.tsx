import { useState } from 'react'
import './App.css'
import { handleGenerate } from './logic/selectorLogic';
import inputDigits from './component/inputDigit';
import checkBox from './component/checkbox';

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
      <div className= "Select_Container">
        <dl>
          <dt>文字</dt>
          <dd className='check_Container'>
            {checkBox(setOption, options)}
          </dd>
        </dl>
        <dl>
          <dt>文字数</dt>
          {inputDigits(setDigit)}
        </dl>
        <dl>
          <button onClick={() => handleGenerate(setPassword, digit, options)}>生成</button>
          <dt>生成パスワード</dt>
          <pre style={{ fontSize: "1.5rem", background: "#eee", padding: "1rem" }}>
            {password || "ここの表示"}
          </pre>
        </dl>
      </div>
    </>
  )
}

export default App
