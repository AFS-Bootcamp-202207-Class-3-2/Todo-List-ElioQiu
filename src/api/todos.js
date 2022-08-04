import api from "./api";

export const getTodos = () =>{
    return api.get("/todos");
};

export const saveTodo = (text) =>{
    return api.post("/todos",{text});
};

export const deleteTodo = (todo) =>{
    return api.delete("/todos/" + todo.id);
};

export const updateTodo = (id, text) => {
    return api.put("/todos/" + id, text)
}