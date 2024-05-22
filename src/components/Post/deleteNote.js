export const deleteNote = (disp, postHead) => {
    disp({
        type: 'ACTION_DELETE',
        payload: {postHead}
    })
}