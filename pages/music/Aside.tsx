import {
    ActionIcon,
    Aside,
    Box,
    Flex,
    Image,
    ScrollArea,
    SimpleGrid,
    Stack,
    Text,
    TextInput,
    Title,
    useMantineTheme
} from '@mantine/core';
import {IconDots, IconPlayerPlay, IconSearch} from "@tabler/icons";

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

interface AsideComponentProps {
    asideOpen: boolean;
}

export default function AsideComponent({asideOpen}: AsideComponentProps) {
    const theme = useMantineTheme();

    return (<Aside p="md" hiddenBreakpoint="sm" hidden={!asideOpen} width={{sm: 200, lg: 300}}>
        <Stack spacing={'xl'} sx={{height: '100%'}}>
            <Box>
                <Flex justify={'space-between'}>
                    <Title order={3} size={18} fw={600} color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray.8'}>
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
                            <Title order={3} size={18} fw={600}
                                   color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray.8'}>
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
                                    <Box
                                        bg={theme.colorScheme === 'dark' ? 'gray.8' : 'gray.1'}
                                        p={'lg'}
                                        sx={(theme) => ({
                                            borderRadius: theme.radius.md
                                        })}
                                    >
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
                            <Title order={3} size={18} fw={600}
                                   color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray.8'}>
                                Top Podcaster
                            </Title>

                            <ActionIcon>
                                <IconDots/>
                            </ActionIcon>
                        </Flex>

                        <SimpleGrid cols={2} spacing={'md'} mt={'lg'}>
                            {SIDEBAR_DATA.topPodcaster.map(artist => (
                                <Box key={artist.id}>
                                    <Box
                                        bg={theme.colorScheme === 'dark' ? 'gray.8' : 'gray.1'}
                                        p={'lg'}
                                        sx={(theme) => ({
                                            borderRadius: theme.radius.md
                                        })}
                                    >
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
                    <Title order={3} size={18} fw={600} color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray.8'}>
                        Now Playing
                    </Title>

                    <ActionIcon>
                        <IconDots/>
                    </ActionIcon>
                </Flex>

                <Box>
                    <Box
                        bg={theme.colorScheme === 'dark' ? 'gray.8' : 'gray.1'}
                        mt={'lg'}
                        p={'lg'}
                        sx={(theme) => ({
                            borderRadius: theme.radius.md
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
    </Aside>)
}