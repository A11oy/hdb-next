module.exports = {
  routes: 'router.js',

  origins: [
    {
      // The name of the backend origin
      name: "origin",

      // Use the following to override the host header sent from the browser when connecting to the origin
      override_host_header: "www.alibris.com",

      // The list of origin hosts to which to connect
      hosts: [
        {
          // The domain name or IP address of the origin server
          location: "origin-www.alibris.com",
        },
      ],

      tls_verify: {
        allow_self_signed_certs: true,
      },
    },
  ],
};
