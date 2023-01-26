export const sumbitHandler = async (evt) => {
  evt.preventDefault();
  if (newTodo) {
    await postTodos({ todo: newTodo })
      .then((response) => {
        dispatch({ type: 'ADD', todo: response });
      })
      .catch((err) => {
        throw new Error(err);
      });
    inputRef.current.value = '';
    inputRef.current.focus();
    setNewTodo('');
  }
};

export const getName = name => name;