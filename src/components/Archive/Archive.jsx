import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { ArchivePost } from "../ArchivePost";
import { hashObject } from "../../hashObject"

import './styles.css'

export const Archive = () => {
    const archivePosts = useSelector(state => state.archivePosts)

    return (
        <div className="Archive">
            <div className="textSpan">
                Архив
            </div>
            <ul>
                { archivePosts.map(archivePost => <ArchivePost key={hashObject(archivePost)} {...archivePost}/> ) }
            </ul>
        </div>
    )
}