import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';

function CustomApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Messenger</title>
            </Head>
            <div className="app">
                <header className="flex"></header>
                <main>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default CustomApp;
