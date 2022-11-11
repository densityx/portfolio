import {
    Accordion,
    Avatar,
    Badge,
    Box,
    Container,
    createStyles,
    Grid,
    List,
    MediaQuery,
    SimpleGrid,
    Table,
    Text,
    ThemeIcon,
    Title,
    Tooltip
} from '@mantine/core';
import Head from 'next/head';
import {IconMapPin, IconStar} from "@tabler/icons";

interface LanguageProps {
    id: number;
    name: string;
    level: string;
}

interface MeProps {
    name: string;
    role: string;
    languages: LanguageProps[];
    description: string;
    birthday: string;
    phone: string;
    email: string;
    github: string;
    linkedIn: string;
    location: string
}

const ME: MeProps = {
    name: 'Ahmad Abdul Aziz',
    role: 'Software Engineer (Focusing on the Front-end Side)',
    languages: [
        {
            id: 1,
            name: 'English',
            level: 'Full professional proficiency',
        },
        {
            id: 2,
            name: 'Bahasa Malaysia',
            level: 'Professional working proficiency',
        },
        {
            id: 3,
            name: 'Bahasa Indonesia',
            level: 'Professional working proficiency',
        }
    ],
    description: 'A very passionate front-end developer that has what it takes to design, prototype, and develop web-based applications. Capable of building applications from medium to large scale using modern web technologies and best practices. Possesses good communication skills, fast learner, is goal-oriented, always open to any new inspiration, and able to work independently or as part of a team. Day-to-day development includes NextJs, ReactJs, VueJs, TailwindCSS, and Laravel.',
    birthday: '29 July 1997',
    phone: '(+60) 17 629 7140',
    email: 'ahmadaziz97@live.com',
    github: 'github.com/densityx',
    linkedIn: 'linkedin.com/in/densityx',
    location: 'Petaling Jaya / Kuala Lumpur, Malaysia'
};

interface SkillsHighlightProps {
    id: number;
    name: string;
}

const SKILLS_HIGHLIGHT: SkillsHighlightProps[] = [
    {id: 1, name: 'NextJs, React, NuxtJs, Vue'},
    {id: 2, name: 'Laravel, Filament PHP, Nova'},
    {id: 3, name: 'Figma, Adobe XD, Sketch'},
    {id: 4, name: 'Tailwind CSS, Bootstrap 5, MUI, Mantine'},
    {id: 5, name: 'PostgreSQL, MySQL, Firebase'},
    {id: 5, name: 'HTML, CSS, JavaScript, TypeScript'},
];

interface ExperienceProps {
    id: number;
    name: string;
    company: string;
    start: string;
    end: string;
    location: string;
    description: string;
}

