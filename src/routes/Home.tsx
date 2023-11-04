// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 10:35 pm

import {NavLink} from "react-router-dom";
import Feed from "../components/Feed.tsx";
import websites from "../websites.ts";
import {Website} from "../interfaces.ts";

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

            {/*Websites repeated to fill page a little*/}
            <Feed websites={[
                ...websites,
                ...websites.map(
                    (website: Website) => {
                        return {...website, id: website.id + 5}
                    }
                ),
                ...websites.map(
                    (website: Website) => {
                        return {...website, id: website.id + 10}
                    }
                ),
                ...websites.map(
                    (website: Website) => {
                        return {...website, id: website.id + 15}
                    }
                ),
                ...websites.map(
                    (website: Website) => {
                        return {...website, id: website.id + 20}
                    }
                ),
                ...websites.map(
                    (website: Website) => {
                        return {...website, id: website.id + 25}
                    }
                )]}/>
        </div>
    )
}

export default Home