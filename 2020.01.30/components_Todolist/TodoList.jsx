import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({todos,onToggle,onRemove}) => {
    console.log(todos.length);

    return (
        <div className='Todolist'>
            {todos.map((i) => {
                return(<TodoItem todo={i} key={i.id} onToggle={onToggle} onRemove={onRemove} />);
            })}
        </div>
    );
}

export default TodoList;