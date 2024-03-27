import { FC, ReactElement } from "react";
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import styles from "./Button.module.css";

export const Button: FC<ButtonProps> = ({
  children,
  className,
  appearance = "small",
  ...props
}): ReactElement => {
  return (
    <>
      <button
        className={cn(styles["button"], styles["accent"], className, {
          [styles['big']]:appearance === "big",
          [styles['small']]:appearance === "small",
        })}
        {...props}
      >
        {children}
      </button>
    </>
  );
};
