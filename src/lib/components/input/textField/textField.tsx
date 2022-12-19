import { ReactNode } from "react";
import { get, RegisterOptions, UseFormReturn } from "react-hook-form";
import { TailwindWidth } from "../../../../types/tailwind/width";
import { InputHtmlAttributes } from "../input.types";
import { TextFieldAffixComponent } from "./affix/affix";
import { TextFieldBackgroundComponent } from "./background/background";
import { TextFieldErrorComponent } from "./error/error";
import { TextFieldLabelComponent } from "./label/label";
import "./text.css";

export interface Props
  extends InputHtmlAttributes,
    AffixAttributes,
    LabelAttributes,
    RhfAttributes {}

interface LabelAttributes {
  label?: string;
  allocateHeight?: boolean;
}
interface AffixAttributes {
  prefixText?: string;
  prefixWidth?: TailwindWidth;
  suffixText?: string;
  suffixWidth?: TailwindWidth;
}

interface RhfAttributes {
  rhf: UseFormReturn<any>;
  name: string;
}

export function TextField(props: Props) {
  const {
    register,
    formState: { errors, isSubmitting, isValidating },
  } = props.rhf;

  // Extract InputHTMLAttributes from Props
  const {
    rhf,
    prefixText,
    prefixWidth,
    suffixText,
    suffixWidth,
    allocateHeight,
    ...inputHtmlAttributes
  } = props;
  // Set input.type as "text" if not provided by user
  inputHtmlAttributes.type = inputHtmlAttributes.type || "text";

  // Round input box corners if there are affixes
  // "peer" cannot be applied via @apply
  var inputStyleClassName = "peer onigiri-text-input";
  if (!props.prefixText) inputStyleClassName += " rounded-l-md";
  if (!props.suffixText) inputStyleClassName += " rounded-r-md";

  // Get error message of this field
  const error = get(errors, props.name);
  const disabled = props.disabled || isValidating || isSubmitting;

  // Create RHF RegisterOptions
  var rhfRegisterOptions: RegisterOptions = {};
  // Support Zod number validation
  if (props.type === "number") rhfRegisterOptions.valueAsNumber = true;

  return (
    <div>
      <StateWrapper error={error} disabled={disabled}>
        <TextFieldAffixComponent
          type="Prefix"
          affixText={props.prefixText}
          affixWidth={props.prefixWidth}
        />

        {/* Input */}
        <div className="grow relative">
          <input
            className={inputStyleClassName}
            {...inputHtmlAttributes}
            {...register(props.name, rhfRegisterOptions)}
          />
          <TextFieldLabelComponent
            label={props.label}
            error={error}
            disabled={disabled}
          />
          <TextFieldBackgroundComponent
            label={props.label}
            error={error}
            disabled={disabled}
          />
        </div>

        <TextFieldAffixComponent
          type="Suffix"
          affixText={props.suffixText}
          affixWidth={props.suffixWidth}
        />
      </StateWrapper>

      <TextFieldErrorComponent
        error={error}
        allocateHeight={props.allocateHeight}
      />
    </div>
  );
}

function StateWrapper({
  error,
  disabled,
  children,
}: {
  error?: any;
  disabled?: boolean;
  children: ReactNode;
}) {
  if (error && !disabled)
    return <div className="onigiri-text-input-error-wrapper">{children}</div>;

  return <div className="onigiri-text-input-default-wrapper">{children}</div>;
}
