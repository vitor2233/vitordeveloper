import { ChangeEvent, useEffect, useState } from 'react';
import styles from './Repositories.module.css'
import { Project, ProjectCard } from './ProjectCard';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export function Repositories() {
    const [projects, setProjects] = useState([] as Project[]);
    const [newSearchText, setNewSearchText] = useState('');
    const [loadingProjects, setLoadingProjects] = useState(true);
    const [isFiltered, setFiltered] = useState(false);
    const [quantityOfProjects, setQuantityOfProjects] = useState(0);
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
                        updatedAt: project.updated_at,
                        issueNumber: project.number
                    })
                }
                setQuantityOfProjects(data.items.length);
                setProjects(projectToAdd);
                setLoadingProjects(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    function handleSearch(event: any) {
        if (isFiltered) return
        setLoadingProjects(true);
        event?.preventDefault()
        fetch(`https://api.github.com/search/issues?q=${newSearchText}+repo:vitor2233/blog-projects`, {
            method: "GET",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28',
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                const projectToAdd = []
                if (data.items.length == 0) {
                    setFiltered(false);
                    setLoadingProjects(false);
                    return;
                }
                for (let i = 0; i < data.items.length; i++) {
                    const project = data.items[i];
                    projectToAdd.push({
                        title: project.title,
                        body: project.body,
                        updatedAt: project.updated_at,
                        issueNumber: project.number
                    })
                }
                setQuantityOfProjects(data.items.length);
                setProjects(projectToAdd);
                setLoadingProjects(false);
                setFiltered(true);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
        setNewSearchText('')
    }

    function handleNewSearchChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('')
        setNewSearchText(event.target.value)
    }

    function handleKeyUp(event: any) {
        if (event.key === 'Enter') {
            handleSearch(event)
        } else {
            setFiltered(false);
        }
    }

    return (
        <div className={styles.repositories}>
            <div className={styles.searchRepository}>
                <div className={styles.searchText}>
                    <small>{quantityOfProjects} publicações</small>
                </div>
                <input
                    onKeyUp={handleKeyUp}
                    value={newSearchText}
                    onChange={handleNewSearchChange}
                    onBlur={handleSearch}
                    className={styles.searchInput}
                    type="text" placeholder='Buscar tecnologias ou conteúdo'
                />
            </div>
            <div className={styles.cards}>
                {loadingProjects ? (
                    <div className={styles.skeletons}>
                        <Skeleton baseColor='#0000' height={40} width={200} count={5} />
                        <Skeleton baseColor='#0000' height={40} width={200} count={5} />
                        <Skeleton baseColor='#0000' height={40} width={200} count={5} />
                    </div>
                ) : projects.map(project => {
                    return (
                        <ProjectCard
                            key={project.issueNumber}
                            title={project.title}
                            body={project.body}
                            updatedAt={project.updatedAt}
                            issueNumber={project.issueNumber}
                        />
                    );
                })}
            </div>
        </div>
    );
}