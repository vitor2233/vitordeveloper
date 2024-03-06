import styles from './Header.module.css'
import leftHeader from '../assets/left-header.svg'
import rightHeader from '../assets/right-header.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={leftHeader} />
            <img src={rightHeader} />
        </header>
    )
}