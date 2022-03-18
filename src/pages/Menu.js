import React from "react";
import "../styles/Menu.css";
import { menuList } from "../data/Menulist";
import Menuitems from "../components/Menuitems";

export default function Menu() {
    return (
        <div className="menu">
            <div className="menuTitle">
                <h1>Our Premium planes</h1>
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
        </div>
    )
}