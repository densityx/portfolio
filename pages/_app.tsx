// import '../styles/globals.css'
// import type { AppProps } from 'next/app'
//
// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }


import {AppProps} from 'next/app';
import Head from 'next/head';
import {ColorScheme, ColorSchemeProvider, MantineProvider} from '@mantine/core';
import {useHotkeys, useLocalStorage} from "@mantine/hooks";

export default function App(props: AppProps) {
    const {Component, pageProps} = props;

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    return (
        <>
            <Head>
                <title>Ahmad Aziz Webpage</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    withGlobalStyles
                    withNormalizeCSS
                    theme={{
                        /** Put your mantine theme override here */
                        colorScheme
                    }}
                >
                    <Component {...pageProps} />
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    );
}