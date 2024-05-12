import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import './styles.css';
import { getField } from '../../getFields';

export const Post = ({name, theme, text}) => {
    const disp = useDispatch();
    const isLongText = text.length > 20;
    const handleDelete = useCallback(() => {    
        disp({
            type: "ACTION_DELETE",
            payload: {
                name
            }
        })
    }, [disp])

    const handleEdit = useCallback(() => {    
        const { _name, _theme, _text } = getField()

        _name.value = name;
        _theme.value = theme;
        _text.value = text;

        disp({
            type: "ACTION_ENTER_EDIT_MODE",
        });
    }, [disp])

    return (
        <div className="wrapper">
            <div className="post">
                <div className="name">
                    <span>Название:</span>
                    <span >{name}</span>
                </div>
                <div className="theme">
                    <span>Тема:</span>
                    <span >{theme}</span>
                </div>
                <div className="text">
                    <span>Текст:</span>
                    <span>
                        { isLongText ? 
                            text.slice(0, 50) + " ... " : 
                            text
                        }
                    </span>
                </div>
            </div>
            <div className="buttons">
                <div onClick={handleEdit} className="edit">
                    Редактировать
                </div>
                <div onClick={handleDelete} className="delete">
                    Удалить
                </div>
            </div>
        </div>
    );
};