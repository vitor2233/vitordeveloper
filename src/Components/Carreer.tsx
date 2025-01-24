import { Col, Row, Timeline } from 'antd';
import styles from './Carreer.module.css'
import { useState } from 'react';
import { FaAngular, FaAws, FaBluetooth, FaCss3Alt, FaDocker, FaHtml5, FaJsSquare, FaNodeJs, FaReact } from 'react-icons/fa';
import { SiAngular, SiAuth0, SiDotnet, SiGithubactions, SiKubernetes, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { FaFlutter } from 'react-icons/fa6';
interface CardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
}
const cardsGroup0 = [
  {
    id: 1,
    icon: <TbBrandCSharp size={40} color="#512BD4" />,
    title: "C#",
    description: "Linguagem de programação",
  },
  {
    id: 2,
    icon: <SiDotnet size={40} color="#512BD4" />,
    title: ".NET",
    description: "Framework de desenvolvimento",
  },
  {
    id: 3,
    icon: <FaHtml5 size={40} color="#E34F26" />,
    title: "HTML",
    description: "Linguagem de marcação",
  },
  {
    id: 4,
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    title: "CSS",
    description: "Cascading Style Sheets",
  },
  {
    id: 5,
    icon: <FaJsSquare size={40} color="#F7DF1E" />,
    title: "JavaScript",
    description: "Linguagem de programação",
  },
];
const cardsGroup1 = [
  {
    id: 1,
    icon: <TbBrandCSharp size={40} color="#512BD4" />,
    title: "C#",
    description: "Linguagem de programação",
  },
  {
    id: 2,
    icon: <SiDotnet size={40} color="#512BD4" />,
    title: ".NET",
    description: "Framework de desenvolvimento",
  },
  {
    id: 3,
    icon: <SiAngular size={40} color="#DD0031" />,
    title: "Angular",
    description: "Framework de construção de SPA",
  },
  {
    id: 4,
    icon: <FaFlutter size={40} color="#02569B" />,
    title: "Flutter",
    description: "Framework de desenvolvimento",
  },
  {
    id: 5,
    icon: <SiTypescript size={40} color="#3178C6" />,
    title: "TypeScript",
    description: "JavaScript com tipagem estática",
  },
  {
    id: 6,
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    title: "CSS",
    description: "Cascading Style Sheets",
  },
];

const cardsGroup2 = [
  {
    id: 1,
    icon: <TbBrandCSharp size={40} color="#512BD4" />,
    title: "C#",
    description: "Linguagem de programação",
  },
  {
    id: 2,
    icon: <SiDotnet size={40} color="#512BD4" />,
    title: ".NET",
    description: "Framework de desenvolvimento",
  },
  {
    id: 3,
    icon: <SiAngular size={40} color="#DD0031" />,
    title: "Angular",
    description: "Framework de construção de SPA",
  },
  {
    id: 4,
    icon: <FaFlutter size={40} color="#02569B" />,
    title: "Flutter",
    description: "Framework de desenvolvimento",
  },
  {
    id: 5,
    icon: <SiTypescript size={40} color="#3178C6" />,
    title: "TypeScript",
    description: "JavaScript com tipagem estática",
  },
  {
    id: 6,
    icon: <FaCss3Alt size={40} color="#1572B6" />,
    title: "CSS",
    description: "Cascading Style Sheets",
  },
  {
    id: 7,
    icon: <FaBluetooth size={40} color="#0077B5" />,
    title: "Bluetooth",
    description: "Comunicação entre dispositivos móveis",
  },
  {
    id: 8,
    icon: <SiAuth0 size={40} color="#4D90FE" />,
    title: "Autenticação",
    description: "Uso de protocolos OAuth2 e JWT",
  },
];

const cardsGroup3 = [
  {
    id: 1,
    icon: <TbBrandCSharp size={40} color="#512BD4" />,
    title: "C#",
    description: "Linguagem de programação",
  },
  {
    id: 2,
    icon: <SiDotnet size={40} color="#512BD4" />,
    title: ".NET",
    description: "Framework de desenvolvimento",
  },
  {
    id: 3,
    icon: <SiAuth0 size={40} color="#4D90FE" />,
    title: "Autenticação",
    description: "Uso de protocolos OAuth2 e JWT",
  },
  {
    id: 4,
    icon: <SiAngular size={40} color="#DD0031" />,
    title: "Angular",
    description: "Framework de construção de SPA",
  },
  {
    id: 5,
    icon: <SiTypescript size={40} color="#3178C6" />,
    title: "TypeScript",
    description: "JavaScript com tipagem estática",
  },
  {
    id: 1,
    icon: <FaAws size={40} color="#FF9900" />,
    title: "AWS",
    description: "Plataforma de nuvem",
  },
  {
    id: 2,
    icon: <FaNodeJs size={40} color="#68A063" />,
    title: "Node.js",
    description: "JavaScript no servidor",
  },
  {
    id: 3,
    icon: <FaDocker size={40} color="#2496ED" />,
    title: "Docker",
    description: "Envio e execução de containers",
  },
  {
    id: 4,
    icon: <SiKubernetes size={40} color="#326CE5" />,
    title: "Kubernetes",
    description: "Orquestração de containers",
  },
  {
    id: 5,
    icon: <SiGithubactions size={40} color="#2088FF" />,
    title: "Pipelines",
    description: "Automação de workflows",
  },
];

