interface Props {
  allocateHeight?: boolean;
  error?: any;
}

/**
 * TextFieldErrorComponent intentionally ignores "disabled" to prevent a
 * disabled input causing hidden errors, which is both a bad UX and DX.
 */
export function TextFieldErrorComponent(props: Props) {
  if (props.error)
    return (
      <div className="text-danger-500 text-xs px-3 h-6 flex items-center">
        {props.error.message ?? ""}
      </div>
    );

  if (props.allocateHeight) return <div className="h-6"></div>;

  return <></>;
}
