'use client';

import {CacheProvider} from '@emotion/react';
import {ColorScheme, ColorSchemeProvider, MantineProvider, useEmotionCache} from '@mantine/core';
import {useServerInsertedHTML} from 'next/navigation';
import {useHotkeys, useLocalStorage} from "@mantine/hooks";

export default function RootStyleRegistry({children}: { children: React.ReactNode }) {
    const cache = useEmotionCache();
    cache.compat = true;

    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'mantine-color-scheme',
        defaultValue: 'light',
        getInitialValueInEffect: true,
    });

    console.log(colorScheme);

    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    useHotkeys([['mod+J', () => toggleColorScheme()]]);

    useServerInsertedHTML(() => (
        <style
            data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(' ')}`}
            dangerouslySetInnerHTML={{
                __html: Object.values(cache.inserted).join(' '),
            }}
        />
    ));

    return (
        <CacheProvider value={cache}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider
                    theme={{colorScheme}}
                    withGlobalStyles
                    withNormalizeCSS
                >
                    {children}
                </MantineProvider>
            </ColorSchemeProvider>
        </CacheProvider>
    );
}