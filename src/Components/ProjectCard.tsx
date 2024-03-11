import { useNavigate } from 'react-router-dom';
import styles from './ProjectCard.module.css';
import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export interface Project {
    title: string;
    body: string;
    updatedAt: Date;
    issueNumber: number;
}

export function ProjectCard({ title, body, updatedAt, issueNumber }: Project) {
    const navigate = useNavigate();
    const publishedDateFormatted = format(updatedAt, "d 'de' LLLL 'às' HH:mm'h'",
        { locale: ptBR })
    const publishedDateRelativeToNow = formatDistanceToNow(updatedAt, {
        locale: ptBR,
        addSuffix: true
    })
    function handleCardClick() {
        navigate('/projetos/' + issueNumber);
    }
    return (
        <div className={styles.cardRepo} onClick={handleCardClick}>
            <div className={styles.cardHeader}>
                <p>{title}</p>
                <time title={publishedDateFormatted}>{publishedDateRelativeToNow}</time>
            </div>
            <div className={styles.cardBody}>
                <pre>{body}</pre>
            </div>
        </div>
    )
}