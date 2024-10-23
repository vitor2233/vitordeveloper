import { Buildings, Envelope, GitCommit } from 'phosphor-react'
import styles from './Profile.module.css'
import { useEffect, useState } from 'react';
import logo from '../assets/cloud-practitioner.png';

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
                <img className={styles.cloudBadge} src={logo} alt="AWS Cloud Practitioner Badge" onClick={() => window.open('https://www.credly.com/badges/7f5f1c84-258a-4355-89af-7b62839769e7', '_blank')} />
            </aside>
            <main className={styles.profileInformation}>
                <div>
                    <h2 className={styles.firstName}>{githubInformation.name}</h2>
                </div>
                <div>
                    <p className={styles.description}>Desenvolvedor backend com mais de 4 anos de experiência em C# e Angular. Minhas habilidades também se estendem para Node.js e Flutter, o que me permite criar soluções robustas e eficientes tanto para web quanto para dispositivos móveis. Sou formado em Sistemas de Informação pela Faculdade UNA, possuo curso técnico em TI pelo SENAI e também a certificação AWS Cloud Practitioner. Sou apaixonado por resolver desafios complexos e estou constantemente buscando aprender e me aprimorar.</p>
                </div>
                <div className={styles.buttons}>
                    <a
                        href={githubInformation.githubUrl} target='_blank'>
                        <GitCommit className={styles.iconProfile} size={20} />{githubUsername}
                    </a>
                    <a className={styles.companyRef}><Buildings className={styles.iconProfile} size={20} />{githubInformation.company}</a>
                    <a href='mailto:vitorguilherme2233@gmail.com'><Envelope className={styles.iconProfile} size={20} />E-mail</a>
                </div>
            </main>
        </div>
    )
}