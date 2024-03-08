import styles from './ProjectCard.module.css'

export interface Project {
    title: string;
    body: string;
    updatedAt: Date;
}

export function ProjectCard({ title, body, updatedAt }: Project) {
    return (
        <div className={styles.cardRepo}>
            <div className={styles.cardHeader}>
                <p>{title}</p>
                <small>{updatedAt.toString()}</small>
            </div>
            <div className={styles.cardBody}>
                <p>{body}</p>
            </div>
        </div>
    )
}