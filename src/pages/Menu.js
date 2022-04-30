import React from "react";
import "../styles/Menu.css";
import { menuList } from "../data/Menulist";
import Menuitems from "../components/Menuitems";

export default function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <h1>Our Premium plans</h1>
            </div>
            <div className="menuList">
                {menuList.map((menuItem, key) => {
                    return (
                        <Menuitems
                            key={key}
                            name={menuItem.name}
                            image={menuItem.image}
                            price={menuItem.price}

                        />
                    );
                })}
            </div>
            {/* <div style={{ backgroundColor: "none" }} className="card-deck-container">
                <div className="title-text"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 offset-md-2 text-center">
                            <div className="title-wrapper workPlanTitle">
                                <h2>How it works ?</h2>
                            </div>
                            <div className="title-text-footer">
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <ul className="card-deck-items card-grid card-grid-3x1">
                        <li style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }} className="card-container card card-outline card-image-left card-large-padding card-content-left">
                            <div className="card-border card-border-top" style={{ backgroundColor: "#0077CC" }}></div>
                            <div className="card-top"><div className="card-image">
                                <img src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt36f2da8d650732a0/5d0823c3d8ff351753cbc99f/logo-elasticsearch-32-color.svg" className="img-fluid icon-32" alt="" />
                            </div>
                            <div className="card-title">
                                <div className="jsx-3758713709 title-wrapper">
                                    <a id="step1"></a>
                                    <h3>Step - 1</h3>
                                </div>
                            </div>
                            <div className="card-paragraph">
                                <p>What we offer ?</p>
                            </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex flex-column justify-content-start text-left">
                                    <a className="button stretched-link btn-tertiary" href="/step1">
                                        <p className="jsx-3851304329 btn-description">Learn more</p>
                                        <span className="jsx-3851304329 icon-tertiary">
                                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3851304329">
                                                <path d="M0 7H25" stroke="#000000" stroke-width="2" className="jsx-3851304329 arrow"></path>
                                                <path d="M19 1L25 7L19 13" stroke="#000000" stroke-width="2" className="jsx-3851304329 arrow"></path>
                                            </svg>
                                        </span>
                                    </a> 
                                </div>
                            </div>
                        </li>
                        <li style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }} className="card-container card card-outline card-image-left card-large-padding card-content-left">
                            <div className="card-border card-border-top" style={{ backgroundColor: "#0077CC" }}></div>
                            <div className="card-top">
                                <div className="card-image">
                                    <img src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/blt4466841eed0bf232/5d082a5e97f2babb5af907ee/logo-kibana-32-color.svg" className="img-fluid icon-32" alt="" />
                                </div>
                                <div className="card-title">
                                    <div className="title-wrapper">
                                        <a id="step2"></a>
                                        <h3>Step - 2</h3>
                                    </div>
                                </div>
                                <div className="card-paragraph">
                                    <p>What we do ?</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex flex-column justify-content-start text-left">
                                    <a className="button stretched-link btn-tertiary" href="/step2">
                                        <p className="jsx-3851304329 btn-description">Learn more</p>
                                        <span className="jsx-3851304329 icon-tertiary">
                                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3851304329">
                                                <path d="M0 7H25" stroke="#000000" stroke-width="2" className="jsx-3851304329 arrow"></path>
                                                <path d="M19 1L25 7L19 13" stroke="#000000" stroke-width="2" className="jsx-3851304329 arrow"></path>
                                            </svg>
                                        </span>
                                    </a> 
                                </div>
                            </div>
                        </li>
                        <li style={{ backgroundColor: "#FFFFFF", borderRadius: "10px" }} className="jsx-689722508 card-container card card-outline card-image-left card-large-padding card-content-left">
                            <div className="card-border card-border-top" style={{ backgroundColor: "#0077CC" }}></div>
                            <div className="card-top">
                                 <div className="card-image">
                                    <img src="https://images.contentstack.io/v3/assets/bltefdd0b53724fa2ce/bltd1f950b35ad63d86/619587857b57030e268d84c9/icon-integrations-color-32.svg" className="img-fluid icon-32" alt="" />
                                </div> 
                                <div className="card-title">
                                    <div className="title-wrapper">
                                        <a id="step3"></a>
                                        <h3>Step - 3</h3>
                                    </div>
                                </div>
                                <div className="card-paragraph">
                                    <p>How we do ?</p>
                                </div>
                            </div>
                            <div className="card-footer">
                                <div className="d-flex flex-column justify-content-start text-left">
                                    <a className="button stretched-link btn-tertiary" href="/step3">
                                        <p className="btn-description">Learn more</p>
                                        <span className="icon-tertiary">
                                            <svg width="27" height="15" viewBox="0 0 27 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="jsx-3851304329">
                                                <path d="M0 7H25" stroke="#000000" stroke-width="2" className="jsx-3851304329 arrow"></path>
                                                <path d="M19 1L25 7L19 13" stroke="#000000" stroke-width="2" className="jsx-3851304329 arrow"></path>
                                            </svg>
                                        </span>
                                    </a> 
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> */}
        </div>
    )
}