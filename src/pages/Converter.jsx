import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet"

export function Converter() {

  return (
    <>
      <Helmet><title>Converter</title></Helmet>
      <div>
        Converter
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}