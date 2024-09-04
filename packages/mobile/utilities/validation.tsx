import { InputBlurProps } from "../types/atoms";

export const AppInputBlur = (text: string, onChangeText: (input: string) => void, noDecimals = false): InputBlurProps | undefined => {
  let inputVal = text;

  if (inputVal === '' || inputVal === undefined) {
    return; // Ensure it returns undefined explicitly
  }

  const decimalPos = inputVal.indexOf('.');
  const leftSide = inputVal.substring(0, decimalPos);
  let rightSide = inputVal.substring(decimalPos);

  if (noDecimals) {
    return { text: inputVal, noDecimals, onChangeText }; // Adjusted to return InputBlurProps
  }

  if (decimalPos >= 0) {
    rightSide += '00';
    rightSide = rightSide.substring(0, 3);
    inputVal = `${leftSide}.${rightSide}`;
  } else {
    inputVal += '.00';
  }

  onChangeText?.(inputVal);

  // Return a valid InputBlurProps object as per function type definition
  return { text: inputVal, noDecimals, onChangeText };
};
