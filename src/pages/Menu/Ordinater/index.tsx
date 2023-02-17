import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import styles from './Ordinater.module.scss';
import options from './options.json';
import classNames from 'classnames';

export type OpcoesOrdenador = "" | "porcao" | "qtd_pessoas" | "preco";

interface Props{
    ordenator: OpcoesOrdenador,
    setOrdenator: React.Dispatch<React.SetStateAction<OpcoesOrdenador>>
}

export function Ordinater({ordenator, setOrdenator}: Props) {
    const [open, setOpen] = useState<boolean>(false);
    const ordenatorName = ordenator && options.find(o => o.value === ordenator)?.nome;

    return (
        <button
            className={classNames({
                [styles.ordinater]: true,
                [styles["ordinater--active"]]: ordenator !== ""
            })}
            onClick={() => setOpen(!open)}
            onBlur={() => setOpen(false)} //clicar fora pra fechar
        >
            <span>{ordenatorName || "Ordenar por"}</span>
            {open ? <MdKeyboardArrowUp size={20} /> : <MdKeyboardArrowDown size={20} />}
            <div className={classNames({
                [styles.ordinater__options]: true,
                [styles["ordinater__options--active"]]: open
            })}>
                {options.map((option) => (
                    <div className={styles.ordinater__option} key={option.value} onClick={() => setOrdenator(option.value as OpcoesOrdenador)}>
                        {option.nome}
                    </div>
                ))}
            </div>
        </button>
    )
}