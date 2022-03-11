import Head from 'next/head'
import Link from 'next/link'

export default function GroundTest() {
    return (
        <>
            <Head>
                <title>Ground Test Viewer</title>
            </Head>
            <h1>Ground Test Viewer</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </>
    )
}