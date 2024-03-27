import { FC, ReactElement, forwardRef } from "react";
import { InputProps } from "./Input.props";
import styles from "./Input.module.css";
import cn from "classnames";

export const Input: FC = forwardRef<HTMLInputElement, InputProps>(
  (props, ref): ReactElement => {
    const { className, isValid = true, ...rest } = props;
    return (
      <input
        ref={ref}
        {...rest}
        className={cn(styles["input"], className, {
          [styles["invalid"]]: isValid,
        })}
      />
    );
  }
);
