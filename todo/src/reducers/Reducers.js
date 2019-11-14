import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../actions/Action'

let initialState = {
    todos: [
        { todo: "Need to water the garden", complete: false },
        { todo: "Need more sugar", complete: true },
        { todo: "Need to clean dishes", complete: false },
    ]
}

export default function Reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            const newTodo = {
                todo: action.payload,
                complete: false
            }
            return {
                ...state, todos: [...state.todos, newTodo]
            }

        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo, index) =>
                    action.payload === index ? { ...todo, complete: !todo.complete } : todo
                )
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(((todo, index) => index !== action.payload)),
            }

        default:
            return state
    }
}