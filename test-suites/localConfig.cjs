const baseUrl = process.env.BASE_URL || 'http://backchannel:8000';
module.exports = {
  settings: {},
  implementations: [
    {
      name: 'My Company',
      implementation: 'My Implementation Name',
      issuers: [
        {
          id: 'did:key:123',
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
