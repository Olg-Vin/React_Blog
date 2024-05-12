import { createStore } from 'redux';
import { posts } from './samples/posts';

const initialValue = {
    isEditMode: false,
    posts: [
        ...posts
    ]
}

/**
 * payload = некоторая информация - к примеру. объект поста.
 * 
 * @param {*} state - текущие состояния
 * @param {*} action - действие (type + payload)
 */
function dispatcher(state = initialValue, action) {
    switch (action.type) {
        case "ACTION_ENTER_EDIT_MODE": {
            return {
                isEditMode: true,
                posts: state.posts
            };
        };
        case "ACTION_LEAVE_EDIT_MODE": {
            return {
                isEditMode: false,
                posts: state.posts
            };
        };
        case "ACTION_ADD": {
            return {
                isEditMode: state.isEditMode,
                posts: [
                    ...state.posts, 
                    action.payload,
                ],
            };
        };

        case "ACTION_DELETE": {
            return {
                isEditMode: state.isEditMode,
                posts: [
                    ...state.posts.filter(post => post.name !== action.payload.name),
                ],
            };
        };

        case "ACTION_EDIT": {
            return {
                isEditMode: state.isEditMode,
                posts: [
                    ...state.posts.map(post => {
                        if (post.name === action.payload.name) {
                            return action.payload;
                        }

                        return post;
                    }),
                ],
            };
        };

        default:
            return state;
    }
}

export const store = createStore(dispatcher);