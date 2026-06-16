import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
import './index.css';

// SSG entry — vite-react-ssg prerenders each route to static HTML at build
// time and hydrates it on the client.
export const createRoot = ViteReactSSG({ routes });
