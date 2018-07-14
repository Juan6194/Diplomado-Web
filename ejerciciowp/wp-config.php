<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'snoopy');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'SZbpAhkC FtgA^Mv*~u!k-M<6{(dz)majHzg0>F&:GqfO1)biA?<XU&74m}.;A@c');
define('SECURE_AUTH_KEY',  '{L[_S!Fs!*F5S0kTSVs)8e>g,z_$~Uc,1Y%NW}jP?M=usnKDNx=USKMZ-/$rO0@G');
define('LOGGED_IN_KEY',    'AS#lDf &<]_TQ:,O~<F%MZ.fmS.x$qchPQ)Ylaum$K|5yku2jp$8_c.t*Q)=}{FD');
define('NONCE_KEY',        '-BspUPqO`px0V+sh46:iih0Tw=r~q:#c) 23[HkCvfM/tv:N(;P`[qi``z;Q>/`q');
define('AUTH_SALT',        'J;ps1h+&<8u{j`U%Zp8QqMY (mE{) w;?A&_>-d-{Y4M$aD48@KIgU_lX+_)vVkL');
define('SECURE_AUTH_SALT', 'jGC{Bfp9N+U+)+KhB9g+I5n)@{p,i[Z= 4BnW:9F5yI(h6%3ID<(B_q_0rgeo-Vz');
define('LOGGED_IN_SALT',   '`=9mG3.WMe8^v@v+ehMDMR[;!G/|,%h0MuxLm{<?z}ExEFdIig[94bJ~w$~}RFr(');
define('NONCE_SALT',       'RrM/(_|aV,0dmr9;~0Mc2!*o3}8A5cpdMwV.0v(2Aj1=:Z-xpLUCsC)S]2c-W>$-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
