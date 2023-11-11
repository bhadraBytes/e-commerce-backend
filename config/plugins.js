module.exports = ({ env }) => ({
    // Other configurations for plugins can go here
  
    // Users & Permissions plugin configuration
    'users-permissions': {
      // Adjust the configurations based on your requirements
      email_confirmation: env.bool('EMAIL_CONFIRMATION', false),
      email_confirmation_redirection: env('EMAIL_CONFIRMATION_REDIRECTION', '/confirmation'),
      email_sender: env('EMAIL_SENDER', 'noreply@yourdomain.com'),
      jwt_secret: env('JWT_SECRET', 'uKq9aXo7NSOEeV1t/765Sg=='),  // <-- Add your JWT secret here
      default_role: env('DEFAULT_ROLE', 'authenticated'),
    },
    database: {
      // Add your database configurations here
      client: env('DATABASE_CLIENT', 'sqlite'),
      connection: {
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
      },
    },
  });
  