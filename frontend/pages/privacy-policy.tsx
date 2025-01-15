import { Layout } from '@/components/shared'
import { PrivacyPolicy } from '@/components/legal'
import type { NextPage } from 'next'

const PrivacyPolicyPage: NextPage = () => {
  return (
    <Layout>
      <PrivacyPolicy />
    </Layout>
  )
}

export default PrivacyPolicyPage