import React from "react";
import style from './Header.module.css';

const Header = (props) =>{
    return(
        <header className={style.header}>
            <img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190326-spicy-salmon-bowl-horizontal-1556024100.png?crop=0.669xw:1.00xh;0.0308xw,0&resize=640:*'/>

        </header>
    );
}

export  default Header;