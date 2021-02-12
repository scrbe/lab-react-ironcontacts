import React from 'react'

let id = 0; // un contadro, a medida que se vaya crenando una key nueva va generándose un nuevo id

const initialState = {
    author: '',
    title: '',
    todo: ''
}

function TodoList() {
    const [formState, setFormState] = React.useState(initialState) // [state, setState]
    const [todoList, setTodoList] = React.useState([])

    const handleChange = (event) => {
        const { value, name } = event.target; // target es de dónde está saliendo el evento, en este caso el input.
        setFormState(state => ({
            ...state,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault() // para evitar que recargue la página
        const todo = { id: ++id, ...formState}
        setTodoList(todoList.concat(todo))
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor='author'>Author</label>
                <input type='text' name='author' id='author' value={formState} onChange={handleChange}></input>
                <label htmlFor='todo'>Todo</label>
                <textarea name='todo' id='todo' cols='30' rows='10'></textarea>
                <button type = 'submit'>Add</button>
            </form>
            <div>
                {
                    todoList.map((todo) => (
                        <div key={todo.id}>
                            <h3> {todo.author} </h3>
                            <h4> {todo.title} </h4>
                            <p> {todo.todo} </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList
//FLUJO
// input author --> '' --> usuario --> 't' --> onChange
// onChange --> actualiza estado --> {author: 't'}
