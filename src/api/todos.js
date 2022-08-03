import api from "./api";

export const getTodoList = () =>{
    return api.get("todos");
};

export const saveTodo = (text) =>{
    return api.post("todos",{text});
};

export const updateTodo = (todo) =>{
    return api.put("todos/"+todo.id,{done : !todo.done})
};

export const removeTodo = (todo) =>{
    return api.delete("/todos/" + todo.id);
};