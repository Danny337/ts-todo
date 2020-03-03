import React, {useRef} from 'react';

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoFormRef: React.FC<TodoFormProps> = (props) => {
    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value);
            ref.current!.value = ''
        }
    }

    return (
        <div className="input-field mt2">
            <input type="text" name="title" id="title" placeholder='Введите название дела'
                ref={ref} onKeyPress={keyPressHandler} />
            <label htmlFor="title" className='active'>Введите название дела</label>
        </div>
    )
}