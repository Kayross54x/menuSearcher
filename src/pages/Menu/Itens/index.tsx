import React, { useEffect, useState } from 'react';

import Item from './Item';
import itens from './itens.json';

import styles from './Itens.module.scss';

interface IProps {
    search: string,
    filter: number | null,
    ordinator: string
}

export default function Itens(props: IProps) {
    const { search, filter, ordinator } = props;
    const [list, setList] = useState(itens);

    useEffect(() => {
        const newList = itens.filter((item) => 
            testSearch(item.title) &&
            testFilter(item.category.id) 
        )

        setList(order(newList));
    }, [search, filter, ordinator]);

    function testSearch(title: string) {
        const regex = new RegExp(search, 'i'); //case insensitive

        return regex.test(title);
    }

    function testFilter(id: number) {
        if(filter !== null) return id === filter;
        return true;
    }

    function order(newList: typeof itens) {
        switch(ordinator) {
            case 'porcao':
                return newList.sort((a, b) => a.size < b.size ? 1 : -1)
            
            case 'qtd_pessoas': 
                return newList.sort((a, b) => a.serving < b.serving ? 1 : -1)
            
            case 'preco': 
                return newList.sort((a, b) => a.price < b.price ? 1 : -1)
            
            default:
                return newList
        }
    }

    return (
        <div className={styles.itens}>
            {list.map((item) => (
                <Item 
                    key={item.id}
                    {...item}
                />
            ))}
        </div>
    )
}