export function Carreer() {
  const [cards, setCards] = useState(cardsGroup0);

  // Função para alterar o estado com base no clique
  const handleItemClick = (groupId: number) => {
    switch (groupId) {
      case 0:
        setCards(cardsGroup0);
        break;
      case 1:
        setCards(cardsGroup1);
        break;
      case 2:
        setCards(cardsGroup2);
        break;
      case 3:
        setCards(cardsGroup3);
        break;
      default:
        setCards(cardsGroup0); // Definir o grupo padrão
        break;
    }
  };

  const Card: React.FC<CardProps> = ({ icon, title, description }) => (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.cardIcon}>{icon}</div>
        <div>
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.carreer}>
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12} className={styles.stepsContainer}>
          <Timeline className={styles.customTimeline}>
            <Timeline.Item color='#507687'>
              <div
                className={styles.timelineItem}
                onClick={() => handleItemClick(3)}
              >
                <span className={styles.timelineTitle}>Concert Technologies - Desenvolvedor Júnior</span>
                <br />
                <span className={styles.timelineSubtitle}>Fui responsável pela infraestrutura do backend dos projetos, assegurando que todos seguissem uma arquitetura limpa e padronizada, com foco na segurança dos dados. Além disso, atuei em um produto baseado em microserviços, implementando a comunicação entre os serviços utilizando Kafka e gRPC. Também desenvolvi pipelines para automação de deploy dos microserviços na AWS, utilizando Kubernetes para orquestração e escalabilidade.</span>
              </div>
            </Timeline.Item >
            <Timeline.Item color='#B8001F'>
              <div
                className={styles.timelineItem}
                onClick={() => handleItemClick(2)}
              >
                <span className={styles.timelineTitle}>Concert Technologies - Desenvolvedor Trainee</span>
                <br />
                <span className={styles.timelineSubtitle}>Fui responsável pelo desenvolvimento de APIs para diversos projetos, assegurando uma comunicação segura e eficiente, com foco na proteção das informações trafegadas entre o sistema backend e as plataformas mobile. Também atuei no desenvolvimento do aplicativo mobile, implementando a comunicação com dispositivos Bluetooth e garantindo a criptografia dos dados transmitidos, assegurando a integridade e segurança das informações.</span>
              </div>
            </Timeline.Item>
            <Timeline.Item color="#997C70">
              <div
                className={styles.timelineItem}
                onClick={() => handleItemClick(1)}
              >
                <span className={styles.timelineTitle}>Concert Technologies - Desenvolvedor estagiário</span>
                <br />
                <span className={styles.timelineSubtitle}>Fui responsável pelo desenvolvimento e criação de uma API, assegurando sua sincronização entre o aplicativo mobile e o ambiente web. Além disso, participei ativamente no desenvolvimento da aplicação mobile e na realização de manutenções no frontend da aplicação web, garantindo a melhoria contínua da experiência do usuário e a estabilidade do sistema.</span>
              </div>
            </Timeline.Item>
            <Timeline.Item color='#8EB486'>
              <div
                className={styles.timelineItem}
                onClick={() => handleItemClick(0)}
              >
                <span className={styles.timelineTitle}>SporTI - Desenvolvedor estagiário</span>
                <br />
                <span className={styles.timelineSubtitle}>Fui responsável por realizar manutenções e melhorias na API do produto, além de efetuar correções no frontend, com foco na melhoria das visualizações das páginas. Também atuei na geração de relatórios analíticos, facilitando o monitoramento de desempenho e contribuindo para a tomada de decisões com base em dados.</span>
              </div>
            </Timeline.Item>
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <Row gutter={[16, 16]}>
            {cards.map((card) => (
              <Col
                key={card.id}
                xs={24}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <Card
                  key={card.id}
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
}