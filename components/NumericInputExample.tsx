import React from "react";
import { useNumericInput } from "../utils/userNumericInput";

const NumericInputExample: React.FC = () => {
  // Basic integer input
  const integerInput = useNumericInput();

  // Decimal input with negative numbers allowed
  const decimalInput = useNumericInput({
    allowDecimal: true,
    allowNegative: true,
    maxLength: 10,
  });

  // Phone number input (digits only, max 10 characters)
  const phoneInput = useNumericInput({
    maxLength: 10,
  });

  // Age input (1-120 years)
  const ageInput = useNumericInput({
    min: 1,
    max: 120,
    maxLength: 3,
  });

  // Price input (0-9999.99)
  const priceInput = useNumericInput({
    allowDecimal: true,
    min: 0,
    max: 9999.99,
  });

  return (
    <div className="space-y-4 p-4">
      <div className="mb-4 p-3 bg-blue-50 rounded-lg">
        <h3 className="font-medium text-blue-900 mb-2">💡 Pro Tips:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Use ↑/↓ arrow keys to increment/decrement values</li>
          <li>• +/- buttons respect min/max limits automatically</li>
          <li>• Paste validation prevents invalid content</li>
        </ul>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Integer Only:</label>
        <input
          type="text"
          value={integerInput.value}
          onChange={integerInput.handleChange}
          onKeyDown={integerInput.handleKeyDown}
          onPaste={integerInput.handlePaste}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter integers only"
        />
        <p className="text-sm text-gray-500 mt-1">
          Valid: {integerInput.isValid ? "Yes" : "No"} | Try using ↑/↓ arrow
          keys!
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Decimal with Negative:
        </label>
        <input
          type="text"
          value={decimalInput.value}
          onChange={decimalInput.handleChange}
          onKeyDown={decimalInput.handleKeyDown}
          onPaste={decimalInput.handlePaste}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter decimal numbers (negative allowed)"
        />
        <p className="text-sm text-gray-500 mt-1">
          Valid: {decimalInput.isValid ? "Yes" : "No"}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Phone Number (10 digits max):
        </label>
        <input
          type="text"
          value={phoneInput.value}
          onChange={phoneInput.handleChange}
          onKeyDown={phoneInput.handleKeyDown}
          onPaste={phoneInput.handlePaste}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter phone number"
        />
        <p className="text-sm text-gray-500 mt-1">
          Valid: {phoneInput.isValid ? "Yes" : "No"} | Length:{" "}
          {phoneInput.value.length}/10
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Age (1-120 years):
        </label>
        <input
          type="text"
          value={ageInput.value}
          onChange={ageInput.handleChange}
          onKeyDown={ageInput.handleKeyDown}
          onPaste={ageInput.handlePaste}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter age"
        />
        <p className="text-sm text-gray-500 mt-1">
          Valid: {ageInput.isValid ? "Yes" : "No"} | In Range:{" "}
          {ageInput.isInRange ? "Yes" : "No"} | Value: {ageInput.numericValue}
        </p>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">
          Price ($0.00 - $9999.99):
        </label>
        <input
          type="text"
          value={priceInput.value}
          onChange={priceInput.handleChange}
          onKeyDown={priceInput.handleKeyDown}
          onPaste={priceInput.handlePaste}
          className="border rounded px-3 py-2 w-full"
          placeholder="Enter price"
        />
        <p className="text-sm text-gray-500 mt-1">
          Valid: {priceInput.isValid ? "Yes" : "No"} | In Range:{" "}
          {priceInput.isInRange ? "Yes" : "No"} | Value: $
          {priceInput.numericValue}
        </p>
      </div>
    </div>
  );
};

export default NumericInputExample;
