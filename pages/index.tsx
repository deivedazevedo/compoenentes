import React, { ReactElement, useState } from "react";
import Head from "next/head";
import SideBar from "components/commons/sideBar";
import Energy from "@assets/svgs/Energy";
import ThermalComfort from "@assets/svgs/ThermalComfort";
import TechnicalRoom from "@assets/svgs/TechnicalRoom";
import RefrigeredEnvironments from "@assets/svgs/RefrigeredEnvironments";
import CentralAir from "@assets/svgs/CentralAir";
import Leaks from "@assets/svgs/Leaks";
import Config from "@assets/svgs/Config";
import CircleProgress from "components/commons/progressBar/circleBar";
import SimpleBarGraphics from "components/commons/charts/simpleBar";

const Home = (): ReactElement => {
    return (
        <div>
            <Head>
                <title>Comp</title>
            </Head>
            <SimpleBarGraphics />
        </div>
    );
};

export default Home;
