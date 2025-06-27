import { bigLetters, smlLetters, numbers, symbol } from "../component/selector";

const charSets = [bigLetters, smlLetters, numbers, symbol];

// パス生成
function PassCreate(
  digits: number
) {
  const pass: string[] = [];

  for (let i = 0; i < digits; i++) {
    const setIndex = Math.floor(Math.random() * charSets.length);
    const charSet = charSets[setIndex];
    const charIndex = Math.floor(Math.random() * charSet.length);
    pass.push(String(charSet[charIndex]));
  }

  return pass.join('');
}

// パスワード生成ボタン
export function handleGenerate(
  setPassword: React.Dispatch<React.SetStateAction<string>>,
  digit: number,
) {
  const newPass = PassCreate(digit);
  setPassword(newPass);
}