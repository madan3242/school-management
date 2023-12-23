import React from "react";
import Navbar from "./components/navbar/Navbar";

type MyComponentProps = React.PropsWithChildren<{}>;

const Layout = ({ children, ...props }: MyComponentProps) => {
  return (
    <>
      <div className="h-screen relative">
        <Navbar />
        <div className="w-screen px-5 pt-16" {...props}>
            {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
