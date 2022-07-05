
import HeaderDefault from '../header/headerDefault/headerDefault'
import FooterDefault from '../footer/footerDefault/footerDefault'
import Head from 'next/head'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>E-Commerce | {children.type.title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <HeaderDefault />
            <main>{children}</main>
            <FooterDefault />
        </>

    )
}