export const addNote = (disp) => {
    const author = document.getElementById("author")
    const postHead = document.getElementById("postHead")
    const category = document.getElementById("category")
    const text = document.getElementById("text")

    disp({
        type: 'ACTION_ADD',
        payload: {
            author: author.value,
            postHead: postHead.value,
            category: category.value,
            text: text.value
        }
    })

    author.value = ""
    postHead.value = ""
    category.value = ""
    text.value = ""
}