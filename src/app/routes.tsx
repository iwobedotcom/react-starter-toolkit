import React, { lazy, Suspense } from 'react';
import { Route, Routes as Routes_ } from 'react-router-dom';
import Layout from './views/layout/Layout';
import { Home } from './views/pages';
const AboutPage = lazy(() => import('./views/pages/AboutPage'));
const NotFoundPage = lazy(() => import('./views/pages/NotFoundPage'));

function LinearProgress() {
  return <em>Fallback Element</em>;
}

function Routes() {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Routes_>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes_>
    </Suspense>
  );
}

export default Routes;
