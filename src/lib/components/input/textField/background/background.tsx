import "./background.css";

interface Props {
  label?: string;
  error?: boolean;
  disabled?: boolean;
}

export function TextFieldBackgroundComponent(props: Props) {
  if (!props.label) return <></>;

  return <div className="onigiri-text-input-background"></div>;
}
