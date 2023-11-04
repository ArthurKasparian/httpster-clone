// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 04/11/2023, 6:35 pm

import SiteCard from "./SiteCard.tsx";
import {Website} from "../interfaces.ts";

type Props = {
    websites: Website[]
}

const Feed = ({websites}: Props) => {
    return (
        <div className="feed">
            {websites.map((site: Website) => (
                <SiteCard
                    key={site.id}
                    website={site}
                />
            ))}
        </div>
    )
}

export default Feed