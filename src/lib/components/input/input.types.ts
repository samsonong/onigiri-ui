export interface InputHtmlAttributes {
  autoComplete?: "on" | "off";
  autoFocus?: boolean;
  checked?: boolean;
  disabled?: boolean;
  placeholder?: string;
  readonly?: boolean;
  type?: InputTypes;
  // Situational attributes
  accepts?: string;
  capture?: "user" | "environment";
  min?: string | number;
  minLength?: number;
  max?: string | number;
  maxLength?: number;
  multiple?: boolean;
  step?: number;
}

type InputTypes =
  | "checkbox"
  | "color"
  | "date"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";
