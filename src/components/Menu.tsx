// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 7:52 pm

import {NavLink} from "react-router-dom";
import MenuFilterList from "./MenuFilterList.tsx";
import websites from "../websites.ts";

const Menu = () => {
    const types: string[] = [... new Set(websites.map(site => site.types).flat())]
    const styles: string[] = [... new Set(websites.map(site => site.styles).flat())]
    const toggleMenu = () => { document.querySelector('nav')!.classList.toggle('hidden') }

    return (
        <aside>
            <button onClick={toggleMenu}>
                <span>Menu</span>
            </button>

            <nav className="hidden">

                <div id="httpster">
                    <h5><NavLink to="/" onClick={toggleMenu}>Httpster</NavLink></h5>

                    <ul>
                        <li onClick={toggleMenu}><NavLink to="/newsletter">Get the newsletter<sup>new</sup></NavLink></li>
                        <li onClick={toggleMenu}><NavLink to="/contact">Submit a website</NavLink></li>
                        <li onClick={toggleMenu}><a href="https://twitter.com/httpster_" target='_blank' rel="noreferrer">Follow on Twitter</a></li>
                        <li onClick={toggleMenu}><NavLink to="/about">About</NavLink></li>
                        <li onClick={toggleMenu}><a href="https://httpster.net" target='_blank' rel="noreferrer">Original Website</a></li>
                    </ul>
                </div>

                <MenuFilterList id="types" title="Type" list={types}/>
                <MenuFilterList id="styles" title="Style" list={styles}/>

            </nav>
        </aside>
    )
}

export default Menu