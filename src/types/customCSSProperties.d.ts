import { CSSProperties } from 'react'

export interface CustomCSSProperties extends CSSProperties {
    '--width375'?: string
    '--height375'?: string
    '--width768'?: string
    '--height768'?: string
    '--width1440'?: string
    '--height1440'?: string
    '--width1920'?: string
    '--height1920'?: string
    '--width3440'?: string
    '--height3440'?: string
    '--paddingInline375'?: string
    '--paddingBlock375'?: string
    '--paddingInline768'?: string
    '--paddingBlock768'?: string
    '--paddingInline1440'?: string
    '--paddingBlock1440'?: string
    '--paddingInline1920'?: string
    '--paddingBlock1920'?: string
    '--cornersWidth768'?: string
    '--cornersHeight768'?: string
    '--borderRadius768'?: string
}
