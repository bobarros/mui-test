import type { MouseEvent, Dispatch, SetStateAction } from "react";

export interface INavProps {
  pages: string[];
  anchorElNav?: HTMLElement | null | undefined;
  setAnchorElNav?: Dispatch<SetStateAction<HTMLElement | null>>;
  handleOpenNavMenu?: (event: MouseEvent<HTMLElement>) => void;
  handleCloseNavMenu?: () => void;
}
