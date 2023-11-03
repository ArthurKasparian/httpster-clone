// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 8:11 pm

import {NavLink} from "react-router-dom";

type Props = {
    id: string,
    title: string,
    list: string[]
}

const MenuFilterList = ({id, title, list}: Props) => {
    return (
        <div id={id} className="menuFilter">
            <h5>Filter by {title}</h5>

            <ul>
                {list.map((item, index) => (
                    <li key={index} onClick={() => document.querySelector('nav')!.classList.add('hidden')}>
                        <NavLink to="">{item}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuFilterList