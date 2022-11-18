import {useState} from 'react';
import {
    ActionIcon,
    Anchor,
    AppShell,
    Aside,
    Box,
    Button,
    Container,
    createStyles,
    Divider,
    Flex,
    Grid,
    Group,
    Image,
    MediaQuery,
    Navbar,
    ScrollArea,
    SimpleGrid,
    Space,
    Stack,
    Table,
    Tabs,
    Text,
    TextInput,
    Title,
    useMantineTheme,
} from '@mantine/core';
import {
    IconAdjustments,
    IconAlbum,
    IconCategory2,
    IconCompass,
    IconDots,
    IconDownload,
    IconFiles,
    IconHeart,
    IconHome,
    IconMusic,
    IconPlayerPlay,
    IconSearch,
    IconSettings,
    IconShare,
    IconTrendingUp,
    IconUsers
} from '@tabler/icons';

const NAVBAR_LINKS = {
    'features': [
        {
            id: 1,
            name: 'Home',
            icon: 'IconHome',
            url: '',
            active: true,
            category: 'features'
        },
        {
            id: 2,
            name: 'Discover',
            icon: 'IconCompass',
            url: '',
            active: false,
            category: 'features'
        },
        {
            id: 3,
            name: 'Download',
            icon: 'IconDownload',
            url: '',
            active: false,
            category: 'features'
        },
        {
            id: 4,
            name: 'Trending',
            icon: 'IconTrendingUp',
            url: '',
            active: false,
            category: 'features'
        },
    ],
    'collection': [
        {
            id: 5,
            name: 'My Playlist',
            icon: 'IconMusic',
            url: '',
            active: false,
            category: 'collection'
        },
        {
            id: 6,
            name: 'Artist',
            icon: 'IconUsers',
            url: '',
            active: false,
            category: 'collection'
        },
        {
            id: 7,
            name: 'Album',
            icon: 'IconAlbum',
            url: '',
            active: false,
            category: 'collection'
        },
    ],
    library: [
        {
            id: 8,
            name: 'Favourites',
            icon: 'IconHeart',
            url: '',
            active: false,
            category: 'library'
        },
        {
            id: 9,
            name: 'Local Files',
            icon: 'IconFiles',
            url: '',
            active: false,
            category: 'library'
        },
    ],
    settings: [
        {
            id: 10,
            name: 'General Setting',
            icon: 'IconSettings',
            url: '',
            active: false,
            category: 'setting'
        },
        {
            id: 11,
            name: 'Account Setting',
            icon: 'IconAdjustments',
            url: '',
            active: false,
            category: 'setting'
        }
    ]
};

const determineIcon = (icon: string): JSX.Element => {
    if (icon == 'IconHome') {
        return <IconHome/>
    }

    if (icon == 'IconCompass') {
        return <IconCompass/>
    }

    if (icon == 'IconDownload') {
        return <IconDownload/>
    }

    if (icon == 'IconTrendingUp') {
        return <IconTrendingUp/>
    }

    if (icon == 'IconMusic') {
        return <IconMusic/>
    }

    if (icon == 'IconUsers') {
        return <IconUsers/>
    }

    if (icon == 'IconAlbum') {
        return <IconAlbum/>
    }

    if (icon == 'IconHeart') {
        return <IconHeart/>
    }

    if (icon == 'IconFiles') {
        return <IconFiles/>
    }

    if (icon == 'IconSettings') {
        return <IconSettings/>
    }

    if (icon == 'IconAdjustments') {
        return <IconAdjustments/>
    }

    return <IconCategory2/>
}

const CATEGORY_LINKS = [
    {
        id: 1,
        name: 'Music',
        icon: '💿',
        url: '',
        active: true,
    },
    {
        id: 2,
        name: 'Podcast',
        icon: '🎙',
        url: '',
        active: false,
    },
    {
        id: 3,
        name: 'Story Telling',
        icon: '📚',
        url: '',
        active: false,
    },
    {
        id: 4,
        name: 'Horror',
        icon: '👺',
        url: '',
        active: false,
    },
    {
        id: 5,
        name: 'Comedy',
        icon: '🤡',
        url: '',
        active: false,
    },
    {
        id: 6,
        name: 'Romance',
        icon: '💕',
        url: '',
        active: false,
    },
];

const SIDEBAR_DATA = {
    popularArtist: [
        {
            id: 1,
            name: 'Eminem',
            poster: '',
        },
        {
            id: 2,
            name: 'A7X',
            poster: '',
        },
        {
            id: 3,
            name: 'Drake',
            poster: '',
        },
        {
            id: 4,
            name: 'Avicii',
            poster: '',
        },
        {
            id: 5,
            name: 'Bondan',
            poster: '',
        },
        {
            id: 6,
            name: 'Travis S',
            poster: '',
        },
    ],
    topPodcaster: [
        {
            id: 1,
            name: 'Ricky Gervais',
            poster: '',
            follower: '500K Followers',
        },
        {
            id: 2,
            name: 'Podkesmas',
            poster: '',
            follower: '450K Followers',
        },
    ],
    nowPlaying: {
        song: 'Cheating on you',
        name: 'Charlie Puth',
        poster: '',
        duration: '3:33',
    },
}

const MAIN_DATA = {
    popularNow: [
        {
            id: 1,
            poster: '',
            song: 'Easy on me',
            name: 'Adele',
            duration: '3:44'
        },
        {
            id: 2,
            poster: '',
            song: 'Happier than Ever',
            name: 'Billie Eilish',
            duration: '4:58'
        },
        {
            id: 3,
            poster: '',
            song: 'Traitor',
            name: 'Olivia Rodrigo',
            duration: '4:44'
        },
        {
            id: 4,
            poster: '',
            song: 'Cheating on you',
            name: 'Charlie Puth',
            duration: '3:33'
        },
    ],
    recentPlaylist: {
        name: 'Ahmad Aziz Playlist',
        poster: '',
        title: 'Indonesian Hot Music 2022',
        tags: ['2022', 'Indonesia', 'Popular'],
        likes: '500k Likes',
        totalSongs: '100 Songs',
        duration: '10h 3m 30s',
    },
    playlist: [
        {
            id: 1,
            poster: '',
            title: 'Runtuh',
            artist: 'Feby Putri ft Fiersa Besari',
            album: 'Runtuh',
            played: '3 days ago',
            duration: '3:44',
        },
        {
            id: 2,
            poster: '',
            title: 'It\'s only me',
            artist: 'Kaleb J',
            album: 'It\'s only me',
            played: '3 days ago',
            duration: '3:34',
        },
        {
            id: 3,
            poster: '',
            title: 'Here\'s your p...',
            artist: 'Jemie Miller',
            album: 'Here\'s your p...',
            played: '3 days ago',
            duration: '3:32',
        },
        {
            id: 4,
            poster: '',
            title: 'Double Take',
            artist: 'Dhruv',
            album: 'Double Take',
            played: '3 days ago',
            duration: '3:30',
        },
        {
            id: 5,
            poster: '',
            title: 'Stay',
            artist: 'Justin Bieber',
            album: 'Stay',
            played: '3 days ago',
            duration: '3:20',
        }
    ]
}

