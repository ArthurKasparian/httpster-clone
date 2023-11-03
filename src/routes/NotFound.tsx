// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 10:25 pm

import {NavLink} from "react-router-dom";

const NotFound = () => {
    return (
        <div id="not-found">
            <NavLink to="/">
                <img src="/logo.png" alt="Site Logo" id="main-logo"/>
            </NavLink>

            <h1>404</h1>
        </div>
    )
}

export default NotFound