import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';

import './styles.css';
import { getField } from "../../getFields";

export const Form = () => {
    const disp = useDispatch();
    const isEditMode = useSelector(state => state.isEditMode);

    useEffect(() => {
        console.log(isEditMode)
    }, [isEditMode])

    const handleAdd = useCallback(() => {
        const { _name, _theme, _text } = getField();
    
        disp({
            type: "ACTION_ADD",
            payload: {
                name: _name.value,
                theme: _theme.value,
                text: _text.value,
            },
        });
    }, [disp])

    const handleEdit = useCallback(() => {
        const { _name, _theme, _text } = getField();
    
        disp({
            type: "ACTION_EDIT",
            payload: {
                name: _name.value,
                theme: _theme.value,
                text: _text.value,
            },
        });
        disp({
            type: "ACTION_LEAVE_EDIT_MODE"
        });
    }, [disp])

    return (
        <div className="form">
            <label htmlFor="name">Введите название</label>
            <input id="name" type="text" />
            <label htmlFor="theme">Введите тему</label>
            <input id="theme" type="text" />
            <label htmlFor="text">Можете печатать:)</label>
            <textarea id="text" cols="30" rows="10"></textarea>
            <div 
                onClick={ isEditMode ? handleEdit : handleAdd } 
                className="button"
            >
                { isEditMode ? "Изменить" : "Добавить"}
            </div>
        </div>
    );
}
