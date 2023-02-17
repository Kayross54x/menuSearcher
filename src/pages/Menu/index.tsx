import { useState } from 'react';

import Searcher from './Seacher';
import Filters from './Filters';
import {ReactComponent as Logo} from 'assets/logo.svg'
import Itens from './Itens';

import styles from './Menu.module.scss';
import { OpcoesOrdenador, Ordinater } from './Ordinater';

export default function Menu() {
    const [search, setSearch] = useState<string>('');
    const [filter, setFilter] = useState<number | null>(null);
    const [ordenator, setOrdenator] = useState<OpcoesOrdenador>("");

    return (
        <main>
            <nav className={styles.menu}>
                <Logo />
            </nav>

            <header className={styles.header}>
                <div className={styles.header__text}>A casa do código e da massa</div>
            </header>

            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__title}>Cardápio</h3>

                <Searcher 
                    search={search} 
                    setSearch={setSearch}
                />

                <div className={styles.cardapio__filters}>
                    <Filters filter={filter} setFilter={setFilter}/>
                    <Ordinater ordenator={ordenator} setOrdenator={setOrdenator}/>
                </div>

                <Itens search={search} filter={filter} ordinator={ordenator}/>
            </section>
        </main>
    );
}