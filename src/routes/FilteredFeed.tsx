// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 05/11/2023, 12:55 am

import {useParams} from "react-router-dom";
import Feed from "../components/Feed.tsx";
import websites from "../websites.ts";
import {Website} from "../interfaces.ts";

type Params = {
    filter: string,
    id: string
}

const FilteredFeed = () => {
    const { filter, id } = useParams<Params>()
    const sites: Website[] = websites.filter(
        (website: Website) => {
            if (filter == 'type')
                return website.types.includes(id!.charAt(0).toUpperCase() + id!.slice(1))
            else if (filter == 'style')
                return website.styles.includes(id!.charAt(0).toUpperCase() + id!.slice(1))
        }
    )

    return (
        <div id="filteredFeed">
            <h1>{id!.charAt(0).toUpperCase() + id!.slice(1)} web design inspiration</h1>

            {/*Websites repeated to fill page a little*/}
            <Feed websites={sites}/>
        </div>
    )
}

export default FilteredFeed