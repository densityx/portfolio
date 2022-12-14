import {
    Accordion,
    ActionIcon,
    Avatar,
    Badge,
    Box,
    Button,
    Card,
    Center,
    Container,
    createStyles,
    Flex,
    Grid,
    Group,
    Image,
    List,
    MediaQuery,
    ScrollArea,
    SimpleGrid,
    Space,
    Stack,
    Table,
    Text,
    ThemeIcon,
    Title,
    Tooltip,
    useMantineColorScheme,
    useMantineTheme
} from '@mantine/core';
import Head from 'next/head';
import {
    IconAppWindow,
    IconBrandGithub,
    IconBrandLinkedin,
    IconCoffee,
    IconDatabase,
    IconDotsDiagonal,
    IconExternalLink,
    IconHeart,
    IconLanguage,
    IconMail,
    IconMapPin,
    IconMoonStars,
    IconPhone,
    IconScribble,
    IconServer,
    IconStar,
    IconSun
} from "@tabler/icons";
import {Carousel} from "@mantine/carousel";
import {useScrollIntoView} from '@mantine/hooks';
import {useState} from "react";

interface LanguageProps {
    id: number;
    name: string;
    level: string;
}

interface MeProps {
    name: string;
    role: string;
    poster: string;
    languages: LanguageProps[];
    description: string;
    birthday: string;
    phone: string;
    email: string;
    github: string;
    linkedIn: string;
    location: string
    contact: string;
}

const ME: MeProps = {
    name: 'Ahmad Abdul Aziz',
    role: 'Software Engineer (Focusing on the Front-end Side)',
    poster: '/images/profile-picture.jpeg',
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
    description: 'A very passionate front-end developer that has what it takes to design, prototype, and develop web-based applications. Capable of building applications from medium to large scale using modern web technologies and best practices. Possesses good communication skills, fast learner, is goal-oriented, always open to any new inspiration, and able to work independently or as part of a team. Day-to-day development includes ReactJs, NextJs, VueJs, TailwindCSS, and Laravel.',
    birthday: '29 July 1997',
    phone: '(+60) 17 629 7140',
    email: 'ahmadaziz97@live.com',
    github: 'github.com/densityx',
    linkedIn: 'linkedin.com/in/densityx',
    location: 'Petaling Jaya / Kuala Lumpur, Malaysia',
    contact: 'You can contact me via email or phone number above. I am also available on LinkedIn and GitHub.'
};

interface SkillsHighlightProps {
    id: number;
    name: string;
}

const SKILLS_HIGHLIGHT: SkillsHighlightProps[] = [
    {id: 1, name: 'ReactJs, NextJs, VueJs, NuxtJs'},
    {id: 2, name: 'Laravel, Filament, Nova, Strapi'},
    {id: 3, name: 'Figma, Adobe XD, Sketch'},
    {id: 4, name: 'Tailwind CSS, Bootstrap 5, MUI, Mantine'},
    {id: 5, name: 'PostgreSQL, MySQL, Firestore'},
    {id: 6, name: 'HTML, CSS, JavaScript, TypeScript'},
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
        id: 2,
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
    icon: string;
}

const SKILLS: SkillsProps[] = [
    {
        id: 1,
        name: 'Languages',
        skills: [
            'PHP',
            'JavaScript',
            'TypeScript',
            'Dart',
            'HTML',
            'CSS',
        ],
        icon: 'IconLanguage'
    },
    {
        id: 2,
        name: 'Front end',
        skills: [
            'ReactJs',
            'NextJs',
            'VueJs',
            'NuxtJs',
            'AlpineJs',
            'Sass',
            'Tailwind CSS',
        ],
        icon: 'IconAppWindow',
    },
    {
        id: 3,
        name: 'Back end',
        skills: [
            'Laravel',
            'Strapi CMS',
            'NestJs',
            'Firebase'
        ],
        icon: 'IconServer',
    },
    {
        id: 4,
        name: 'Databases',
        skills: [
            'MySQL',
            'PostgreSQL',
            'NoSQL (Firestore)',
        ],
        icon: 'IconDatabase'
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
        icon: 'IconScribble',
    },
    {
        id: 6,
        name: 'Other',
        skills: [
            'Git',
            'AJAX',
            'Consuming API',
            'Rest API',
            'Flutter UI',
        ],
        icon: 'IconDotsDiagonal',
    },
];

