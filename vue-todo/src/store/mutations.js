 const addOneItem = (state, todoItem) => {
            const obj = {completed: false, item: todoItem};
            localStorage.setItem(todoItem, JSON.stringify(obj));
            state.todoItems.push(obj); 
        }
const removeOneItem = (state, payload) => {
            localStorage.removeItem(payload.todoItem.item);
            state.todoItems.splice(payload.index, 1);
        }
const toggleOneItem = (state, payload) => {
            state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed;
            // todoItem.completed = !todoItem.completed;
            // 로컬 스토리지에 다시 갱신 
            localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        }
const clearAllItems = (state) => {
            localStorage.clear();
            state.todoItems = [];
        }

export {addOneItem, removeOneItem, toggleOneItem, clearAllItems}