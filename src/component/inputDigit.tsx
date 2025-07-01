// import { useState } from "react";
interface Props {
  setDigit: React.Dispatch<React.SetStateAction<number>>
}

export const InputDigits: React.FC<Props> = ({setDigit}
) => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setDigit(value);
  };

  return (
    <>
      <input
        type="number"
        onChange={handleChange}
      />
    </>
  );
}