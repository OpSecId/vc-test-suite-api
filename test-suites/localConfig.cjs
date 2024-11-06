const baseUrl = process.env.BASE_URL || 'https://askar.dev.opsec.id';
module.exports = {
  settings: {},
  implementations: [
    {
      name: 'My Company',
      implementation: 'My Implementation Name',
      issuers: [
        {
          id: 'did:key:z6MkwMaVueYP9pYSTKxtRSMzgzsSkpx1wrhwdq8MEHFxtHdu',
          endpoint: `${baseUrl}/credentials/issue`,
          tags: ['vc2.0']
        }
      ],
      verifiers: [{
        id: '',
        endpoint: `${baseUrl}/credentials/verify`,
        tags: ['vc2.0']
      }],
      vpVerifiers: [{
        id: '',
        endpoint: `${baseUrl}/presentations/verify`,
        tags: ['vc2.0']
      }]
    }
  ]
};
