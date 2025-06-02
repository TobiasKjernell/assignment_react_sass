import { useState } from 'react';
import './form.scss';
import type { IProduct } from '../../utils/interfaces';

interface IForm {
    onAddItems: (value: IProduct) => void;
}

const Form = ({ onAddItems, }: IForm) => {
    const [quantity, setQuantity] = useState<number>(1);
    const [description, setDescription] = useState<string>("");

    const handleSubmit = (e: { preventDefault: () => void; }): void => {

        e.preventDefault();
        if (!description) return;

        const newItem: IProduct = { description, quantity, packed: false, id: Date.now()}
        onAddItems(newItem);

        setDescription("");
        setQuantity(1);
    }

    return (
        <form className='form' onSubmit={handleSubmit}>
            <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input type="text" placeholder='Add your item..' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='form__btn'>Add</button>
        </form>
    )
}

export default Form;