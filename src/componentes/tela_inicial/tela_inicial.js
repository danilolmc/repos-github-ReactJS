import React, { useState } from "react";

import { Body } from "./global_style";

import { Header, Dashboard, ListaRepositorios, Formulario, Input, Button } from "./style";

import { Icon } from '@iconify/react';

import githubFilled from '@iconify/icons-ant-design/github-filled';

import Repositorios from "../Lista_Repos/Repositorios";

import searchOutlined from '@iconify/icons-ant-design/search-outlined';


const estilo_icon_fundo = {

    width: "549px",
    height: "532.85px",
    color: "#ebebeb",
    position: "absolute",
    background: "linear-gradient(180deg, #ECECEC 0%, rgba(227, 227, 227, 0) 100%);",
    right: "0px"
}



const TelaInicial = () => {


    const [campo, setCampo] = useState("");

    const [listaRepos, setlistaRepos] = useState("");


    const busca_repos = async (query) => {

        const data = await fetch("https://api.github.com/search/repositories?q=jquery+in%3Aname&type=Repositories");

        const repos = await data.json();

        setlistaRepos(repos);
     
        console.log(listaRepos); 
    };

    const handleChange = e => {

        setCampo(e.target.value);
    }

    const submit = () => {

        busca_repos(campo);

    }


    return (
        <>
            <Body />
            <Icon icon={githubFilled} style={estilo_icon_fundo} />
            <Dashboard>
                <Header>
                    <h1>Repositórios do <span>GitHub</span></h1>
                    <p>Para pesquisar um repositório digite no campo abaixo e pressione o botão</p>
                </Header>
                <Formulario>
                    <Input type="text" value={campo} onChange={handleChange} />
                    <Button onClick={submit}>
                        <Icon icon={searchOutlined} style={{ color: '#fff', width: "25px", height: "25px" }} />
                    </Button>
                </Formulario>


                <ListaRepositorios>
                    <Repositorios dados={listaRepos} />
                </ListaRepositorios>

            </Dashboard>

        </>
    )

}


export default TelaInicial;