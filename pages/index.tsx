import React, { ReactElement, useState } from "react";
import Head from "next/head";
import StrengthPassword from "components/commons/passwordStrength";

const Home = (): ReactElement => {
    return (
        <div>
            <Head>
                <title>Comp</title>
            </Head>
            <StrengthPassword />
        </div>
    );
};

export default Home;
