// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 10:35 pm

import {NavLink} from "react-router-dom";

const Home = () => {
    return (
        <div id="home">
            <h1>Web design inspiration from all over the world</h1>

            <nav>
                <ul>
                    <li><NavLink to="/about">About</NavLink></li>
                    <li><NavLink to="/newsletter">Get the newsletter</NavLink></li>
                </ul>
            </nav>

            {/*<Feed /> TODO: Make feed component*/}
        </div>
    )
}

export default Home