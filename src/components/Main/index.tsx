import { useState } from 'react';
import type { IProduct } from '../../utils/interfaces';
import Form from '../Form';
import './main.scss';
import ProductItem from '../ProductItem';

const Main = () => {
    const [items, setItems] = useState<IProduct[]>(() => {

        const savedInfo = localStorage.getItem('items');
        if (!savedInfo) return [];

        const initValue: IProduct[] = JSON.parse(savedInfo);
        return initValue;

    });

    const handleOnDelteItems = (id: number): void => {
        const newItems: IProduct[] = items.filter(item => item.id !== id)
        setItems(newItems)
        localStorage.setItem('items', JSON.stringify(newItems))
    }

    const handleOnAddItems = (value: IProduct) => {
        setItems([...items, value]);
        localStorage.setItem('items', JSON.stringify([...items, value]))
    }

    const handleToggleItem = (value: number): void => {
        const updatedItems = items.map(item => item.id === value ? { ...item, packed: !item.packed } : item);
        setItems(updatedItems)
        localStorage.setItem('items', JSON.stringify(updatedItems))
    }

    return (

        <main className="main">
            <Form onAddItems={handleOnAddItems} />
            {items.length > 0 && <ul className='main__content'>
                {items && items.map((item: IProduct, index: number) => <ProductItem product={item} onDelete={handleOnDelteItems} onToggleCheckbox={handleToggleItem} key={index} />)}
            </ul>}
        </main>
    )
}

export default Main;