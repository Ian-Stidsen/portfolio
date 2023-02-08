import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet";

export function Rates() {

  return (
    <>
      <Helmet><title>Rates</title></Helmet>
      <div>
        Rates
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}