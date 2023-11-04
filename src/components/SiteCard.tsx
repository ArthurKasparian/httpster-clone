// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 04/11/2023, 6:37 pm

import {Website} from "../interfaces.ts";
import {NavLink} from "react-router-dom";

type Props = {
    website: Website
}

const SiteCard = ({website}: Props) => {
    // needlessly complex date formatting lol
    let date = website.date.toDateString().slice(4)
    if (date[4] === '0')
        date = date.substring(0, 4) + date.substring(5)

    return (
        <NavLink to={/*TODO: Add individual sites*/""} target="_blank" className="siteCard">
            <img src={"/thumbnails/" + website.title.toLowerCase() + ".png"} alt={"Thumbnail of " + website.title}/>

            <div>
                <h5>{website.title}</h5>
                <p>{date}</p>
            </div>

            <a href={website.url}>Visit</a>
        </NavLink>
    )
}

export default SiteCard