import {ActionIcon, Burger, Flex, Header, MediaQuery, useMantineColorScheme, useMantineTheme} from "@mantine/core";
import {IconMoonStars, IconSearch, IconSun} from "@tabler/icons";
import Logo from "./Logo";

interface HeaderComponentProps {
    opened: boolean;

    setOpened: (o: (o: boolean) => boolean) => void;

    setAsideOpened: (o: (o: boolean) => boolean) => void;
}

export default function HeaderComponent({opened, setOpened, setAsideOpened}: HeaderComponentProps) {
    const theme = useMantineTheme();
    const {colorScheme, toggleColorScheme} = useMantineColorScheme();

    return (
        <Header height={{base: 50, md: 70}} p="md">
            <div style={{display: 'flex', alignItems: 'center', height: '100%'}}>
                <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                    <Burger
                        opened={opened}
                        onClick={() => setOpened((o: boolean) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                    />
                </MediaQuery>

                <Flex align={'center'}>
                    <Logo width={80}/>

                    <ActionIcon
                        onClick={() => toggleColorScheme()}
                        variant={'light'}
                        color={'blue'}
                        size={'lg'}
                        radius={'xl'}
                        title="Toggle color scheme"
                        ml={16}
                    >
                        {colorScheme === 'dark' ? <IconSun size={18}/> : <IconMoonStars size={18}/>}
                    </ActionIcon>
                </Flex>

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
    )
}