const useStyles = createStyles((theme) => ({
    themeToggle: {
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: theme.spacing.xl,
        marginLeft: theme.spacing.xl,
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        padding: theme.spacing.xl,
        borderRadius: theme.radius.md,
    },
    highlight: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[1],
        padding: theme.spacing.lg,
        borderRadius: theme.radius.lg,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            height: '140px',
        },
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
        <Title order={2} fz={24}>
            {title}
        </Title>
    </Box>
)

const ExperienceAccordionItem = ({experience}: { experience: ExperienceProps }) => (
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
            <Flex align={'center'}>
                <Text component={'p'} my={0} fz={18} fw={500} color={'blue.6'}>
                    {experience.company}
                </Text>

                <Space w={'sm'}/>

                <Text component={'p'} my={0} fz={14} fw={500}>
                    {experience.start}
                    <Text component={'span'} px={4}>
                        -
                    </Text>
                    {experience.end}
                </Text>
            </Flex>

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

const EducationAccordionItem = ({education}: { education: EducationProps }) => (
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
            <Flex align={'center'}>
                <Text component={'p'} my={0} fz={18} fw={500} color={'blue.6'}>
                    {education.course}
                </Text>

                <Space w={'sm'}/>

                <Text component={'p'} my={0} fz={14} fw={500}>
                    {education.start}
                    <Text component={'span'} px={4}>
                        -
                    </Text>
                    {education.end}
                </Text>
            </Flex>

            <Text sx={{display: 'flex', alignItems: 'center'}} component={'p'} mb={0}>
                <IconMapPin size={14}/>

                <Text component={'span'} fz={14} ml={4}>
                    {education.location}
                </Text>
            </Text>
        </Accordion.Panel>
    </Accordion.Item>
)

const HonorAccordionItem = ({honor}: { honor: HonorsProps }) => (
    <Accordion.Item value={honor.name}>
        <Accordion.Control>
            <Text component={'p'} weight={600} my={0}>
                {honor.name}
            </Text>
        </Accordion.Control>
        <Accordion.Panel>
            <Flex align={'center'}>
                <Text component={'p'} my={0} fz={18} fw={500} color={'blue.6'}>
                    {honor.from}
                </Text>

                <Space w={'sm'}/>

                <Flex>
                    <Text component={'p'} my={0} fz={14} fw={500}>
                        {honor.year}
                    </Text>
                </Flex>
            </Flex>

            <Text component={'p'} mb={0}>
                {honor.description}
            </Text>
        </Accordion.Panel>
    </Accordion.Item>
)

interface ParseIconProps {
    icon: string;
}

const ParseIcon = ({icon}: ParseIconProps) => {
    if (icon === 'IconLanguage') {
        return <IconLanguage size={16}/>
    }

    if (icon === 'IconAppWindow') {
        return <IconAppWindow size={16}/>
    }

    if (icon === 'IconServer') {
        return <IconServer size={16}/>
    }

    if (icon === 'IconDatabase') {
        return <IconDatabase size={16}/>
    }

    if (icon === 'IconScribble') {
        return <IconScribble size={16}/>
    }

    return <IconDotsDiagonal size={16}/>
}

interface ProjectProps {
    id: number;
    name: string;
    year: number;
    description: string;
    cover: string;
    link: string;
    linkText: string;
    technology: string[];
}

const PROJECTS: ProjectProps[] = [
    {
        id: 1,
        name: 'Portfolio (This Website)',
        year: 2022,
        description: 'Ahmad Abdul Aziz personal portfolio. Built with Next.js, TypeScript, and Mantine UI.',
        cover: '/images/portfolio.png',
        link: 'https://github.com/densityx/portfolio',
        linkText: 'View Repositry',
        technology: ['Next.js', 'TypeScript', 'Mantine UI'],
    },
    {
        id: 2,
        name: 'Mantine UI Music Page',
        year: 2022,
        description: 'Personal project to translate Music Page design into Mantine UI',
        cover: '/images/music.png',
        link: '/music/',
        linkText: 'View Page',
        technology: ['Next.js', 'TypeScript', 'Mantine UI'],
    },
    {
        id: 3,
        name: 'PostSrc (Components)',
        year: 2021,
        description: 'Collection of Tailwind CSS components for everyone to use. Browse all of the components that\'s right for your project.',
        cover: '/images/components.png',
        link: 'https://postsrc.com/components',
        linkText: 'View Components',
        technology: ['HTML', 'CSS', 'JS', 'Laravel', 'Livewire', 'Alpine Js', 'Tailwind CSS'],
    },
    {
        id: 4,
        name: 'PostSrc (Snippets)',
        year: 2021,
        description: 'Collection of the most popular Laravel snippets, AlpineJS snippets, VueJS snippets, Tailwindcss snippets, Flutter snippets, and more.',
        cover: '/images/snippets.png',
        link: 'https://postsrc.com/snippets',
        linkText: 'View Snippets',
        technology: ['HTML', 'CSS', 'JS', 'Laravel', 'Livewire', 'Alpine Js', 'Tailwind CSS'],
    },
    {
        id: 5,
        name: 'PostSrc (Blog)',
        year: 2020,
        description: 'PostSrc (Post Source) a community of programmers sharing all things programming that includes a how-to tutorial, guides, and step by steps lessons.',
        cover: '/images/blog.png',
        link: 'https://postsrc.com',
        linkText: 'View Blog',
        technology: ['HTML', 'CSS', 'JS', 'PHP', 'Laravel', 'Livewire', 'Alpine Js', 'Tailwind CSS', 'Meilisearch'],
    },
];

const ProjectCard = ({project}: { project: ProjectProps }) => {
    const theme = useMantineTheme();

    return (
        <Card shadow="md" p={'lg'} radius="lg">
            <Card.Section component="a" href={project.link} target={"_blank"}>
                <Box
                    p={16}
                    bg={theme.colorScheme === 'dark' ? 'gray.9' : 'pink.0'}
                >
                    <Flex
                        align={'center'}
                        p={8}
                        bg={'white'}
                        sx={(theme) => ({
                            borderRadius: theme.radius.md,
                            height: '320px',
                        })}
                    >
                        <Image
                            src={project.cover}
                            height={'100%'}
                            alt="Norway"
                        />
                    </Flex>
                </Box>
            </Card.Section>

            <ScrollArea type={'never'} mt={16}>
                <Group spacing={'sm'} sx={{flexWrap: 'nowrap'}}>
                    {project.technology.map((tech, index) => (
                        <Badge variant={'light'} color={'gray'} key={index}>
                            {tech}
                        </Badge>
                    ))}
                </Group>
            </ScrollArea>

            <Group position="apart" mt="md" mb="xs">
                <Title order={3} fz={18} weight={500}>
                    {project.name}
                </Title>

                <Badge color="pink" variant="light">
                    {project.year}
                </Badge>
            </Group>

            <Box sx={(theme) => ({
                [`@media (min-width: ${theme.breakpoints.sm}px)`]: {
                    height: theme.breakpoints.md ? '60px' : '100%',
                }
            })}>
                <Text component={'p'} size="sm" color="dimmed">
                    {project.description}
                </Text>
            </Box>

            <Button
                component={'a'}
                href={project.link}
                variant="light"
                leftIcon={<IconExternalLink size={14}/>}
                target={"_blank"}
                color="blue"
                fullWidth mt="md"
                radius="md"
            >
                {project.linkText}
            </Button>
        </Card>
    )
}

const CreditSection = () => {
    const [heartCount, setHeartCount] = useState(0);
    const [coffeeCount, setCoffeeCount] = useState(0);

    return (
        <Center mt={32}>
            <Group spacing={4}>
                <Text component={'span'} color="dimmed">
                    Made with
                </Text>
                <ActionIcon
                    color={'pink.5'}
                    onClick={() => heartCount < 99 && setHeartCount(() => heartCount + 1)}
                >
                    {heartCount === 0 ? <IconHeart size={18}/> : heartCount}
                </ActionIcon>
                <Text component={'span'} color="dimmed">
                    and
                </Text>
                <ActionIcon
                    color={'green.5'}
                    onClick={() => coffeeCount < 99 && setCoffeeCount(() => coffeeCount + 1)}
                >
                    {coffeeCount === 0 ? <IconCoffee size={18}/> : coffeeCount}
                </ActionIcon>
                <Text component={'span'} color="dimmed">
                    by <Text component={'b'} fw={500}>Ahmad Abdul Aziz</Text>
                </Text>
            </Group>
        </Center>
    )
}

const Portfolio = () => {
    const {classes} = useStyles();
    const {scrollIntoView, targetRef} = useScrollIntoView<HTMLDivElement>();
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    return (
        <>
            <Head>
                {/*Primary Meta Tags*/}
                <title>Ahmad Abdul Aziz Portfolio</title>
                <meta name="title" content={'Ahmad Abdul Aziz Portfolio'}/>
                <meta name="description"
                      content={'Ahmad Abdul Aziz personal portfolio. Built with Next.js, TypeScript, and Mantine UI.'}/>

                {/*Open Graph / Facebook*/}
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="#"/>
                <meta property="og:title" content={'Ahmad Abdul Aziz Portfolio'}/>
                <meta property="og:description"
                      content={'Ahmad Abdul Aziz personal portfolio. Built with Next.js, TypeScript, and Mantine UI.'}/>
                <meta property="og:image"
                      content={'/images/portfolio.png'}/>

                {/*Twitter*/}
                <meta property="twitter:card" content="summary_large_image"/>
                <meta property="twitter:url" content="#"/>
                <meta property="twitter:title" content={'Ahmad Abdul Aziz Portfolio'}/>
                <meta property="twitter:description"
                      content={'Ahmad Abdul Aziz personal portfolio. Built with Next.js, TypeScript, and Mantine UI.'}/>
                <meta property="twitter:image" content={'/images/portfolio.png'}/>

                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Container my={16}>
                <Stack>
                    <Flex
                        className={classes.card}
                        ta={'center'}
                        align={'center'}
                        sx={{
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <Box className={classes.themeToggle}>
                            <ActionIcon
                                onClick={() => toggleColorScheme()}
                                variant={'light'}
                                color={'blue'}
                                size={'lg'}
                                radius={'xl'}
                                title="Toggle color scheme"
                            >
                                {colorScheme === 'dark' ? <IconSun size={18}/> : <IconMoonStars size={18}/>}
                            </ActionIcon>
                        </Box>

                        <Avatar
                            variant="filled"
                            size="xl"
                            radius="xl"
                            src={ME.poster}
                            alt={ME.name + ' poster'}
                        />

                        <Title mt={16} order={1} fz={24} weight={500}>
                            {ME.name}
                        </Title>

                        <Text component="p" fz={{base: 'xs', md: 'md'}}>
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
                    </Flex>

                    <Carousel sx={{width: '100%'}} mx="auto" slideSize={'35%'} slideGap={'md'} loop align={'start'}>
                        {SKILLS_HIGHLIGHT.map((skill, index) => (
                            <Carousel.Slide key={index}>
                                <Box className={classes.highlight}>
                                    <Text component={'p'} fz={14} fw={500}>{skill.name}</Text>
                                </Box>
                            </Carousel.Slide>
                        ))}
                    </Carousel>

                    <SectionTitle title={'About Me'}/>

                    <Grid gutter={'xl'}>
                        <Grid.Col sm={12} lg={4}>
                            <Box className={classes.card} ref={targetRef}>
                                <List
                                    spacing="xs"
                                    size="sm"
                                    center
                                    icon={
                                        <ThemeIcon color="blue.3" size={24} radius="xl">
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
                                                variant={'light'}
                                                mr={4}
                                                mb={4}
                                                color={'blue.5'}
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
                        <SectionTitle title={'Skills'}/>

                        <Table highlightOnHover withColumnBorders horizontalSpacing={'lg'} verticalSpacing={'lg'}>
                            <tbody>
                            {SKILLS.map((skill) => (
                                <tr key={skill.id}>
                                    <td>
                                        <Flex align={'center'}>
                                            <ThemeIcon variant={'light'} radius={'lg'}>
                                                <ParseIcon icon={skill.icon}/>
                                            </ThemeIcon>
                                            <Space w="sm"/>
                                            {skill.name}
                                        </Flex>
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
                        <SectionTitle title={'Working Experience'}/>

                        <Accordion variant="filled" defaultValue={EXPERIENCE[0].company}>
                            {EXPERIENCE.map(experience => (
                                <ExperienceAccordionItem experience={experience} key={experience.id}/>
                            ))}
                        </Accordion>
                    </Box>

                    <Box>
                        <SectionTitle title={'Education'}/>

                        <Accordion variant="filled" defaultValue={EDUCATION[0].name}>
                            {EDUCATION.map(education => (
                                <EducationAccordionItem education={education} key={education.id}/>
                            ))}
                        </Accordion>
                    </Box>

                    <Box>
                        <SectionTitle title={'Honors & Awards'}/>

                        <Accordion variant="filled" defaultValue={HONORS[0].name}>
                            {HONORS.map(honor => (
                                <HonorAccordionItem honor={honor} key={honor.id}/>
                            ))}
                        </Accordion>
                    </Box>

                    <Box>
                        <SectionTitle title={'Projects'}/>

                        <SimpleGrid breakpoints={[
                            {minWidth: 800, cols: 2, spacing: 'xl'},
                            {minWidth: 500, cols: 1, spacing: 'xl'},
                        ]}>
                            {PROJECTS.map((project: ProjectProps) => (
                                <ProjectCard project={project} key={project.id}/>
                            ))}
                        </SimpleGrid>
                    </Box>

                    <Box>
                        <SectionTitle title={'Contact'}/>

                        <Box className={classes.card}>
                            <Flex align={'center'} justify={'center'}>
                                <Group spacing={'sm'} sx={{flexWrap: 'nowrap'}}>
                                    <ActionIcon
                                        onClick={() => scrollIntoView()}
                                        variant={'light'}
                                        color={'blue'}
                                        size={'lg'}
                                        radius={'xl'}
                                    >
                                        <IconMail size={18}/>
                                    </ActionIcon>

                                    <ActionIcon
                                        onClick={() => scrollIntoView()}
                                        variant={'light'}
                                        color={'blue'}
                                        size={'lg'}
                                        radius={'xl'}
                                    >
                                        <IconPhone size={18}/>
                                    </ActionIcon>

                                    <ActionIcon
                                        component={'a'}
                                        href={'https://' + ME.linkedIn}
                                        target={'_blank'}
                                        variant={'light'}
                                        color={'blue'}
                                        size={'lg'}
                                        radius={'xl'}
                                    >
                                        <IconBrandLinkedin size={18}/>
                                    </ActionIcon>

                                    <ActionIcon
                                        component={'a'}
                                        href={'https://' + ME.github}
                                        target={'_blank'}
                                        variant={'light'}
                                        color={'blue'}
                                        size={'lg'}
                                        radius={'xl'}
                                    >
                                        <IconBrandGithub size={18}/>
                                    </ActionIcon>
                                </Group>
                            </Flex>

                            <Text component={'p'} mb={0} align={'center'}>
                                {ME.contact}
                            </Text>
                        </Box>

                        <CreditSection/>
                    </Box>
                </Stack>
            </Container>
        </>
    )
}

export default Portfolio;