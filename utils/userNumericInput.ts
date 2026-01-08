import {
  useState,
  useCallback,
  useMemo,
  KeyboardEvent,
  ClipboardEvent,
  ChangeEvent,
} from "react";

interface UseNumericInputOptions {
  allowDecimal?: boolean;
  allowNegative?: boolean;
  maxLength?: number;
  initialValue?: string;
  min?: number;
  max?: number;
}

interface UseNumericInputReturn {
  value: string;
  setValue: (value: string) => void;
  handleKeyDown: (e: KeyboardEvent<HTMLInputElement>) => void;
  handlePaste: (e: ClipboardEvent<HTMLInputElement>) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  isInRange: boolean;
  numericValue: number | null;
  increment: () => void;
  decrement: () => void;
  canIncrement: boolean;
  canDecrement: boolean;
}

export const useNumericInput = (
  options: UseNumericInputOptions = {}
): UseNumericInputReturn => {
  const {
    allowDecimal = false,
    allowNegative = false,
    maxLength,
    initialValue = "",
    min,
    max,
  } = options;

  const [value, setValue] = useState<string>(initialValue);

  // Check if a character is allowed
  const isAllowedCharacter = useCallback(
    (char: string): boolean => {
      // Allow digits
      if (/\d/.test(char)) return true;

      // Allow decimal point if enabled and not already present
      if (allowDecimal && char === "." && !value.includes(".")) return true;

      // Allow negative sign if enabled and at the beginning
      if (allowNegative && char === "-" && value.length === 0) return true;

      return false;
    },
    [allowDecimal, allowNegative, value]
  );

  // Validate the entire string
  const isValidNumericString = useCallback(
    (str: string): boolean => {
      if (str === "") return true;

      let pattern = "^";

      // Optional negative sign
      if (allowNegative) {
        pattern += "-?";
      }

      // Digits with optional decimal
      if (allowDecimal) {
        pattern += "\\d*\\.?\\d*";
      } else {
        pattern += "\\d*";
      }

      pattern += "$";

      const regex = new RegExp(pattern);
      return regex.test(str) && str !== "." && str !== "-";
    },
    [allowDecimal, allowNegative]
  );

  // Get numeric value first (needed for increment/decrement)
  const numericValue = value === "" ? null : parseFloat(value);

  // Increment/Decrement functions
  const increment = useCallback(() => {
    const currentValue = numericValue || 0;
    const newValue = currentValue + 1;
    if (max === undefined || newValue <= max) {
      setValue(newValue.toString());
    }
  }, [numericValue, max]);

  const decrement = useCallback(() => {
    const currentValue = numericValue || 0;
    const newValue = currentValue - 1;
    if (min === undefined || newValue >= min) {
      setValue(newValue.toString());
    }
  }, [numericValue, min]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const { key, ctrlKey, metaKey } = e;

      // Handle arrow keys for increment/decrement
      if (key === "ArrowUp") {
        e.preventDefault();
        increment();
        return;
      }

      if (key === "ArrowDown") {
        e.preventDefault();
        decrement();
        return;
      }

      // Allow control keys (backspace, delete, arrow keys, tab, etc.)
      const controlKeys = [
        "Backspace",
        "Delete",
        "Tab",
        "Escape",
        "Enter",
        "ArrowLeft",
        "ArrowRight",
        "Home",
        "End",
      ];

      if (controlKeys.includes(key)) return;

      // Allow Ctrl/Cmd + A, C, V, X, Z
      if (
        (ctrlKey || metaKey) &&
        ["a", "c", "v", "x", "z"].includes(key.toLowerCase())
      ) {
        return;
      }

      // Check max length
      if (maxLength && value.length >= maxLength && key.length === 1) {
        e.preventDefault();
        return;
      }

      // Check if character is allowed
      if (!isAllowedCharacter(key)) {
        e.preventDefault();
      }
    },
    [isAllowedCharacter, maxLength, value.length, increment, decrement]
  );

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault();

      const pastedText = e.clipboardData.getData("text");
      const newValue = value + pastedText;

      // Check max length
      if (maxLength && newValue.length > maxLength) {
        return;
      }

      // Validate the new value
      if (isValidNumericString(newValue)) {
        setValue(newValue);
      }
    },
    [value, maxLength, isValidNumericString]
  );

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;

      // Check max length
      if (maxLength && newValue.length > maxLength) {
        return;
      }

      // Validate and set value
      if (isValidNumericString(newValue)) {
        // Check min/max range if value is not empty
        if (newValue !== "" && (min !== undefined || max !== undefined)) {
          const numValue = parseFloat(newValue);
          if (!isNaN(numValue)) {
            if (min !== undefined && numValue < min) {
              return; // Don't allow values below minimum
            }
            if (max !== undefined && numValue > max) {
              return; // Don't allow values above maximum
            }
          }
        }
        setValue(newValue);
      }
    },
    [maxLength, isValidNumericString, min, max]
  );

  // Check if value is in range
  const isInRange = useMemo(() => {
    if (numericValue === null) return true; // Empty value is considered in range
    if (min !== undefined && numericValue < min) return false;
    if (max !== undefined && numericValue > max) return false;
    return true;
  }, [numericValue, min, max]);

  const isValid = isValidNumericString(value) && value !== "";

  // Check if increment/decrement is possible
  const canIncrement = max === undefined || (numericValue || 0) < max;
  const canDecrement = min === undefined || (numericValue || 0) > min;

  return {
    value,
    setValue,
    handleKeyDown,
    handlePaste,
    handleChange,
    isValid,
    isInRange,
    numericValue,
    increment,
    decrement,
    canIncrement,
    canDecrement,
  };
};
