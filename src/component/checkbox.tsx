// import { useState } from "react";

function checkBox(
  setOption: React.Dispatch<React.SetStateAction<{
    bigLetters: boolean;
    smlLetters: boolean;
    number: boolean;
    symbol: boolean;
    }>>,
  options: {
    bigLetters: boolean;
    smlLetters: boolean;
    number: boolean;
    symbol: boolean;
  }
) {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;

    setOption(prev => ({
      ...prev,
      [name]: checked
    }))
  };

  return (
    <>
      <div>
        <input
        type="checkbox"
        name="bigLetters"
        onChange={handleChange}
        checked={options.bigLetters}
        />
        <label>英字(大文字)</label>
      </div>
      <div>
        <input
        type="checkbox"
        name="smlLetters"
        onChange={handleChange}
        checked={options.smlLetters}
        />
        <label>英字(小文字)</label>
      </div>
      <div>
        <input
        type="checkbox"
        name="number"
        onChange={handleChange}
        checked={options.number}
        />
        <label>数字</label>
      </div>
      <div>
        <input
        type="checkbox"
        name="symbol"
        onChange={handleChange}
        checked={options.symbol}
        />
        <label>記号</label>
      </div>
    </>
  )
}

export default checkBox