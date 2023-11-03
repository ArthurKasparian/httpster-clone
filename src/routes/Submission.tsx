// Copyright (c) 2023 ~ 2023 Arthur Kasparian, Individual All Rights Reserved
// Unauthorized copying of this file, via any medium is strictly prohibited
// Proprietary and confidential
// Written by Arthur Kasparian <contact@arthurkasparian.dev>, Month 11 2023. Last modified 03/11/2023, 10:33 pm

import {FormEvent, useState} from "react";

const Submission = () => {
    const [newAddress, setNewAddress] = useState('')
    const [newUrl, setNewUrl] = useState('')
    const [newComment, setNewComment] = useState('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        // Handle backend operation

        setNewAddress('')
        setNewUrl('')
        setNewComment('')
    }

    return (
        <div id="contact">
            <img src="/logo.png" alt="Httpster Logo"/>

            <h1>Submit a Website</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email Address"
                    required
                    value={newAddress}
                    onChange={(e) => {setNewAddress(e.target.value)}}
                />
                <input
                    type="url"
                    placeholder="Website URL"
                    required
                    value={newUrl}
                    onChange={(e) => {setNewUrl(e.target.value)}}
                />
                <textarea
                    placeholder="Any Comments?"
                    value={newComment}
                    onChange={(e) => {setNewComment(e.target.value)}}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Submission