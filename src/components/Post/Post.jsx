import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { deleteNote } from './deleteNote';
import { archiveNote } from './archiveNote';

import './styles.css';

export const Post = ({author, postHead, category, text}) => {
    const disp = useDispatch();

    const deleteNoteHandler = useCallback(() => deleteNote(disp, postHead), [deleteNote, disp])
    const archiveNoteHandler = useCallback(() => archiveNote(disp, author, postHead, category, text), [archiveNote, disp])

    return (
        <div className="articke">
            <div className="post">
                <div className="postHead">
                    <h1 >{postHead}</h1>
                </div>
                <div className="author">
                    <span>Автор:</span>
                    <span >{author}</span>
                </div>
                <div className="category">
                    <span>Категория:</span>
                    <span >{category}</span>
                </div>
                <div className="text">
                    <span>{text}</span>
                </div>
            </div>
            <div className="buttons">
                <div  className="delete" onClick={deleteNoteHandler}>
                    Удалить
                </div>
                <div  className="archive" onClick={archiveNoteHandler}>
                    Архив
                </div>
            </div>
        </div>
    );
};