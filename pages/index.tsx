import React, { ReactElement } from "react";
import Head from "next/head";
import Button from "../components/commons/buttons";
import AvatarGroup from "components/commons/avatargroup";
import Filter from "components/commons/filter";
import SelectFilter from "components/commons/filter";
import HoverCard from "components/commons/hovercard";
import Avatar from "components/commons/avatar";
import SideBar from "components/commons/sideBar";
import Energy from "@assets/svgs/Energy";
import ThermalComfort from "@assets/svgs/ThermalComfort";
import TechnicalRoom from "@assets/svgs/TechnicalRoom";
import RefrigeredEnvironments from "@assets/svgs/RefrigeredEnvironments";
import CentralAir from "@assets/svgs/CentralAir";
import Leaks from "@assets/svgs/Leaks";
import Config from "@assets/svgs/Config";

const Home = (): ReactElement => {
    return (
        <div>
            <Head>
                <title>Comp</title>
            </Head>

            <main style={{ display: "100%" }}>
                <SideBar>
                    <SideBar.Item>
                        <SideBar.ItemIcon>
                            <Energy />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Consumo de Energia" />
                    </SideBar.Item>
                    <SideBar.Item>
                        <SideBar.ItemIcon>
                            <ThermalComfort />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Conforto Térmico" />
                    </SideBar.Item>
                    <SideBar.Item>
                        <SideBar.ItemIcon>
                            <TechnicalRoom />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Salas Técnicas" />
                    </SideBar.Item>
                    <SideBar.Item>
                        <SideBar.ItemIcon>
                            <RefrigeredEnvironments />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Ambientes Refrigerados" />
                    </SideBar.Item>

                    <SideBar.Item>
                        <SideBar.ItemIcon>
                            <CentralAir />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Ar-condicionado Central" />
                    </SideBar.Item>
                    <SideBar.Item>
                        <SideBar.ItemIcon>
                            <Leaks />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Vazamentos" />
                    </SideBar.Item>
                    <SideBar.LastItem>
                        <SideBar.ItemIcon>
                            <Config />
                        </SideBar.ItemIcon>
                        <SideBar.ItemText text="Vazamentos" />
                    </SideBar.LastItem>
                </SideBar>
            </main>
        </div>
    );
};

export default Home;
