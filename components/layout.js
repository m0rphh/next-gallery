import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import MenuItem from '@material-ui/core/MenuItem';
import MenuDrawer from '../components/drawer';

Router.events.on('routeChangeStart', () => {
    NProgress.start()
    var element = document.getElementById("path");
    element.classList.add("path");
})
Router.onRouteChangeComplete = () => {
    NProgress.done()
    var element = document.getElementById("path");
    element.classList.remove("path");
};
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = 'Goran Matejin Photography' }) => (
    <React.Fragment>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />

        </Head>
        <div className="logo">
            <svg data-name="Layer 1" className="svg-logo" id="" fill="" stroke="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138.23 92.7">
                <path id="path" className="" d="M101.66 83.6L91 65.1l-5-8.7a.55.55 0 0 0-.5-.3H53a1.1 1.1 0 0 0-1 .6l-3.8 6.7a1.14 1.14 0 0 0 1 1.7h30.6a.55.55 0 0 1 .5.3l10 17.4a.63.63 0 0 1-.5.9H36.86a.55.55 0 0 0-.5.3l-4.5 7.8a.63.63 0 0 0 .5.9h73.5a.63.63 0 0 0 .5-.9zM84.36.3a.57.57 0 0 1 1 0l15.3 26.6 5.2 8.9 11.7 20.3 5.2 8.9 15.4 26.7a.55.55 0 0 1-.5.8h-9.5a.55.55 0 0 1-.5-.3L112 65l-5.2-8.9-11.74-20.3-5.2-8.9-10.2-17.8a.64.64 0 0 1 0-.6zM74 34.9l-5.19-8.8-.6-1-3.27-5.55L58.56 8.8 53.66.3a.57.57 0 0 0-1 0l-15.3 26.6-5.2 8.9-11.6 20.3-5.2 8.9L.06 91.6a.63.63 0 0 0 .5.9h9.5a.55.55 0 0 0 .5-.3L26.26 65l5.2-8.9 11.7-20.3 5.2-8.9h.1L53 19.2a.57.57 0 0 1 1 0l.18.31 3.18 5.55.94 1.64.06.06 5.13 8.74a.55.55 0 0 0 .5.3h9.5a.63.63 0 0 0 .51-.9z"
                />
            </svg>
        </div>
        <header>
            <nav>
                <MenuDrawer>
                    <Link href='/'><MenuItem><a style={{ color: '#eee' }}>Home</a></MenuItem></Link>
                    <Link href='/example'><MenuItem><a style={{ color: '#eee' }}>Example</a></MenuItem></Link>
                    <Link href='/non-existing'><MenuItem><a style={{ color: '#eee' }}>404 Page</a></MenuItem></Link>
                </MenuDrawer>
            </nav>
        </header>

        {/* <img className="logo" src='../static/img/goran-matejin-logo.svg' /> */}
        <div className="main-container">
            {children}
        </div>
        <footer>
            <p>Footer</p>
        </footer>

    </React.Fragment>
)
