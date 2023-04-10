import NextLink from 'next/link'
import LinkEstilizado from './linkestilizado'

export default function Link ({children, href, ...props}) {
    return (
        <NextLink legacyBehavior href={href}>
            <LinkEstilizado {...props}>{children}</LinkEstilizado>
        </NextLink>
    )
}