import {useState} from 'react';
import {
    ActionIcon,
    Anchor,
    AppShell,
    Aside,
    Box,
    Burger,
    Button,
    Container,
    createStyles,
    Divider,
    Flex,
    Grid,
    Group,
    Header,
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
import {useMediaQuery} from "@mantine/hooks";

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

const Logo = ({width = 125}: { width?: number }) => (
    <Image width={width} src={'https://img.logoipsum.com/288.svg'}/>
)

export default function Music() {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [asideOpen, setAsideOpened] = useState(false);

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

    const matches = useMediaQuery('(max-width: 765px)');

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
                    <Logo/>

                    <Navbar.Section component={ScrollArea} type={'never'} grow mt={'lg'} mx="-xs" px="xs">
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
                <Aside p="md" hiddenBreakpoint="sm" hidden={!asideOpen} width={{sm: 200, lg: 300}}>
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
            }
            /*footer={
                <Footer height={60} p="md">
                    Application footer
                </Footer>
            }*/
            header={
                matches ?
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

                            <Box styles={{width: '100px'}}>
                                <Logo width={80}/>
                            </Box>

                            <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                                <ActionIcon
                                    onClick={() => setAsideOpened((o) => !o)}
                                    size="lg"
                                    color={theme.colors.gray[6]}
                                    ml={'auto'}
                                    variant={'outline'}
                                    radius={'xl'}
                                >
                                    <IconSearch size={14}/>
                                </ActionIcon>
                            </MediaQuery>
                        </div>
                    </Header>
                    : undefined
            }
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

                    <ScrollArea type={'never'}>
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