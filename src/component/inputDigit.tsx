// import { useState } from "react";

function inputDigits(
  setDigit: React.Dispatch<React.SetStateAction<number>>,
) {

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

export default inputDigits