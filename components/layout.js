import Link from 'next/link'
import Head from 'next/head'
import Router from 'next/router'
import NProgress from 'nprogress'
import MenuItem from '@material-ui/core/MenuItem';
import MenuDrawer from '../components/drawer'

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default ({ children, title = 'Goran Matejin Photography' }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet='utf-8' />
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <header>
            <nav>
        <MenuDrawer>
            <Link href='/'><MenuItem><a style={{color: '#333'}}>Home</a></MenuItem></Link>
            <Link href='/example'><MenuItem><a style={{color: '#333'}}>Example</a></MenuItem></Link>
            <Link href='/non-existing'><MenuItem><a style={{color: '#333'}}>404 Page</a></MenuItem></Link>
        </MenuDrawer>
            </nav>
        </header>
        <div className="main-container">
        {children}
        </div>
        <footer>
            {'I`m here to stay'}
        </footer>
    </div>
)
