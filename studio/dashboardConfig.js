export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63270419c1fda71e43d5fb7c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ry1rwb6d',
                  apiId: '8ac04fd4-b29b-4536-b82c-f5898b62f74a'
                },
                {
                  buildHookId: '63270418c2a8211cfe629a10',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mu5mv6dh',
                  apiId: '176223d9-28f8-4e17-90c0-3d2236ddec07'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tobiasn/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mu5mv6dh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
