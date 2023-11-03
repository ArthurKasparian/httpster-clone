// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 10:25 pm

import {NavLink} from "react-router-dom";
import {ChangeEvent, FormEvent, useState} from "react";

const Newsletter = () => {
    const [newAddress, setNewAddress] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        // Handle backend operation

        setNewAddress('')
    }

    return (
        <div id="newsletter">

            <section>
                <NavLink to="/">
                    <img src="/logo.png" alt="Httpster Logo"/>
                </NavLink>

                <div>
                    <h1>Subscribe to our newsletter</h1>
                    <p>Digital design inspiration delivered to your inbox.</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email Address"
                        required
                        value={newAddress}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => setNewAddress(e.target.value)}
                    />
                    <button type="submit">Subscribe</button>
                    <p>We respect your privacy. Unsubscribe at any time.</p>
                </form>
            </section>

            <p><span>Built by</span> <a href="https://arthurkasparian.dev" target="_blank">Arthur Kasparian</a></p>
        </div>
    )
}

export default Newsletter