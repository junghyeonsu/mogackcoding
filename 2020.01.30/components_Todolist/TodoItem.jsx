import React,{memo} from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoItem.scss';

const TodoItem = ({todo,onRemove,onToggle}) => {
    const {id,checked,text} = todo;

    return (
        <div className="TodoItem">
        <div className ={cn('checkbox',{checked})} onClick={() => onToggle(id)}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div className="text">{text}</div>
        </div>
        <div className="remove" onClick={() => onRemove(id)}>
            <MdRemoveCircleOutline/>
        </div>
    </div>
    );
}

export default memo(TodoItem);