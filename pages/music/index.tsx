import {AppShell, useMantineTheme,} from '@mantine/core';
import Header from './Header';
import Navbar from './Navbar';
import Aside from './Aside';
import MainContent from "./MainContent";
import {useMediaQuery} from "@mantine/hooks";
import {useState} from 'react';
import Head from "next/head";

export default function Music() {
    const [opened, setOpened] = useState(false);
    const [asideOpen, setAsideOpened] = useState(false);
    const theme = useMantineTheme();

    const matches = useMediaQuery('(max-width: 765px)');

    return (
        <>
            <Head>
                <title>Music Player</title>
                <meta name="title" content={'Music Player by Ahmad Aziz'}/>
                <meta name="description" content={'Music Player by Ahmad Aziz'}/>
            </Head>
            <AppShell
                styles={{
                    main: {
                        background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : 'white',
                    },
                }}
                navbarOffsetBreakpoint="sm"
                asideOffsetBreakpoint="sm"
                navbar={
                    <Navbar opened={opened}/>
                }
                aside={
                    <Aside asideOpen={asideOpen}/>
                }
                /*footer={
                    <Footer height={60} p="md">
                        Application footer
                    </Footer>
                }*/
                header={
                    matches ?
                        <Header
                            opened={opened}
                            setAsideOpened={setAsideOpened}
                            setOpened={setOpened}
                        />
                        : undefined
                }
            >
                <MainContent/>
            </AppShell>
        </>
    );
}