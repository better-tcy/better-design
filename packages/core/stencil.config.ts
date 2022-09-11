import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'

export const config: Config = {
  namespace: 'core',
  globalStyle: 'src/global/variables.scss',
  outputTargets: [],
  plugins: [sass()]
}
