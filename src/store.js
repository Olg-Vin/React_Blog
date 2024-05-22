import { createStore } from 'redux'
import { posts } from './samples/posts'
import { useEffect } from 'react'

// объект состояний
const initialValue = {
    posts: [...posts],
    archivePosts: []
}

/**
 * @param {*} state - текущие состояния
 * @param {*} action - действие (type + payload) - объект
 * payload = некоторая информация - к примеру. объект поста.
 */
function dispatcher(state = initialValue, action){
    switch(action.type){
        case 'ACTION_DELETE': {
            return {
                posts: [
                    ...state.posts.filter(post => post.postHead !== action.payload.postHead)
                ],
                archivePosts: [
                    ...state.archivePosts
                ]
            }
        }
        case 'ACTION_ARCHIVE': {
            return {
                posts: [
                    ...state.posts.filter(post => post.postHead !== action.payload.postHead)
                ],
                archivePosts: [
                    ...state.archivePosts,
                    action.payload
                ]
            }
        }
        case 'ACTION_ADD': {
            return {
                posts: [
                    ...state.posts,
                    action.payload
                ],
                archivePosts: [
                    ...state.archivePosts
                ]
            }
        }
        default:
            return state;
    }
}

export const store = createStore(dispatcher)