const EXPERIENCE: ExperienceProps[] = [
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

interface EducationProps {
    id: number;
    name: string;
    course: string;
    start: string;
    end: string;
    location: string;
}

const EDUCATION: EducationProps[] = [
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

interface HonorsProps {
    id: number;
    name: string;
    from: string;
    year: string;
    description: string;
}

const HONORS: HonorsProps[] = [
    {
        id: 1,
        name: 'First Class Honours',
        from: 'University of Greenwich',
        year: 'Nov 2019',
        description: 'Bsc. (Hons) Computing First Class Honours',
    },
    {
        id: 1,
        name: 'SIRIM Invention, Innovation & Technology Expo (SI2TE)\n',
        from: 'SIRIM',
        year: 'Apr 2018',
        description: 'Participated in SIRIM Invention, Innovation & Technology Expo (SI2TE) 2018 and won Bronze award.',
    },
];

interface SkillsProps {
    id: number;
    name: string;
    skills: string[];
}

const SKILLS: SkillsProps[] = [
    {
        id: 1,
        name: 'Languages',
        skills: [
            'PHP',
            'JavaScript',
            'Dart',
            'HTML',
            'CSS',
        ],
    },
    {
        id: 2,
        name: 'Front end',
        skills: [
            'ReactJs',
            'VueJs',
            'AlpineJs',
            'Sass',
            'Tailwind CSS',
        ],
    },
    {
        id: 3,
        name: 'Back end',
        skills: [
            'Laravel',
            'NuxtJs',
            'NextJs',
            'Strapi CMS'
        ],
    },
    {
        id: 4,
        name: 'Databases',
        skills: [
            'MySQL',
            'PostgreSQL',
            'NeSQL (Firebase)',
        ],
    },
    {
        id: 5,
        name: 'Designing',
        skills: [
            'Figma',
            'Sketch',
            'Adobe XD',
            'Framer',
        ],
    },
    {
        id: 6,
        name: 'Other',
        skills: [
            'Git',
            'AJAX',
            'Consuming API',
            'Flutter UI',
        ],
    },
];

const useStyles = createStyles((theme) => ({
    card: {
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
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
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
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

interface HonorAccordionItemProps {
    honor: {
        id: number;
        name: string;
        from: string;
        year: string;
        description: string;
    }
}

const HonorAccordionItem = ({honor}: HonorAccordionItemProps) => (
    <Accordion.Item value={honor.name}>
        <Accordion.Control>
            <Text component={'p'} weight={600} my={0}>
                {honor.name}
            </Text>
        </Accordion.Control>
        <Accordion.Panel>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <Text component={'p'} my={0} fz={18} fw={500} color={'blue.6'}>
                    {honor.from}
                </Text>

                <Box sx={{display: 'flex'}} ml={12}>
                    <Text component={'p'} my={0} fz={14} fw={500}>
                        {honor.year}
                    </Text>
                </Box>
            </Box>

            <Text component={'p'} mb={0}>
                {honor.description}
            </Text>
        </Accordion.Panel>
    </Accordion.Item>
)


export default function Home() {
    const {classes} = useStyles();

    return (
        <Container>
            <Head>
                <title>Ahmad Abdul Aziz Portfolio</title>
                <meta name="description" content="Ahmad Abdul Aziz Portfolio built with NextJs and Mantine UI"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Box
                className={classes.card} mt={12}
                ta={'center'}
                sx={{
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Avatar
                    variant="filled"
                    size="xl"
                    color="teal"
                    radius="xl"
                >
                    AA
                </Avatar>

                <Title sx={{zIndex: 2}} mt={16} order={2} weight={500}>
                    {ME.name}
                </Title>

                <Text component="p">
                    {ME.role}
                </Text>

                <Text sx={{display: 'flex', alignItems: 'center'}} component={'p'} my={0}>
                    <IconMapPin size={14}/>
                    <Text component={'span'} fz={14} ml={4}>
                        {ME.location}
                    </Text>
                </Text>

                <MediaQuery smallerThan="md" styles={{display: 'none'}}>
                    <Box sx={{position: 'absolute', right: -80, bottom: -100, zIndex: 1}}>
                        <img width={300} src="/images/bg.png" alt="background"/>
                    </Box>
                </MediaQuery>
            </Box>

            <SimpleGrid mt={12} breakpoints={[
                {minWidth: 'xs', cols: 2},
                {minWidth: 'md', cols: 4},
                {minWidth: 'lg', cols: 6},
            ]}>
                {SKILLS_HIGHLIGHT.map(skill => (
                    <Box className={classes.highlight} key={skill.id}>
                        <Text fz={14} fw={500}>{skill.name}</Text>
                    </Box>
                ))}
            </SimpleGrid>

            <SectionTitle title={'About Me'} sx={{mt: 16}}/>

            <Grid gutter={'xl'}>
                <Grid.Col sm={12} lg={4}>
                    <Box className={classes.card}>
                        <List
                            spacing="xs"
                            size="sm"
                            center
                            icon={
                                <ThemeIcon color="teal.3" size={24} radius="xl">
                                    <IconStar size={16}/>
                                </ThemeIcon>
                            }
                            mt={12}
                        >
                            <List.Item>
                                {ME.birthday}
                            </List.Item>
                            <List.Item>
                                {ME.phone}
                            </List.Item>
                            <List.Item>
                                {ME.email}
                            </List.Item>
                            <List.Item>
                                <a href={'https://' + ME.github} target="_blank" rel="noopener noreferrer">
                                    {ME.github}
                                </a>
                            </List.Item>
                            <List.Item>
                                <a href={'https://' + ME.linkedIn} target="_blank" rel="noopener noreferrer">
                                    {ME.linkedIn}
                                </a>
                            </List.Item>
                        </List>

                        <Box mt={12}>
                            {ME.languages.map((language: LanguageProps) => (
                                <Tooltip label={language.level} key={language.id}>
                                    <Badge
                                        variant={'outline'}
                                        mr={4}
                                        mb={4}
                                        color={'gray.6'}
                                        key={language.id}
                                        sx={{
                                            '&:hover': {
                                                cursor: 'pointer'
                                            }
                                        }}
                                    >
                                        {language.name}
                                    </Badge>
                                </Tooltip>
                            ))}
                        </Box>
                    </Box>
                </Grid.Col>

                <Grid.Col sm={12} lg={8}>
                    <Box className={classes.card}>
                        <Text component={'p'} my={0}>
                            {ME.description}
                        </Text>
                    </Box>
                </Grid.Col>
            </Grid>

            <Box>
                <SectionTitle title={'Skills'} sx={{mt: 16}}/>

                <Table highlightOnHover withColumnBorders horizontalSpacing={'lg'} verticalSpacing={'lg'}>
                    <tbody>
                    {SKILLS.map((skill) => (
                        <tr key={skill.id}>
                            <td>
                                {skill.name}
                            </td>
                            <td>
                                {skill.skills.join(' - ')}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </Table>
            </Box>

            <Box>
                <SectionTitle title={'Working Experience'} sx={{mt: 16}}/>

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

            <Box>
                <SectionTitle title={'Honors & Awards'} sx={{mt: 16}}/>

                <Accordion variant="filled" defaultValue={HONORS[0].name} mt={12}>
                    {HONORS.map(honor => (
                        <HonorAccordionItem honor={honor} key={honor.id}/>
                    ))}
                </Accordion>
            </Box>

            <Box mb={10}>
                <Text component={'p'} my={0}></Text>
            </Box>
        </Container>
    )
}
