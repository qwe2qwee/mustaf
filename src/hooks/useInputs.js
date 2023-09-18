import { useState, useCallback } from "react";

const UseInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  const ValueChangeHandler = useCallback((event) => {
    setEnteredValue(event.target.value);
  }, []);

  const inputBlurHandler = useCallback((event) => {
    setIsTouched(true);
  }, []);

  const reset = useCallback(() => {
    setEnteredValue("");
    setIsTouched(false);
  }, []);

  return {
    vlaue: enteredValue,
    hasError,
    isValid: valueIsValid,
    inputBlurHandler,
    ValueChangeHandler,
    reset,
  };
};

export default UseInput;
