import React, { ReactElement } from "react";
import Head from "next/head";
import Button from "../components/commons/buttons";

const Home = (): ReactElement => {
    return (
        <div>
            <Head>
                <title>Comp</title>
            </Head>

            <main>
                <h1>Hello, Deived!</h1>
                <Button
                    text={"Save"}
                    icon={"save"}
                    onClick={() => console.log("clicou")}
                    onFocus={() => console.log("focou")}
                    variant={"primary"}
                />
                <Button
                    text={"Save 2"}
                    onClick={() => console.log("clicou")}
                    onFocus={() => console.log("focou")}
                    variant={"secondary"}
                />
                <Button
                    text={"Save 2"}
                    onClick={() => console.log("clicou")}
                    onFocus={() => console.log("focou")}
                    variant={"terciary"}
                />
            </main>
        </div>
    );
};

export default Home;
