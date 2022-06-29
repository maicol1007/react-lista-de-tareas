import React from "react";
import  styles  from "./header.module.css";

function Header({titulo}) {
    return (
        <nav>
            <h1 className={styles.titulo}>{titulo}</h1>
        </nav>
    )
}

export default Header;