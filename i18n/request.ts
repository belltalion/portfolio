import { hasLocale } from 'next-intl'
import { getRequestConfig } from 'next-intl/server'

import { fetchClient } from '@/openApiClient'

import { routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale

  try {
    const { data, error } = await fetchClient.GET('/landing/locale')

    if (!data || !data.text || error)
      return {
        locale,
        messages: {},
      }

    const messages = data.text[locale] || data.text[routing.defaultLocale] || {}

    return {
      locale,
      messages,
    }
  } catch (error) {
    console.error(error)
    return {
      locale,
      messages: {},
    }
  }
})
