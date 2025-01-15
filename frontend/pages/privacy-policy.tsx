import { Layout } from '@/src/components/shared'
import { PrivacyPolicy } from '@/src/components/legal'
import type { NextPage } from 'next'

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  )
}

export default PrivacyPolicyPage