import React from "react";
import { Link } from "react-router";
import style from "./CTA.module.css";

function CTA(props) {

    function showText() {
        if (props.text === undefined || props.text === "") {
            return (
                <a href="#contato" className={style.texto}>
                    Marque 
                    <span style={{ fontWeight: "bold" }}> um horário </span>
                </a>
            );
        } else {
            return (
                <a href="#contato" className={style.texto}>
                    {props.text}<img src={props.image}alt="" />
                </a>
            );
        }
    }

    return (
        <>
            {showText()}
        </>
    );
}

export default CTA;
