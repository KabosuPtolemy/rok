import React from "react";
import Styles from "../styles/LodaingIndicator.module.css"

export function LoadingIndicator() : React.JSX.Element {
    return (
        <div className={Styles.ellipsis}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}