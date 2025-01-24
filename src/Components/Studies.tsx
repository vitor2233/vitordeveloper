import { Col, Collapse, CollapseProps, Row, Tag } from 'antd';
import styles from './Studies.module.css';
import unaLogo from '../assets/una-svg.svg'
import rocketseatLogo from '../assets/rocketseat.svg'
import senaiLogo from '../assets/senai-logo.svg'
import cloudBadge from '../assets/cloud-practitioner.png'
export function Studies() {
    const items: CollapseProps['items'] = [
        {
            key: '1',
            label: (
                <div className={styles.collapseLabel}>
                    <span>Sistemas de informação - UNA</span>
                    <span className={styles.collapseYear}>2020 - 2024</span>
                </div>
            ),
            children: (
                <Row className={styles.collapseBody}>
                    <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                        <div >
                            <p>
                                Durante o curso de Sistemas de Informação, adquiri conhecimento e prática no desenvolvimento de sistemas completos dentro de sprints, utilizando metodologias ágeis como Scrum e Kanban. Além disso, foram explorados conceitos de gestão de projetos, programação orientada a resultados e colaboração em equipes multidisciplinares, garantindo entregas de qualidade alinhadas aos objetivos do negócio.
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Tag color="purple">.NET</Tag>
                                <Tag color="green">Gestão de Projetos</Tag>
                                <Tag color="orange">Cloud</Tag>
                                <Tag color="cyan">Arquitetura de Projetos</Tag>
                                <Tag color="volcano">Scrum</Tag>
                                <Tag color="geekblue">DevOps</Tag>
                                <Tag color="gold">Segurança da Informação</Tag>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={unaLogo}
                            className={styles.logoImage}
                        />
                    </Col>
                </Row>
            ),
        },
        {
            key: '2',
            label: (
                <div className={styles.collapseLabel}>
                    <span>Ignite - Rocketseat</span>
                    <span className={styles.collapseYear}>2023 - 2024</span>
                </div>
            ),
            children: (
                <Row className={styles.collapseBody}>
                    <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                        <div >
                            <p>
                                Durante o curso, adquiri conhecimentos fundamentais sobre boas práticas de codificação e arquitetura limpa para aplicações backend, com foco em Node.js e .NET. Além disso, explorei a conteinerização de aplicações utilizando Docker, a criação de pipelines para integração e entrega contínuas (CI/CD), e a implementação de testes unitários.
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Tag color="purple">.NET</Tag>
                                <Tag color="blue">Node.js</Tag>
                                <Tag color="green">NestJS</Tag>
                                <Tag color="orange">Docker</Tag>
                                <Tag color="magenta">Testes Unitários</Tag>
                                <Tag color="geekblue">DDD</Tag>
                                <Tag color="volcano">SOLID</Tag>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={rocketseatLogo}
                            className={styles.logoImage}
                        />
                    </Col>
                </Row>
            ),
        },
        {
            key: '3',
            label: (
                <div className={styles.collapseLabel}>
                    <span>Técnico em TI - SENAI</span>
                    <span className={styles.collapseYear}>2018 - 2019</span>
                </div>
            ),
            children: (
                <Row className={styles.collapseBody}>
                    <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                        <div >
                            <p>
                                O curso proporcionou meu primeiro contato com linguagens de programação, com foco no desenvolvimento de habilidades em lógica de programação e execução de projetos diversos. Durante essa formação, trabalhei com C# para o desenvolvimento de soluções backend, utilizei bancos de dados SQL para manipulação e armazenamento de dados, e desenvolvi aplicativos móveis utilizando o framework Flutter. Essa experiência me permitiu construir uma base sólida em programação, capacitando-me para atuar em diferentes contextos de desenvolvimento.
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Tag color="purple">C#</Tag>
                                <Tag color="blue">SQL</Tag>
                                <Tag color="green">POO</Tag>
                                <Tag color="orange">Banco de Dados</Tag>
                                <Tag color="cyan">Flutter</Tag>
                                <Tag color="magenta">Lógica de Programação</Tag>
                                <Tag color="geekblue">Desenvolvimento Backend</Tag>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            src={senaiLogo}
                            className={styles.logoImage}
                        />
                    </Col>
                </Row>
            ),
        },
        {
            key: '4',
            label: 'Certificações AWS',
            children: (
                <Row className={styles.collapseBody}>
                    <Col xs={24} sm={24} md={19} lg={19} xl={19}>
                        <div >
                            <p>
                                O conhecimento em AWS é essencial para desenvolvedores backend, pois permite a criação de soluções escaláveis e eficientes, aproveitando os recursos de computação em nuvem para otimizar desempenho, reduzir custos e garantir alta disponibilidade. Com a AWS, é possível integrar serviços flexíveis e seguros, fundamentais para aplicações modernas e distribuídas.
                            </p>
                            <div style={{ marginTop: '10px' }}>
                                <Tag color="purple">AWS</Tag>
                                <Tag color="blue">Cloud Computing</Tag>
                                <Tag color="green">Escalabilidade</Tag>
                                <Tag color="orange">Infraestrutura como Código</Tag>
                                <Tag color="cyan">Alta Disponibilidade</Tag>
                                <Tag color="magenta">Soluções Distribuídas</Tag>
                                <Tag color="geekblue">DevOps</Tag>
                                <Tag color="volcano">Segurança em Nuvem</Tag>
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={5} lg={5} xl={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <img
                            style={{ cursor: 'pointer' }}
                            onClick={() => window.open('https://www.credly.com/badges/7f5f1c84-258a-4355-89af-7b62839769e7', '_blank')}
                            src={cloudBadge}
                            className={styles.logoImage}
                        />
                    </Col>
                </Row>
            ),
        },
    ];
    return (
        <Row gutter={[16, 16]}>
            <Col
                xs={24}
                sm={24}
                md={24}
                lg={24}
                xl={24}
                style={{ display: "flex", justifyContent: "center" }}
            >
                <Collapse className={styles.collapse} items={items} style={{ color: '#fff' }} />
            </Col>
        </Row>
    );
}