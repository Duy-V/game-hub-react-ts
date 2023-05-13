import { useState, useCallback } from "react";

export default function useInput(initialValue: string): {
  value: string;
  onChangeValue: (e: React.ChangeEvent<HTMLInputElement>) => void;
} {
  const [value, setValue] = useState<string>(initialValue);

  const onChangeValue = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      setValue(e.target.value);
    },
    []
  );

  return { value, onChangeValue };
}
