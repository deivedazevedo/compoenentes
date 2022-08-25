import React, { ReactElement } from "react";
import Head from "next/head";
import Button from "../components/commons/buttons";
import AvatarGroup from "components/commons/avatargroup";
import Filter from "components/commons/filter";

const Home = (): ReactElement => {
    return (
        <div>
            <Head>
                <title>Comp</title>
            </Head>

            <main style={{ display: "100%" }}>
                <h1>Hello, Deived!</h1>
                <AvatarGroup
                    title="Responsável"
                    maxToShow={2}
                    size={"large"}
                    avatars={[
                        {
                            firstName: "Deived",
                            lastName: "Azevedo",
                            photo: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&fit=max&s=6f2a6866c6969e2ca75aca59be424d8a",
                            isOnline: true
                        },
                        {
                            firstName: "Lolo",
                            lastName: "Azevedo",
                            photo: "",
                            isOnline: true
                        },
                        {
                            firstName: "Scott",
                            lastName: "Azevedo",
                            photo: "https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=620&quality=85&fit=max&s=6f2a6866c6969e2ca75aca59be424d8a",
                            isOnline: false
                        }
                    ]}
                ></AvatarGroup>
                <Filter
                    width="auto"
                    items={[
                        { name: "Deived", icon: "save" },
                        { name: "ddd", icon: "Ddef" },
                        { name: "dsdgfrgr", icon: "Ddef" }
                    ]}
                />
            </main>
        </div>
    );
};

export default Home;
