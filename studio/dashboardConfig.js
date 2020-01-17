export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5e219842fd97f071091b78c2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qemzqt6i',
                  apiId: 'ebc23991-4cf6-40d3-88bf-d4400e7c79e9'
                },
                {
                  buildHookId: '5e21984207a0f37f3cd524ea',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-8qqa7sfs',
                  apiId: '7c3ba49e-9fbc-4210-b331-b1b921cfb37b'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kmelkon/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-8qqa7sfs.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
