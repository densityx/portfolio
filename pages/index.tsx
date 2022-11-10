import {Accordion, Avatar, Badge, Box, Container, createStyles, Grid, Text, Title} from '@mantine/core';
import Head from 'next/head';
import {IconMapPin} from "@tabler/icons";
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

const SKILLS_HIGHLIGHT = [
    {id: 1, name: 'NextJs (React)'},
    {id: 2, name: 'NextJs (Vue)'},
    {id: 3, name: 'Laravel PHP'},
    {id: 4, name: 'Tailwind CSS, Bootstrap 5'},
    {id: 5, name: 'PostgreSQL'},
];

const EXPERIENCE = [
    {
        id: 1,
        name: 'Software Engineer',
        company: 'ValueLabs',
        start: 'Mar 2022',
        end: 'Present',
        location: 'Petaling Jaya, Malaysia',
        description: 'Responsible to develop and integrate CGC imSME Admin and Client Portal which makes use of Strapi, Next Js, Meilisearch, TailwindCSS, LeafletJS, SwiperJs, PlyrJs and Material UI Framework.'
    },
    {
        id: 2,
        name: 'Frontend Web Developer',
        company: 'Involve Asia',
        start: 'May 2019',
        end: 'Mar 2022',
        location: 'Kuala Lumpur, Malaysia',
        description: 'Focusing on the Frontend side of the platform\n' +
            '- Involve Asia platform frontend\n' +
            '- Boost Cashup frontend\n' +
            '- ProductLink frontend\n' +
            '- ProductNation frontend'
    },
    {
        id: 3,
        name: 'Full Stack Web Developer Internship',
        company: 'AppAsia Berhad',
        start: 'May 2018',
        end: 'Aug 2018',
        location: 'Kuala Lumpur, Malaysia',
        description: 'I work as a Full Stack Web Developer to build both client as well as company website that make use of PHP, WordPress, JS, Bootstrap 4 as the main technology stack.'
    },
];

const EDUCATION = [
    {
        id: 1,
        name: 'University of Greenwich',
        course: 'BSc (Hons) ComputingComputer Software Engineering',
        start: '2016',
        end: '2019',
        location: 'Kuala Lumpur, Malaysia',
    },
    {
        id: 2,
        name: 'Segi College Kuala Lumpur',
        course: 'Foundation in Information Technology',
        start: '2015',
        end: '2016',
        location: 'Kuala Lumpur, Malaysia',
    },
    {
        id: 3,
        name: 'Adni International Islamic School',
        course: 'Science Stream',
        start: '2010',
        end: '2015',
        location: 'Kuala Lumpur, Malaysia',
    }
];

const useStyles = createStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 12,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
        /*cursor: 'pointer',*/
        /*'&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
        },*/
    },
    highlight: {
        backgroundColor: theme.colors.gray[1],
        padding: theme.spacing.lg,
        borderRadius: theme.radius.lg,
        height: '100px'
    }
}));

interface SectionTitleProps {
    title: string;
    sx?: any;
}

const SectionTitle = ({title, sx}: SectionTitleProps) => (
    <Box p={16} {...sx}>
        <Title fz={24}>
            {title}
        </Title>
    </Box>
)

interface ExperienceAccordionItemProps {
    experience: {
        id: number;
        name: string;
        company: string;
        start: string;
        end: string;
        description: string;
        location: string;
    }
}

const ExperienceAccordionItem = ({experience}: ExperienceAccordionItemProps) => (
    <Accordion.Item value={experience.company}>
        <Accordion.Control>
            <Text component={'p'} weight={600} my={0}>
                {experience.name}

                {experience.id === 1 && (
                    <Badge
                        ml={4}
                        variant="gradient"
                        gradient={{from: 'teal', to: 'blue', deg: 60}}
                        component={'span'}
                    >
                        Current
                    </Badge>
                )}
            </Text>
        </Accordion.Control>
        <Accordion.Panel>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Text component={'p'} my={0} fz={18} fw={500} color={'blue.6'}>
                    {experience.company}
                </Text>

                <Box sx={{display: 'flex'}} ml={12}>
                    <Text component={'p'} my={0} fz={14} fw={500}>
                        {experience.start}
                        <Text component={'span'} px={4}>
                            -
                        </Text>
                        {experience.end}
                    </Text>
                </Box>
            </Box>

            <Text component={'p'} mb={0} fz={14}>
                {experience.description}
            </Text>

            <Text sx={{display: 'flex', alignItems: 'center'}} component={'p'} mb={0}>
                <IconMapPin size={14}/>
                <Text component={'span'} fz={14} ml={4}>
                    {experience.location}
                </Text>
            </Text>
        </Accordion.Panel>
    </Accordion.Item>
)

