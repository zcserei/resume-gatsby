import Typography from 'typography'
import stardustTheme from 'typography-theme-stardust'

import '@ibm/type/css/ibm-type.min.css'

stardustTheme.headerFontFamily = ['ibm-plex-sans', 'sans-serif']
stardustTheme.bodyFontFamily = ['ibm-plex-sans', 'sans-serif']

const typography = new Typography(stardustTheme)

export default typography
