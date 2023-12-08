import React, { useRef } from "react";
import HighlightEtronGT from "./Highlight-EtronGT";
import DesignEtronGT from "./Design-EtronGT";
import Connectivity from "./ConnectivityEtronGT";
import ChargingEtronGT from "./ChargingEtronGT";

const InfoEtronGT = () => {
    const divHighlightRef = useRef();
    const divDesignRef = useRef();
    const divConnectivityRef = useRef();
    const divChargingRef = useRef();

    const handleMenuClick = (ref) => (event) => {
        event.preventDefault();
        ref.current.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <>
            <div className="Box-Overview">
                <span className="Span-Overview" style={{ fontSize: 30 }}>
                    Overview
                </span>
                <div className="Catalog-Dimensions">
                    <span className="Span-Overview" style={{ cursor: "pointer" }}>
                        Catalog
                    </span>
                    <span className="Span-Overview" style={{ cursor: "pointer" }}>
                        Dimensions
                    </span>
                </div>
            </div>

            <div className="Background-Infor">
                <div className="content-back1">
                    <span className="title-infor">e-tron GT quattro</span>
                    <div style={{ display: "flex" }}>
                        <button className="B-Test">Test drive</button>
                        <button className="B-Dealership">Dealership information</button>
                    </div>
                </div>
            </div>

            <div className="Box-Highlight">
                <a className="Menu-Highlight" href="#Highlight" onClick={handleMenuClick(divHighlightRef)}>
                    <span>Highlights</span>
                </a>
                <a className="Menu-Highlight" href="#Design" onClick={handleMenuClick(divDesignRef)}>
                    <span>Design</span>
                </a>
                <a className="Menu-Highlight" href="#Connectivity" onClick={handleMenuClick(divConnectivityRef)}>
                    <span>Connectivity</span>
                </a>
                <a className="Menu-Highlight" href="#Charging" onClick={handleMenuClick(divChargingRef)}>
                    <span>Charging and range</span>
                </a>
            </div>
            <div id="Highlight" ref={divHighlightRef} >
                <HighlightEtronGT />
            </div>

            <div id="Design" ref={divDesignRef}>
                <DesignEtronGT/>
            </div>

            <div id="Connectivity" ref={divConnectivityRef}>
                <Connectivity/>
            </div>

            <div id="Charging" ref={divChargingRef}>
               <ChargingEtronGT/>
            </div>
        </>
    );
};

export default InfoEtronGT;