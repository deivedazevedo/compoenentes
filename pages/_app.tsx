import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";
import { SquairDarkMode } from "../styles/theme";

const MyApp = ({ Component, pageProps }): ReactElement => {
    return (
        <ThemeProvider theme={SquairDarkMode}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
