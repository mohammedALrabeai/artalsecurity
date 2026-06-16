import type { RouteRecord } from 'vite-react-ssg';
import { Layout } from './Layout';
import { HomePage } from './pages/HomePage';
import { CareersPage } from './pages/CareersPage';
import { SectorPage } from './pages/SectorPage';
import { SectorsIndexPage } from './pages/SectorsIndexPage';
import { LocationPage } from './pages/LocationPage';
import { BlogIndexPage } from './pages/BlogIndexPage';
import { ArticlePage } from './pages/ArticlePage';
import { ServicesIndexPage } from './pages/ServicesIndexPage';
import { ServicePage } from './pages/ServicePage';
import { SECTOR_SLUGS } from './data/sectors';
import { CITY_SLUGS } from './data/cities';
import { ARTICLE_SLUGS } from './data/articles';
import { SERVICE_SLUGS } from './data/services';

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
      { path: 'services', id: 'en-services-index', Component: ServicesIndexPage },
      {
        path: 'services/:slug',
        id: 'en-service',
        Component: ServicePage,
        getStaticPaths: () => SERVICE_SLUGS.map((s) => `services/${s}`),
      },
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
      { path: 'blog', id: 'en-blog-index', Component: BlogIndexPage },
      {
        path: 'blog/:slug',
        id: 'en-article',
        Component: ArticlePage,
        getStaticPaths: () => ARTICLE_SLUGS.map((s) => `blog/${s}`),
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
      { path: 'services', id: 'ar-services-index', Component: ServicesIndexPage },
      {
        path: 'services/:slug',
        id: 'ar-service',
        Component: ServicePage,
        getStaticPaths: () => SERVICE_SLUGS.map((s) => `services/${s}`),
      },
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
      { path: 'blog', id: 'ar-blog-index', Component: BlogIndexPage },
      {
        path: 'blog/:slug',
        id: 'ar-article',
        Component: ArticlePage,
        getStaticPaths: () => ARTICLE_SLUGS.map((s) => `blog/${s}`),
      },
    ],
  },
];
