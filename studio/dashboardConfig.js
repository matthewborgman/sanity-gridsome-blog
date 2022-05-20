export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '6287b855e5974d1a97974eab',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-s1ukton8',
                  apiId: '60baf1cd-c42a-4305-93c8-29234fba9ebc'
                },
                {
                  buildHookId: '6287b855e5974d1a97974eac',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-jzohpwsi',
                  apiId: 'e99c1091-9ee6-4591-8f43-64c739abab23'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/matthewborgman/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-jzohpwsi.netlify.app', category: 'apps'}
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
