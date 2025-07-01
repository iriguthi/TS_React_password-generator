// import { useState } from "react";

interface Props {
  setOption: React.Dispatch<React.SetStateAction<any>>;
  options: {
    bigLetters: boolean;
    smlLetters: boolean;
    number: boolean;
    symbol: boolean;
  }
}

export const CheckBox: React.FC<Props> = ({
  setOption, options
}) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;

    setOption((prev: any) => ({
      ...prev,
      [name]: checked
    }))
  };

  return (
    <>
      <div className="Check_Container">
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
      </div>
    </>
  )
}