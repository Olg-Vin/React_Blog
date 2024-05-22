import React from "react"

import './styles.css'

export const ArchivePost = ({ author, postHead, category, text }) => {
    return (
        <li className="nameOfPost">
            { postHead }
        </li>
    )
}