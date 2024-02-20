import { FC } from "react";

type Props = {
  type?: string;
  onChange?: () => void;
  value?: string | number;
  defaultValue?: string | number
  className?: string;
  checked?: boolean;
  step?: number;
  min?: string
};

export const InputDefault: FC<Props> = ({ ...props }) => {
  return (
    <input
      className={props.className}
      type={props.type}
      value={props.value}
      checked={props.checked}
      step={props.step}
      min={props.min}
      onChange={props.onChange}
    />
  );
};

export default InputDefault;
