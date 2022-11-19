import {
    ActionIcon,
    Anchor,
    Box,
    Button,
    Container,
    createStyles,
    Divider,
    Flex,
    Grid,
    Group,
    Image,
    ScrollArea,
    SimpleGrid,
    Stack,
    Table,
    Tabs,
    Text,
    Title
} from "@mantine/core";
import {IconDots, IconPlayerPlay, IconShare} from "@tabler/icons";

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
};

export default function MainContent() {
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

    return (<Container>
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
    </Container>)
}