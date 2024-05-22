export const archiveNote = (disp, author, postHead, category, text) => {
    disp ({
        type: 'ACTION_ARCHIVE',
        payload: {author, postHead, category, text}
    })
}