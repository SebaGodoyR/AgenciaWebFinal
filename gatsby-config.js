module.exports = {
    siteMetadata: {
        title: "Agencia Los Navegantes",
        titleTemplate: "Agencia Los Navegantes",
        description: "Aumenta tus ventas Online",
        author: "Sebastian Godoy",
        url: "https://agencia-web-final.vercel.app",
        image: "https://www.agencialosnavegantes.cl/wp-content/uploads/2021/04/Agencia_Seo_Facebook.jpg"
    },
    
    plugins: [
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sass`,

        
        {
            resolve: `gatsby-source-strapi`,
            options: {
              apiURL: `https://agencia-refressh.herokuapp.com`,
              queryLimit: 1000, // Defaults to 100
              collectionTypes: [`post`,`instagram-contenidos`,`categoria`], 
              singleTypes: [`home`,`mkt`,`tripulacion`,`analitica`],
            },
          },
          {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: 'React go',
            short_name: 'Reactgo',
            start_url: '/',
            background_color: '#f7f0eb',
            theme_color: '#a2466c',
            display: 'standalone',
            icon: 'src/images/logo.png',
          },
        },
       
       
    ]
}