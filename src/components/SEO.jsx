import { Helmet } from 'react-helmet-async';

const SITE_URL = 'https://rasterberry.com';
const DEFAULT_IMAGE = `${SITE_URL}/og-cover.jpg`;

export default function SEO({ title, description, path = '/', image = DEFAULT_IMAGE }) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = title ? `${title} — Rasterberry` : 'Rasterberry — Design Studio';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Rasterberry" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}