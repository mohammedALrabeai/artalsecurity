import { ViteReactSSG } from 'vite-react-ssg';
import { routes } from './routes';
// Self-hosted Cairo font (replaces render-blocking Google Fonts @import)
import '@fontsource/cairo/300.css';
import '@fontsource/cairo/400.css';
import '@fontsource/cairo/500.css';
import '@fontsource/cairo/600.css';
import '@fontsource/cairo/700.css';
import '@fontsource/cairo/800.css';
import './index.css';

// SSG entry — vite-react-ssg prerenders each route to static HTML at build
// time and hydrates it on the client.
export const createRoot = ViteReactSSG({ routes });