interface EducationAccordionItemProps {
    education: {
        id: number;
        name: string;
        course: string;
        start: string;
        end: string;
        location: string;
    }
}

const EducationAccordionItem = ({education}: EducationAccordionItemProps) => (
    <Accordion.Item value={education.name}>
        <Accordion.Control>
            <Text component={'p'} weight={600} my={0}>
                {education.name}

                {education.id === 1 && (
                    <Badge
                        ml={4}
                        variant="gradient"
                        gradient={{from: 'teal', to: 'blue', deg: 60}}
                        component={'span'}
                    >
                        Batch of 2019
                    </Badge>
                )}
            </Text>
        </Accordion.Control>
        <Accordion.Panel>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Text component={'p'} my={0} fz={18} fw={500} color={'blue.6'}>
                    {education.course}
                </Text>

                <Box sx={{display: 'flex'}} ml={12}>
                    <Text component={'p'} my={0} fz={14} fw={500}>
                        {education.start}
                        <Text component={'span'} px={4}>
                            -
                        </Text>
                        {education.end}
                    </Text>
                </Box>
            </Box>

            {/*<Text component={'p'} mb={0}>
                {education.description}
            </Text>*/}

            <Text sx={{display: 'flex', alignItems: 'center'}} component={'p'} mb={0}>
                <IconMapPin size={14}/>
                <Text component={'span'} fz={14} ml={4}>
                    {education.location}
                </Text>
            </Text>
        </Accordion.Panel>
    </Accordion.Item>
)

export default function Home() {
    const {classes} = useStyles();

    return (
        <Container>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Box
                className={classes.card}
                ta={'center'}
            >
                <Avatar
                    variant="filled"
                    size="xl"
                    color="teal"
                    radius="xl"
                >
                    AA
                </Avatar>

                <Title mt={16} order={2} weight={500}>Ahmad Abdul Aziz</Title>
                <Text component="p">Software Engineer (Focusing on the Front-end Side)</Text>
            </Box>

            <Grid mt={12}>
                {SKILLS_HIGHLIGHT.map(skill => (
                    <Grid.Col span={2} key={skill.id}>
                        <Box className={classes.highlight}>
                            {skill.name}
                        </Box>
                    </Grid.Col>
                ))}
            </Grid>

            <Box className={classes.card}>
                <Text component={'p'} my={0}>
                    A very passionate front-end developer that has what it takes to design, prototype, and develop
                    web-based applications. Capable of building applications from medium to large scale using modern web
                    technologies and best practices. Possesses good communication skills, fast learner, is
                    goal-oriented, always open to any new inspiration, and able to work independently or as part of a
                    team. Day-to-day development includes NextJs, ReactJs, VueJs, TailwindCSS, and Laravel.
                </Text>
            </Box>

            <Box>
                <SectionTitle title={'Experience'} sx={{mt: 16}}/>

                <Accordion variant="filled" defaultValue={EXPERIENCE[0].company} mt={12}>
                    {EXPERIENCE.map(experience => (
                        <ExperienceAccordionItem experience={experience} key={experience.id}/>
                    ))}
                </Accordion>
            </Box>

            <Box>
                <SectionTitle title={'Education'} sx={{mt: 16}}/>

                <Accordion variant="filled" defaultValue={EDUCATION[0].name} mt={12}>
                    {EDUCATION.map(education => (
                        <EducationAccordionItem education={education} key={education.id}/>
                    ))}
                </Accordion>
            </Box>

            <Box mb={10}>
                <Text component={'p'} my={0}></Text>
            </Box>
        </Container>
    )
}