export default function Music() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

    const useStyles = createStyles((theme, _params, getRef) => ({
        'tableHead': {
            textTransform: 'uppercase',

            'tr th': {
                color: theme.colors.gray[6] + '!important'
            }
        },
        title: {
            fontWeight: 500
        },
        column: {
            color: theme.colors.gray[6] + '!important',
        },
        mw200: {
            minWidth: '200px !important'
        }
    }))

    const {classes} = useStyles();

    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 240, lg: 240}}>
                    <Box mb={'sm'}>
                        <svg id="logo-79" className="gradient" width="125" height="40" viewBox="0 0 125 40" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path className="ccustom"
                                  d="M88.861 37.225c.759 0 1.208-.575 1.208-1.474 0-.932-.482-1.474-1.192-1.474-.406 0-.688.18-.899.466h-.01V33.27h-.44v3.873h.44v-.368h.01c.228.314.504.45.883.45Zm-.032-.369c-.596 0-.889-.471-.889-1.1 0-.606.282-1.105.894-1.105.531 0 .786.477.786 1.105 0 .634-.255 1.1-.791 1.1Zm1.983 1.214c.341 0 .558-.12.785-.7l1.198-3.028h-.466l-.64 1.745c-.086.233-.184.547-.184.547h-.01s-.104-.314-.19-.547l-.661-1.745h-.477l1.094 2.72-.108.276c-.108.271-.233.342-.417.342a.616.616 0 0 1-.298-.06h-.022v.39c.12.049.228.06.396.06Zm3.106-.927h.737V33.27h-.737v3.873Zm2.539.082c.861 0 1.452-.64 1.452-1.469 0-.829-.59-1.468-1.452-1.468-.861 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.704-.363-.704-.905 0-.541.249-.91.704-.91.45 0 .704.369.704.91 0 .542-.254.905-.704.905Zm3.019 1.43c.412 0 .769-.097 1.002-.314.206-.19.331-.455.331-.845v-2.568h-.71v.293h-.011c-.168-.233-.422-.369-.77-.369-.703 0-1.202.531-1.202 1.36 0 .84.607 1.327 1.225 1.327.352 0 .563-.14.725-.325h.017v.304c0 .379-.2.58-.618.58-.341 0-.498-.136-.558-.31h-.731c.075.542.541.867 1.3.867Zm-.01-1.706c-.38 0-.63-.276-.63-.748 0-.466.25-.758.624-.758.444 0 .661.346.661.753 0 .412-.19.753-.656.753Zm3.134.84c.861 0 1.452-.64 1.452-1.469 0-.829-.591-1.468-1.452-1.468-.862 0-1.452.64-1.452 1.468 0 .83.59 1.469 1.452 1.469Zm0-.564c-.455 0-.705-.363-.705-.905 0-.541.25-.91.705-.91.449 0 .704.369.704.91 0 .542-.255.905-.704.905Zm1.794.482h.737v-2.779h-.737v2.78Zm0-3.212h.737v-.661h-.737v.66Zm1.212 4.122h.737V36.83h.01c.158.239.412.396.802.396.715 0 1.203-.57 1.203-1.469 0-.867-.471-1.468-1.208-1.468a.972.972 0 0 0-.818.423h-.016v-.347h-.71v3.69Zm1.392-1.44c-.439 0-.672-.331-.672-.835 0-.498.185-.894.645-.894.455 0 .639.368.639.894s-.238.834-.612.834Zm2.83.612c.693 0 1.17-.336 1.17-.894 0-.65-.515-.78-.981-.878-.395-.081-.763-.103-.763-.341 0-.2.189-.31.476-.31.315 0 .504.11.537.407h.666c-.054-.558-.46-.92-1.192-.92-.634 0-1.132.286-1.132.888 0 .606.487.742.986.84.379.075.731.102.731.368 0 .195-.184.32-.509.32-.33 0-.558-.141-.607-.461h-.682c.043.59.493.98 1.3.98Zm3.968-.082v-2.779h-.737v1.604c0 .368-.212.628-.558.628-.314 0-.461-.179-.461-.504v-1.728h-.731v1.853c0 .607.347 1.002.964 1.002.39 0 .607-.146.797-.4h.016v.324h.71Zm.476 0h.737V35.53c0-.369.2-.607.498-.607.271 0 .428.163.428.477v1.744h.737V35.53c0-.369.19-.607.499-.607.271 0 .428.163.428.477v1.744h.737v-1.869c0-.607-.331-.986-.916-.986-.352 0-.645.184-.834.488h-.011a.83.83 0 0 0-.77-.488.908.908 0 0 0-.807.45h-.016v-.374h-.71v2.78Z"
                                  fill="#E5708C"></path>
                            <path
                                d="M118.481 2.149c0-1.183.959-2.143 2.142-2.143h1.429a2.142 2.142 0 0 1 0 4.286h-1.429a2.142 2.142 0 0 1-2.142-2.143ZM58.49 14.29c0 7.888-6.394 14.283-14.283 14.283-7.888 0-14.283-6.395-14.283-14.283C29.924 6.4 36.319.007 44.207.007 52.096.007 58.49 6.4 58.49 14.29Zm-31.352-.071c.79 0 1.436.64 1.357 1.426A14.283 14.283 0 1 1 12.857.007c.785-.08 1.426.568 1.426 1.356V12.79c0 .79.64 1.429 1.429 1.429h11.426ZM78.487 31.43a4.285 4.285 0 1 1 0 8.57h-7.141a4.285 4.285 0 0 1 0-8.57h7.141Zm-4.285-2.857c7.889 0 14.284-6.395 14.284-14.283a14.22 14.22 0 0 0-1.789-6.925l2.36-2.36a2.928 2.928 0 1 0-4.142-4.14l-2.06 2.06A14.22 14.22 0 0 0 74.201.006C66.314.007 59.92 6.4 59.92 14.29c0 7.888 6.395 14.283 14.283 14.283Zm44.279-14.283c0 7.888-6.395 14.283-14.284 14.283-7.888 0-14.283-6.395-14.283-14.283 0-7.89 6.395-14.283 14.283-14.283 7.889 0 14.284 6.394 14.284 14.283Z"
                                fill="url(#gradient_a1234)"></path>
                            <defs>
                                <linearGradient id="gradient_a1234" x1="0" y1="16" x2="119" y2="16"
                                                gradientUnits="userSpaceOnUse">
                                    <stop className="ccompli1" stopColor="#64C2DB"></stop>
                                    <stop className="ccompli2" offset=".307" stopColor="#7476ED"></stop>
                                    <stop className="ccustom" offset=".604" stopColor="#C994DF"></stop>
                                    <stop className="ccompli1" offset="1" stopColor="#E56F8C"></stop>
                                </linearGradient>
                            </defs>
                        </svg>
                    </Box>

                    <Navbar.Section component={ScrollArea} grow mx="-xs" px="xs">
                        <Text component={'p'} fz={'xs'} tt={'uppercase'} fw={600} color={'gray.6'}>
                            Features
                        </Text>

                        {NAVBAR_LINKS.features.map(link => (
                            <Anchor href={link.url} key={link.id} variant={'text'}
                                    color={link.active ? 'blue.5' : 'dimmed'}>
                                <Flex align={'center'}>
                                    {determineIcon(link.icon)}
                                    <Space w={'xs'}/>
                                    <Text component={'p'} my={'xs'}>
                                        {link.name}
                                    </Text>
                                </Flex>
                            </Anchor>
                        ))}

                        <Text component={'p'} fz={'xs'} tt={'uppercase'} fw={600} color={'gray.6'}>
                            Collection
                        </Text>

                        {NAVBAR_LINKS.collection.map(link => (
                            <Anchor href={link.url} key={link.id} variant={'text'}
                                    color={link.active ? 'blue.5' : 'dimmed'}>
                                <Flex align={'center'}>
                                    {determineIcon(link.icon)}
                                    <Space w={'xs'}/>
                                    <Text component={'p'} my={'xs'}>
                                        {link.name}
                                    </Text>
                                </Flex>
                            </Anchor>
                        ))}

                        <Text component={'p'} fz={'xs'} tt={'uppercase'} fw={600} color={'gray.6'}>
                            Library
                        </Text>

                        {NAVBAR_LINKS.library.map(link => (
                            <Anchor href={link.url} key={link.id} variant={'text'}
                                    color={link.active ? 'blue.5' : 'dimmed'}>
                                <Flex align={'center'}>
                                    {determineIcon(link.icon)}
                                    <Space w={'xs'}/>
                                    <Text component={'p'} my={'xs'}>
                                        {link.name}
                                    </Text>
                                </Flex>
                            </Anchor>
                        ))}
                    </Navbar.Section>

                    <Navbar.Section>
                        <Text component={'p'} fz={'xs'} tt={'uppercase'} fw={600} color={'gray.6'}>
                            Settings
                        </Text>

                        {NAVBAR_LINKS.settings.map(link => (
                            <Anchor href={link.url} key={link.id} variant={'text'}
                                    color={link.active ? 'blue.5' : 'dimmed'}>
                                <Flex align={'center'}>
                                    {determineIcon(link.icon)}
                                    <Space w={'xs'}/>
                                    <Text component={'p'} my={'xs'}>
                                        {link.name}
                                    </Text>
                                </Flex>
                            </Anchor>
                        ))}
                    </Navbar.Section>
                </Navbar>
            }
            aside={
                <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>
                        <Stack spacing={'xl'} sx={{height: '100%'}}>
                            <Box>
                                <Flex justify={'space-between'}>
                                    <Title order={3} size={18} fw={600} color={'gray.8'}>
                                        Search
                                    </Title>
                                </Flex>

                                <TextInput
                                    placeholder={'Search Artist, title, album'}
                                    mt={'md'}
                                    radius={'xl'}
                                    icon={<IconSearch size={14}/>}
                                />
                            </Box>

                            <ScrollArea sx={{height: '100%'}} type={'never'}>
                                <Stack spacing={'xl'}>
                                    <Box>
                                        <Flex justify={'space-between'}>
                                            <Title order={3} size={18} fw={600} color={'gray.8'}>
                                                Popular Artist
                                            </Title>

                                            <ActionIcon>
                                                <IconDots/>
                                            </ActionIcon>
                                        </Flex>

                                        <SimpleGrid
                                            breakpoints={[
                                                {maxWidth: 'xs', cols: 2},
                                                {minWidth: 'xs', cols: 2},
                                                {minWidth: 'lg', cols: 3}
                                            ]}
                                            spacing={'md'}
                                            mt={'lg'}
                                        >
                                            {SIDEBAR_DATA.popularArtist.map(artist => (
                                                <Box key={artist.id}>
                                                    <Box bg={'gray.1'} p={'lg'} sx={(theme) => ({
                                                        borderRadius: theme.radius.md,
                                                    })}>
                                                        <Image src={'https://img.logoipsum.com/284.svg'}/>
                                                    </Box>

                                                    <Text component={'p'} ta={'center'} fz={14} fw={600} mt={'sm'}
                                                          mb={0}>
                                                        {artist.name}
                                                    </Text>
                                                </Box>
                                            ))}
                                        </SimpleGrid>
                                    </Box>

                                    <Box>
                                        <Flex justify={'space-between'}>
                                            <Title order={3} size={18} fw={600} color={'gray.8'}>
                                                Top Podcaster
                                            </Title>

                                            <ActionIcon>
                                                <IconDots/>
                                            </ActionIcon>
                                        </Flex>

                                        <SimpleGrid cols={2} spacing={'md'} mt={'lg'}>
                                            {SIDEBAR_DATA.topPodcaster.map(artist => (
                                                <Box key={artist.id}>
                                                    <Box bg={'gray.1'} p={'lg'} sx={(theme) => ({
                                                        borderRadius: theme.radius.md
                                                    })}>
                                                        <Image src={'https://img.logoipsum.com/284.svg'}/>
                                                    </Box>

                                                    <Text component={'p'} fz={14} fw={600} mt={'sm'} mb={0}>
                                                        {artist.name}
                                                    </Text>

                                                    <Text component={'p'} fz={14} fw={400} my={0} color={'dimmed'}>
                                                        {artist.follower}
                                                    </Text>
                                                </Box>
                                            ))}
                                        </SimpleGrid>
                                    </Box>
                                </Stack>
                            </ScrollArea>

                            <Box>
                                <Flex justify={'space-between'}>
                                    <Title order={3} size={18} fw={600} color={'gray.8'}>
                                        Now Playing
                                    </Title>

                                    <ActionIcon>
                                        <IconDots/>
                                    </ActionIcon>
                                </Flex>

                                <Box>
                                    <Box
                                        bg={'gray.1'}
                                        p={'lg'}
                                        mt={'lg'}
                                        sx={(theme) => ({
                                            borderRadius: theme.radius.md,
                                        })}
                                    >
                                        <Image src={'https://img.logoipsum.com/284.svg'}/>
                                    </Box>

                                    <Flex justify={'space-between'} align={'center'} mt={'md'}>
                                        <Box>
                                            <Text component={'p'} fz={16} fw={600} mt={'sm'} my={0}>
                                                {SIDEBAR_DATA.nowPlaying.song}
                                            </Text>

                                            <Text component={'p'} fz={12} fw={500} my={0} color={'dimmed'}>
                                                {SIDEBAR_DATA.nowPlaying.name} • {SIDEBAR_DATA.nowPlaying.duration}
                                            </Text>
                                        </Box>

                                        <ActionIcon variant={'outline'} radius={'xl'} size={32}
                                                    color={'blue.5'}>
                                            <IconPlayerPlay/>
                                        </ActionIcon>
                                    </Flex>
                                </Box>
                            </Box>
                        </Stack>
                    </Aside>
                </MediaQuery>
            }
            /*footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }*/
            /*header={
                <Header height={{base: 50, md: 70}} p="md">
                    <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                        <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>

                        <Text>Application header</Text>
                    </div>
                </Header>
            }*/
        >
            <Container>
                <Stack spacing={'xl'}>
                    <ScrollArea w={'100%'} type={'never'}>
                        <Tabs variant={'pills'} radius={'xl'}
                              defaultValue={CATEGORY_LINKS[0].name}
                              styles={(theme) => ({
                                  tabsList: {
                                      display: 'flex',
                                      flexWrap: 'nowrap'
                                  },
                                  tab: {
                                      backgroundColor: 'white',
                                      border: `1px solid ${theme.colors.gray[2]}`
                                  }
                              })}>
                            <Tabs.List>
                                {CATEGORY_LINKS.map(link => (
                                    <Tabs.Tab value={link.name} key={link.id} icon={link.icon}>
                                        {link.name}
                                    </Tabs.Tab>
                                ))}
                            </Tabs.List>
                        </Tabs>
                    </ScrollArea>

                    <Box>
                        <Flex justify={'space-between'}>
                            <Title order={2} size={20} fw={600} color={'gray.8'}>
                                Popular Now
                            </Title>

                            <Anchor href={'#'} color={'gray.9'} fw={600}>
                                See details
                            </Anchor>
                        </Flex>

                        <SimpleGrid
                            breakpoints={[
                                {maxWidth: 'xs', cols: 2},
                                {minWidth: 'xs', cols: 2},
                                {minWidth: 'lg', cols: 4}
                            ]}
                            mt={'lg'}
                        >
                            {MAIN_DATA.popularNow.map(music => (
                                <Box key={music.id}>
                                    <Box bg={'gray.1'} p={'lg'} sx={(theme) => ({
                                        borderRadius: theme.radius.md
                                    })}>
                                        <Image src={'https://img.logoipsum.com/284.svg'}/>
                                    </Box>

                                    <Text component={'p'} fz={14} fw={600} mt={'sm'} mb={0}>
                                        {music.song}
                                    </Text>

                                    <Text component={'p'} fz={14} fw={400} my={0} color={'dimmed'}>
                                        {music.name} • {music.duration}
                                    </Text>
                                </Box>
                            ))}
                        </SimpleGrid>
                    </Box>

                    <Divider/>

                    <Box>
                        <Flex justify={'space-between'}>
                            <Title order={2} size={20} fw={600} color={'gray.8'}>
                                My Recent Playlist
                            </Title>

                            <Anchor href={'#'} color={'gray.9'} fw={600}>
                                See details
                            </Anchor>
                        </Flex>

                        <Box mt={'lg'}>
                            <Grid>
                                <Grid.Col lg={4}>
                                    <Box bg={'gray.1'} p={'lg'} sx={(theme) => ({
                                        borderRadius: theme.radius.md
                                    })}>
                                        <Image src={'https://img.logoipsum.com/284.svg'}/>
                                    </Box>
                                </Grid.Col>

                                <Grid.Col lg={8}>
                                    <Box>
                                        <Flex align={'center'} justify={'space-between'}>
                                            <Box>
                                                <Text
                                                    component={'p'}
                                                    my={0}
                                                    fw={'500'}
                                                    fz={'sm'}
                                                    color={'dimmed'}
                                                >
                                                    {MAIN_DATA.recentPlaylist.name}
                                                </Text>
                                                <Text
                                                    component={'p'}
                                                    my={0}
                                                    fw={'600'}
                                                    fz={'lg'}
                                                >
                                                    {MAIN_DATA.recentPlaylist.title}
                                                </Text>
                                            </Box>

                                            <ActionIcon>
                                                <IconDots/>
                                            </ActionIcon>
                                        </Flex>
                                        <Group spacing={'xs'} mt={'sm'}>
                                            {MAIN_DATA.recentPlaylist.tags.map((tag, index) => (
                                                <Button
                                                    key={index}
                                                    variant={'outline'}
                                                    radius={'xl'}
                                                    color={'gray.5'}
                                                    size={'xs'}
                                                >
                                                    {tag}
                                                </Button>
                                            ))}
                                        </Group>
                                        <Flex
                                            direction={{base: 'column', sm: 'row'}}
                                            align={'center'}
                                            justify={'space-between'}
                                            mt={'md'}
                                        >
                                            <Text component={'p'} color={'dimmed'} fz={'sm'} my={0}>
                                                {MAIN_DATA.recentPlaylist.likes} •
                                                {MAIN_DATA.recentPlaylist.totalSongs} •
                                                {MAIN_DATA.recentPlaylist.duration}
                                            </Text>

                                            <Group spacing={'xs'} mt={{base: 'lg', xs: 0}}>
                                                <Button
                                                    variant={'filled'}
                                                    leftIcon={<IconPlayerPlay size={14}/>}
                                                    radius={'xl'}
                                                >
                                                    Play Now
                                                </Button>

                                                <Button variant={'outline'} radius={'xl'} px={'xs'} color={'gray'}>
                                                    <IconShare size={14}/>
                                                </Button>
                                            </Group>
                                        </Flex>
                                    </Box>
                                </Grid.Col>
                            </Grid>
                        </Box>
                    </Box>

                    <Divider/>

                    <ScrollArea>
                        <Table horizontalSpacing="md" verticalSpacing="sm">
                            <thead className={classes.tableHead}>
                            <tr>
                                <th>#</th>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Album</th>
                                <th>Date</th>
                                <th>Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            {MAIN_DATA.playlist.map((music, index) => (
                                <tr key={music.id}>
                                    <td>
                                        <Box bg={'gray.1'} p={'sm'} w={60} sx={(theme) => ({
                                            borderRadius: theme.radius.md
                                        })}>
                                            <Image src={'https://img.logoipsum.com/284.svg'}/>
                                        </Box>
                                    </td>
                                    <td className={`${classes.title} ${classes.mw200}`}>{music.title}</td>
                                    <td className={`${classes.column} ${classes.mw200}`}>{music.artist}</td>
                                    <td className={`${classes.column} ${classes.mw200}`}>{music.album}</td>
                                    <td className={`${classes.column} ${classes.mw200}`}>{music.played}</td>
                                    <td className={`${classes.column} ${classes.mw200}`}>{music.duration}</td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </ScrollArea>
                </Stack>
            </Container>
        </AppShell>
    );
}