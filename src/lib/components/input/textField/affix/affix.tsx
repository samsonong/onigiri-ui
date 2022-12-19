import { ReactNode } from "react";
import { TailwindWidth } from "../../../../../types/tailwind/width";
import "./affix.css";

interface Props {
  type: AffixType;
  affixText?: string;
  affixWidth?: TailwindWidth;
}

type AffixType = "Prefix" | "Suffix";

export function TextFieldAffixComponent(props: Props) {
  if (!props.affixText) return <></>;

  return (
    <RoundedSideWrapper type={props.type}>
      <div className={props.affixWidth}>{props.affixText}</div>
    </RoundedSideWrapper>
  );
}

function RoundedSideWrapper({
  type,
  children,
}: {
  type: AffixType;
  children: ReactNode;
}) {
  if (type === "Prefix")
    return <div className="onigiri-text-input-prefix-wrapper">{children}</div>;
  if (type === "Suffix")
    return <div className="onigiri-text-input-suffix-wrapper">{children}</div>;
  return <>{children}</>;
}
