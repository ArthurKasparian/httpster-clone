// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 10:36 pm

import {NavLink, Outlet} from "react-router-dom";

const FeedLayout = () => {
    return (
        <div>
            <NavLink to="/">
                <img src="/logo.png" alt="Site Logo" id="main-logo"/>
            </NavLink>

            <section className="feedSection" onClick={ () => { document.querySelector('nav')!.classList.add('hidden') } }>
                <Outlet />
            </section>
        </div>
    )
}

export default FeedLayout