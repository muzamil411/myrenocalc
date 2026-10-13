import createMDX from '@next/mdx'

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    // String tuples keep the config serializable for Turbopack.
    remarkPlugins: [
      ['remark-frontmatter', { type: 'yaml', marker: '-' }],
      ['remark-gfm', {}],
    ],
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  images: { unoptimized: true },
}

export default withMDX(nextConfig)
