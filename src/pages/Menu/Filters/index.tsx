import filters from './filters.json';
import styles from './Filters.module.scss';
import classNames from 'classnames';

type optionInterface = typeof filters[0];

interface IProps {
    filter: number | null,
    setFilter: React.Dispatch<React.SetStateAction<number | null>>
}

export default function Filters(props: IProps) {
    const { filter, setFilter } = props;
    
    function selectFilter(option: optionInterface) {
        if (option.id === filter) return setFilter(null);
        return setFilter(option.id);
    }
    
    return (
        <div className={styles.filters}>
            {filters.map((option) => (
                <button 
                    className={classNames({
                        [styles.filters__filter]: true,
                        [styles['filters__filter--active']]: filter === option.id,
                    })}
                    key={option.id} 
                    onClick={() => selectFilter(option)}
                > 
                    {option.label}
                </button>
            ))}
        </div>
    )
}