import { useState } from 'react'
import './App.css'
import { PassCreate } from './logic/selectorLogic';

function App() {
  const [password, setPassword] = useState("");

  // ボタン処理
  function handleGenerate() {
    const newPass = PassCreate(12);
    setPassword(newPass);
  }

  return (
    <>
      <div className= "Select_Container">
        <dl>
          <dt>文字</dt>
          <dd>
            <div className='check_wrap'>
              <input type='checkbox' id='bigLetters'></input>
              <label>英字(大文字)</label>
            </div>
            <div className='check_wrap'>
              <input type='checkbox' id='smlLetters'></input>
              <label>英字(小文字)</label>
            </div>
            <div className='check_wrap'>
              <input type='checkbox' id='numbers'></input>
              <label>数字</label>
            </div>
            <div className='check_wrap'>
              <input type='checkbox' id='symbol'></input>
              <label>記号</label>
            </div>
          </dd>
        </dl>
        <dl>
          <dt>文字数</dt>
          <input id='digits'></input>
        </dl>
        <dl>
          <button onClick={handleGenerate}>生成</button>
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
