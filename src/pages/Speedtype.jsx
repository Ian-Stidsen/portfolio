import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet"

export function Speedtype() {

  return (
    <>
      <Helmet><title>Speedtype</title></Helmet>
      <div>
        Speedtype
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}