import { useState } from 'react';

export default function useChange(initialValue = '0') {
  const [inputText, setInputText] = useState(initialValue);

  return { inputText, setInputText };
}
