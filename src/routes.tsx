import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { CareersPage } from './pages/CareersPage';
import { SectorPage } from './pages/SectorPage';
import { SectorsIndexPage } from './pages/SectorsIndexPage';
import { LocationPage } from './pages/LocationPage';
import { SECTOR_SLUGS } from './data/sectors';
import { CITY_SLUGS } from './data/cities';

/**
 * Route table for vite-react-ssg. Both locale trees are prerendered to static
 * HTML at build time: '/', '/careers', '/sectors/<slug>', and the '/ar' mirror.
 *
 * NOTE: each route needs a globally-unique `id` and its OWN child objects —
 * sharing the same child array across both locale trees causes a react-router
 * "route id collision" and breaks client hydration (white screen).
 */
export const routes: RouteRecord[] = [
  {
    path: '/',
    id: 'en-root',
    Component: Layout,
    children: [
      { index: true, id: 'en-home', Component: HomePage },
      { path: 'careers', id: 'en-careers', Component: CareersPage },
      { path: 'sectors', id: 'en-sectors-index', Component: SectorsIndexPage },
      {
        path: 'sectors/:slug',
        id: 'en-sector',
        Component: SectorPage,
        getStaticPaths: () => SECTOR_SLUGS.map((s) => `sectors/${s}`),
      },
      {
        path: 'locations/:slug',
        id: 'en-location',
        Component: LocationPage,
        getStaticPaths: () => CITY_SLUGS.map((s) => `locations/${s}`),
      },
    ],
  },
  {
    path: '/ar',
    id: 'ar-root',
    Component: Layout,
    children: [
      { index: true, id: 'ar-home', Component: HomePage },
      { path: 'careers', id: 'ar-careers', Component: CareersPage },
      { path: 'sectors', id: 'ar-sectors-index', Component: SectorsIndexPage },
      {
        path: 'sectors/:slug',
        id: 'ar-sector',
        Component: SectorPage,
        getStaticPaths: () => SECTOR_SLUGS.map((s) => `sectors/${s}`),
      },
      {
        path: 'locations/:slug',
        id: 'ar-location',
        Component: LocationPage,
        getStaticPaths: () => CITY_SLUGS.map((s) => `locations/${s}`),
      },
    ],
  },
];
