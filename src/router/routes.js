export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
      { path: 'home', component: () => import('pages/home') },
      { path: 'publication', component: () => import('pages/publication') },
      { path: 'research', component: () => import('pages/research') },
      { path: 'teaching', component: () => import('pages/teaching') },
      { path: 'services', component: () => import('pages/services') },
      { path: 'students', component: () => import('pages/students') },
      { path: 'resources', component: () => import('pages/resources') }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
