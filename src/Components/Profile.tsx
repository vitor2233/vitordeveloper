import { ArrowSquareOut, Buildings, Envelope, GitCommit } from 'phosphor-react'
import styles from './Profile.module.css'
import { useEffect, useState } from 'react';

interface GithubInformation {
    profileUrl: string;
    company: string;
    githubUrl: string;
    login: string;
    name: string;
}

export function Profile() {
    const [githubInformation, setGithubInformation] = useState({} as GithubInformation);
    const githubUsername = 'Vitor2233'
    useEffect(() => {
        fetch(`https://api.github.com/users/${githubUsername.toLowerCase()}`, {
            method: "GET",
            headers: {
                'X-GitHub-Api-Version': '2022-11-28'
            }
        })
            .then((response) => response.json())
            .then((data) => {
                setGithubInformation({
                    company: data.company,
                    githubUrl: data.html_url,
                    login: data.login,
                    name: data.name,
                    profileUrl: data.avatar_url
                })
            })
    }, []);

    return (
        <div className={styles.profile}>
            <aside className={styles.profileImage}>
                <img className={styles.avatar} src={githubInformation.profileUrl} />
            </aside>
            <main className={styles.profileInformation}>
                <div>
                    <h2 className={styles.firstName}>{githubInformation.name}</h2>
                    <a className={styles.githubRedirect} href={githubInformation.githubUrl} target='_blank'>GITHUB <ArrowSquareOut className={styles.githubRedirectIcon} size={20} /></a>
                </div>
                <div>
                    <p className={styles.description}>Sou um desenvolvedor backend com mais de 3 anos de experiência em C# e Angular. Minhas habilidades também se estendem para Node.js e Flutter, o que me permite criar soluções robustas e eficientes tanto para web quanto para dispositivos móveis. Sou formado em Sistemas de Informação pela Faculdade UNA e possuo um curso técnico em TI pelo SENAI. Apaixonado por resolver desafios complexos e estou constantemente buscando aprender e me aprimorar.</p>
                </div>
                <div className={styles.buttons}>
                    <a
                        href={githubInformation.githubUrl} target='_blank'>
                        <GitCommit className={styles.iconProfile} size={20} />{githubUsername}
                    </a>
                    <a><Buildings className={styles.iconProfile} size={20} />{githubInformation.company}</a>
                    <a href='mailto:vitorguilherme2233@gmail.com'><Envelope className={styles.iconProfile} size={20} />E-mail</a>
                </div>
            </main>
        </div>
    )
}