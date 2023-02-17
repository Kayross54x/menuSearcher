import React from 'react';
import { CgSearch } from 'react-icons/cg'

import styles from './Searcher.module.scss';

interface IProps {
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export default function Searcher (props: IProps) {
    const { search, setSearch } = props;

    return (
        <div className={styles.searcher}>
            <input 
                placeholder='Buscar...'
                type="text" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <CgSearch 
                cursor='pointer' 
                size={20}
                color='#4C4D5E'
            />
        </div>
    )
}