export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW',
      },
    },
    {
      name: 'Category',
      url: '/category',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'List',
          url: '/category',
          icon: 'icon-puzzle',
        },
      ],
    },
  ],
};
