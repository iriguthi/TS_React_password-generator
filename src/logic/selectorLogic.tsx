import { bigLetters, smlLetters, numbers, symbol } from "../component/selector";

// パス生成
function PassCreate(
  digits: number,
  options: {
    bigLetters: boolean;
    smlLetters: boolean;
    number: boolean;
    symbol: boolean;
  },
) {
  const pass: string[] = [];
  const charSets: any[] = [];

  // オプション項目
  if(options.bigLetters) charSets.push(bigLetters);
  if(options.smlLetters) charSets.push(smlLetters);
  if(options.number) charSets.push(numbers);
  if(options.symbol) charSets.push(symbol);

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
  options: {
    bigLetters: boolean;
    smlLetters: boolean;
    number: boolean;
    symbol: boolean;
  },
) {
  if(digit < 8 || digit > 16) return setPassword('8～16文字で指定してください');

  const newPass = PassCreate(digit, options);
  setPassword(newPass);
}