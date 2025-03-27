import siteMetadata from '@/data/siteMetadata'
import { NewsletterAPI } from 'pliny/newsletter'

export const dynamic = 'force-static'

const handler = NewsletterAPI({
  // @ts-ignore
  provider: siteMetadata.newsletter.provider,
})

export const runtime = 'edge'

export { handler as GET, handler as POST }
