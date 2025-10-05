import * as Checkbox from "@radix-ui/react-checkbox";
import { forwardRef } from "react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export interface CheckboxFieldProps
  extends Omit<ComponentPropsWithoutRef<typeof Checkbox.Root>, "children"> {
  /** Text displayed next to the checkbox */
  label: ReactNode;
  /** Unique identifier used for `id`/`htmlFor` coupling */
  name: string;
  /** Optional helper or status text shown beneath the field */
  helperText?: ReactNode;
  /** Whether the field is visually highlighted as invalid */
  error?: boolean;
  /** Custom indicator element */
  indicator?: ReactNode;
}

const baseLabelStyles =
  "text-sm font-normal text-[#4B4B4B] font-['Rockwell Std']";
const helperStyles = "mt-1 text-xs text-[#757575]";
const errorStyles = "text-[#C62828]";

const DefaultIndicator = () => (
  <Checkbox.Indicator className="flex items-center justify-center text-white">
    <svg
      aria-hidden="true"
      className="size-3"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      viewBox="0 0 16 16"
    >
      <title>Checked</title>
      <polyline points="3.5 9 7 12.5 12.5 4.5" />
    </svg>
  </Checkbox.Indicator>
);

export const CheckboxField = forwardRef<HTMLButtonElement, CheckboxFieldProps>(
  (
    {
      label,
      name,
      helperText,
      error = false,
      disabled,
      className,
      indicator,
      ...restRootProps
    },
    ref,
  ) => {
    const {
      id: providedId,
      "aria-describedby": describedBy,
      ...rootProps
    } = restRootProps;

    const checkboxId = providedId ?? `checkbox-${name}`;
    const helperId = helperText ? `${checkboxId}-helper` : undefined;

    const rootBaseClasses =
      "size-5 shrink-0 rounded border border-[#C4C4C4] bg-white text-violet11 shadow-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet7 data-[state=checked]:bg-violet9 data-[state=checked]:border-violet9 data-[disabled]:cursor-not-allowed data-[disabled]:opacity-60";

    const rootErrorClasses = error
      ? "border-[#C62828] focus-visible:outline-[#C62828] data-[state=checked]:bg-[#C62828] data-[state=checked]:border-[#C62828]"
      : "";

    const rootClassName = [rootBaseClasses, rootErrorClasses, className]
      .filter(Boolean)
      .join(" ");

    const labelClasses = [
      baseLabelStyles,
      error ? errorStyles : undefined,
      disabled ? "opacity-60" : undefined,
    ]
      .filter(Boolean)
      .join(" ");

    const helperClasses = [
      helperStyles,
      error ? errorStyles : undefined,
      disabled ? "opacity-60" : undefined,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="flex flex-col gap-1">
        <label className={labelClasses} htmlFor={checkboxId}>
          <span className="flex items-center gap-2">
            <Checkbox.Root
              ref={ref}
              id={checkboxId}
              name={name}
              disabled={disabled}
              aria-describedby={[helperId, describedBy].filter(Boolean).join(" ") || undefined}
              className={rootClassName}
              {...rootProps}
            >
              {indicator ?? <DefaultIndicator />}
            </Checkbox.Root>
            {label}
          </span>
        </label>
        {helperText ? (
          <p id={helperId} className={helperClasses}>
            {helperText}
          </p>
        ) : null}
      </div>
    );
  },
);

CheckboxField.displayName = "CheckboxField";

export default CheckboxField;