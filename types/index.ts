import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  containerStyles?: string;
  title: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
}

export interface SearchManuFacturerProps {
  manufacturer: string;
  setManuFacturer: (manufacturer: string) => void;
}
