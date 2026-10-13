import type { MDXComponents } from 'mdx/types'
import Callout from './components/Callout'
import Faq from './components/Faq'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    Callout,
    Faq,
    ...components,
  }
}
