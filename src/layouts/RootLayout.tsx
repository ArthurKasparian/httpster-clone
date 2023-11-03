// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 10 2023. Last modified 10/30/23, 9:50 AM

import {Outlet} from 'react-router-dom'
import Menu from "../components/Menu.tsx";

const RootLayout = () => {
    return (
        <>
            <Menu />

            <main onClick={ () => { document.querySelector('nav')!.classList.add('hidden') } }>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout