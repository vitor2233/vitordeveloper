import { useEffect, useState } from 'react';
import { Project } from './ProjectCard';
import styles from './ProjectDetail.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowSquareOut, CalendarBlank } from 'phosphor-react';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export function Repository() {
    const navigate = useNavigate();
    function handleBackClick() {
        navigate('/');
    }
    const { projectNumber } = useParams();
    const [publishedDateRelativeToNow, setPublishedDateRelativeToNow] = useState('');
    const [project, setProject] = useState({} as Project);
    useEffect(() => {
        fetch(`https://api.github.com/repos/vitor2233/blog-projects/issues/${projectNumber}`, {
            method: "GET",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setProject({
                    title: data.title,
                    body: data.body,
                    updatedAt: data.updated_at,
                    issueNumber: data.number
                })
                setPublishedDateRelativeToNow(formatDistanceToNow(data.updated_at, {
                    locale: ptBR,
                    addSuffix: true
                }));

            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <main>
            <div className={styles.mainRepo}>
                <div className={styles.repoButtons}>
                    <a onClick={handleBackClick}>VOLTAR</a>
                    <a className={styles.githubRedirect} href='https://github.com/vitor2233?tab=repositories' target='_blank'>VER NO GITHUB <ArrowSquareOut className={styles.githubRedirectIcon} size={20} /></a>
                </div>
                <div className={styles.title}>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
                </div>
                <div className={styles.buttons}>
                    <a><CalendarBlank className={styles.iconCalendar} size={20} />
                        <time>{publishedDateRelativeToNow}</time>
                    </a>
                </div>
            </div>
            <div className={styles.repoBody}>
                <pre>
                    {project.body}
                </pre>
            </div>
        </main>
    )
}