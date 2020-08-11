import React from "react";
import Header from "./Header";

export default ({children}) => {
    return (
        <div>
            <Header />
            Hi, im the app
            {children}
        </div>
    )
}