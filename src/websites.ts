// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 04/11/2023, 9:56 pm

import {Website} from "./interfaces.ts";

const websites: Website[] = [
    { id: 1, title: "Arthur Kasparian", url: "https://arthurkasparian.dev", date: new Date('2023-09-15'), styles: ['Colourful', 'Fullscreen'], types: ['Portfolio', 'Service'] },
    { id: 2, title: "Apple", url: "https://apple.com", date: new Date('2023-09-3'), styles: ['Dark', 'Clean'], types: ['Store', 'Company'] },
    { id: 3, title: "Google", url: "https://google.com", date: new Date('2023-08-28'), styles: ['Modern'], types: ['Service', 'Company'] },
    { id: 4, title: "Amazon", url: "https://amazon.com", date: new Date('2023-08-17'), styles: ['Colourful', 'Retro'], types: ['Service', 'Company', 'Store'] },
    { id: 5, title: "X", url: "https://x.com", date: new Date('2022-03-7'), styles: ['Modern', 'Clean'], types: ['Social Media', 'Company'] }
]

export default websites