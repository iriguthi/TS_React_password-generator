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
        <h1>パスワードジェネレータ</h1>
        <dl>
          <dt>文字</dt>
          <dd className='Check_Container'>
            {checkBox(setOption, options)}
          </dd>
        </dl>
        <dl>
          <dt>文字数(8～16)</dt>
          {inputDigits(setDigit)}
        </dl>
        <dl>
          <button onClick={() => handleGenerate(setPassword, digit, options)}>生成</button>
          <dt>生成パスワード</dt>
          <pre className='Generate_Container'>
            {password || "ここに表示"}
          </pre>
        </dl>
      </div>
    </>
  )
}

export default App
