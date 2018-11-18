import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}

const Dashboard = Loadable({
  loader: () => import('./../views/Dashboard'),
  loading: Loading,
});

const Category = Loadable({
  loader: () => import('./../modules/category'),
  loading: Loading,
})

const CategoryDetail = Loadable({
  loader: () => import('./../modules/category/detail'),
  loading: Loading,
})

const CategoryAdd = Loadable({
  loader: () => import('./../modules/category/add'),
  loading: Loading,
})

const Articles = Loadable({
  loader: () => import('./../modules/article'),
  loading: Loading,
})

const ArticlesAdd = Loadable({
  loader: () => import('./../modules/article/add'),
  loading: Loading,
})

const ArticlesEdit = Loadable({
  loader: () => import('./../modules/article/detail'),
  loading: Loading,
})

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/category', exact: true, name: 'Category', component: Category },
  { path: '/category/:id/edit', exact: true, name: 'Category Detail', component: CategoryDetail },
  { path: '/category/add', exact: true, name: 'Create Category', component: CategoryAdd },
  { path: '/article', exact: true, name: 'Article', component: Articles },
  { path: '/article/add', exact: true, name: 'Create Category', component: ArticlesAdd },
  { path: '/article/:id/edit', exact: true, name: 'Edit Article', component: ArticlesEdit },
];

export default routes;
