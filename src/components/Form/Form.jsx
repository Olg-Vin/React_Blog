import React, { useCallback } from "react";

import { useDispatch } from 'react-redux';

import { addNote } from './addNote';
import { Archive } from "../Archive";

import './styles.css';

export const Form = () => {
    const disp = useDispatch()

    const addNoteHandler = useCallback(() => addNote(disp), [addNote, disp])

    return (
        <div className="form">
            <span className='textSpan'>
                Добавить запись
            </span>

            <label htmlFor="author">Автор</label>
            <input id="author" type="text" />

            <label htmlFor="postHead">Заголовок</label>
            <input id="postHead" type="text" />

            <label htmlFor="category">Категория</label>
            <input id="category" type="text" />

            <label htmlFor="text">Текст</label>
            <textarea id="text" cols="50" rows="10"></textarea>

            <div className="button" onClick={addNoteHandler}>
                Добавить
            </div>

            <Archive />
        </div>
    );
}
