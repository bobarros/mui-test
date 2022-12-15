// Shared Components
import NavBar from "./NavBar";

// Types
import type { FC, ReactNode } from "react";
interface IProps {
  children: ReactNode | ReactNode[];
}

/*--------------------*/

/**
 * DefaultLayout Component Estructure
 */

const DefaultLayout: FC<IProps> = ({ children }) => {
  return (
    <div>
      <NavBar />
      <>{children}</>
    </div>
  );
};

export default DefaultLayout;
