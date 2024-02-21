
//Estado inicial
const initialState = [{
    id: 1,
    todo: 'Ver Radio Garka',
    done: false
}];


const todoReducer = (state = initialState, action = {}) => {

    //regresar un nuevo estado
    if (action.type === '[TODO] add todo') {
        return [...state, action.payload]
    }
    return state;
}

let todos = todoReducer()

const newTodo = {
    id: 2,
    todo: 'Comprar cigarros e ir a Farmatodo',
    done: false
}

const addTodoAction = {
    type: '[TODO] add todo',
    payload: newTodo
}


todos = todoReducer(todos, addTodoAction);

console.log({ state: todos })
