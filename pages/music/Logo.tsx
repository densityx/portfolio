import {Image} from '@mantine/core'

export default function Logo({width = 125}: { width?: number }) {
    return <Image width={width} src={'https://img.logoipsum.com/288.svg'}/>
}