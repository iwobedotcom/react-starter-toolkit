import React, { lazy, Suspense } from 'react';
import { Navigate, Route, Routes as Routes_ } from 'react-router-dom';
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
        <Route path={'/'} element={<Home />} />
        <Route path={'/about'} element={<AboutPage />} />
        <Route path={'/not-found'} element={<NotFoundPage />} />
        <Route path="*" element={<Navigate to={'/not-found'} />} />
      </Routes_>
    </Suspense>
  );
}

export default Routes;
