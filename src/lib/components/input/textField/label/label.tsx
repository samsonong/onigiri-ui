import { HTMLAttributes, ReactNode } from "react";
import "./label.css";

interface Props {
  label?: string;
  error?: any;
  disabled?: boolean;
}

export function TextFieldLabelComponent(props: Props) {
  if (!props.label) return <></>;

  return (
    <StateWrapper error={props.error} disabled={props.disabled}>
      {props.label}
    </StateWrapper>
  );
}

function StateWrapper({
  error,
  disabled,
  children,
}: {
  error?: boolean;
  disabled?: boolean;
  children: ReactNode;
}) {
  if (disabled)
    return (
      <span className="onigiri-text-input-label-disabled-text">{children}</span>
    );
  if (error)
    return (
      <span className="onigiri-text-input-label-error-text">{children}</span>
    );

  return <span className="onigiri-text-input-label-text">{children}</span>;
}
