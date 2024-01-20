import type { ButtonProps } from "@/types";
import tw from "tailwind-styled-components";

export const Button = ({ styles, title, onClick }: ButtonProps) => {
  const style = `${styles.backGround} ${styles.hoverBackgrount} ${styles.fontSize} ${styles.padding} ${styles.text} ${styles.boxShadow} ${styles.hoverBoxshadow} ${styles.borderColor}`;

  return <Container className={style} onClick={onClick}>{title}</Container>;
};

export default Button;

const Container = tw.button`
  text-white
  rounded-md
`;
