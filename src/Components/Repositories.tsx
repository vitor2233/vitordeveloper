import { useEffect, useState } from 'react';
import styles from './Repositories.module.css'
import { Project, ProjectCard } from './ProjectCard';

export function Repositories() {
    const [projects, setProjects] = useState([] as Project[]);
    useEffect(() => {
        fetch('https://api.github.com/search/issues?q=repo:vitor2233/blog-projects', {
            method: "GET",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                const projectToAdd = []
                for (let i = 0; i < data.items.length; i++) {
                    const project = data.items[i];
                    projectToAdd.push({
                        title: project.title,
                        body: project.body,
                        updatedAt: project.updated_at
                    })
                }
                setProjects(projectToAdd);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className={styles.repositories}>
            <div className={styles.searchRepository}>
                <form>
                    <div className={styles.searchText}>
                        <p>Publicações</p>
                        <small>6 publicações</small>
                    </div>
                    <input className={styles.searchInput} type="text" placeholder='Buscar conteúdo' />
                </form>
            </div>
            <div className={styles.cards}>
                {projects.map(project => {
                    return (
                        <ProjectCard
                            title={project.title}
                            body={project.body}
                            updatedAt={project.updatedAt}
                        />
                    );
                })}
            </div>
        </div>
    );
}