// Service API for Prismic CMS
import Prismic from '@prismicio/client' 

export function getPrismicClient(req?: unknown) {
  const prismic = Prismic.client( 
    process.env.PRISMIC_ENDPOINT,
    {
      req,
      accessToken: process.env.PRISMIC_ACCESS_TOKEN,
      // apiEndpoint: process.env.PRISMIC_API_ENDPOINT,
    }
  )

  return prismic
}