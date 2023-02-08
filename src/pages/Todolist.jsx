import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet } from "react-helmet"

export function Todolist() {

  return (
    <>
      <Helmet><title>Todo List</title></Helmet>
      <div>
        Todolist
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}