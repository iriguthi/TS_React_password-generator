// import { useState } from 'react'
import './App.css'

function App() {

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
          <input></input>
        </dl>

        <dl>
          <dt>生成パスワード</dt>
          {/* 生成されたパスワードを出力 */}
        </dl>
      </div>
    </>
  )
}

export default App
