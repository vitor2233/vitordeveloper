import { useEffect } from 'react';
import styles from './Repositories.module.css'

export function Repositories() {
    //const [projectsUrl, setProjectsUrl] = useState('https://api.github.com/search/issues?q=repo:vitor2233/blog-projects');
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
                console.log(data); // Log the extracted JSON data
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
                <div className={styles.cardRepo}>
                    <div className={styles.cardHeader}>
                        <p>Parafuso Inteligente</p>
                        <small>Há 1 dia</small>
                    </div>
                    <div className={styles.cardBody}>
                        <p>
                            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These
                        </p>
                    </div>
                </div>
                <div className={styles.cardRepo}>
                    <div className={styles.cardHeader}>
                        <p>Stefany Sthetics</p>
                        <small>Há 1 dia</small>
                    </div>
                    <div className={styles.cardBody}>
                        <p>
                            Programming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, buProgramming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, buProgramming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, buProgramming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, but theseProgramming languages all have built-in data structures, but theset theset theset these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}