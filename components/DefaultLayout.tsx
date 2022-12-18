// Shared Components
import NavBar from "@/components/NavBar";

// Context
import ContextProvider from "@/utils/themeContext";

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
      <ContextProvider>
        <NavBar />
        <>{children}</>
      </ContextProvider>
    </div>
  );
};

export default DefaultLayout;
