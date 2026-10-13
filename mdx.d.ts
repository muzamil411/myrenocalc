declare module '*.mdx' {
  import type { FC } from 'react'
  const MDXComponent: FC<Record<string, unknown>>
  export default MDXComponent
}
