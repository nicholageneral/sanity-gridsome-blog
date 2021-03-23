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
                  buildHookId: '605a7090c9c2e80096814365',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-wm3wfuvv',
                  apiId: '0d156f95-f4fd-4bdd-bdbf-2afb00cf76bd'
                },
                {
                  buildHookId: '605a7090ae3c220078dfdeb9',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-8y7qa4hj',
                  apiId: 'e3507a54-2a6a-4681-b360-9dd5456f1cd6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nicholageneral/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-8y7qa4hj.netlify.app', category: 'apps'}
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
