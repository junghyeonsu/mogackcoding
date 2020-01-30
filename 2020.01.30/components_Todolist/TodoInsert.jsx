import React from 'react';
import {MdAdd} from 'react-icons/md';
import './TodoInsert.scss';


const TodoInsert = ({onInsert}) => {
    
    const [value,setValue] = React.useState('');
    
    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        onInsert(value);
        e.preventDefault();
        setValue('');
    }
    
    return (
        <form onSubmit={onSubmitForm} className='TodoInsert'>
            
            <input 
            type="text" 
            onChange={onChangeInput}
            value={value}
            placeholder="안녕하세요? 저는 현수에요" 
            />
            
            <button><MdAdd /></button>

        </form>
    );
}



export default TodoInsert;