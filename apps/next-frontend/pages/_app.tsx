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
                <header className="flex">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src="/nx-logo-white.svg"
                        alt="Nx logo"
                        width="75"
                        height="50"
                    />
                    <h1>Welcome to the Clean Messenger!</h1>
                </header>
                <main>
                    <Component {...pageProps} />
                </main>
            </div>
        </>
    );
}

export default CustomApp;
