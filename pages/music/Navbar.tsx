import {Anchor, Flex, Navbar, ScrollArea, Space, Text} from "@mantine/core";
import Logo from "./Logo";
import {
    IconAdjustments,
    IconAlbum,
    IconCategory2,
    IconCompass,
    IconDownload,
    IconFiles,
    IconHeart,
    IconHome,
    IconMusic,
    IconSettings,
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

interface NavbarComponentProps {
    opened: boolean;
}

export default function NavbarComponent({opened}: NavbarComponentProps) {
    return (
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
    )
}