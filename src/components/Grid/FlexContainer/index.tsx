import styled from 'styled-components'
import { SIZES } from '~/styles/variables'

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse'

type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse'

type FlexAligments =
  | 'flex-start'
  | 'flex-end'
  | 'center'
  | 'space-around'
  | 'space-between'
  | 'space-evently'
  | 'stretch'
  | 'self-start'
  | 'self-end'

type Margins = 'small' | 'normal' | 'large' | 'larger'

type ColumnSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12

interface FlexContainerProps {
  flexDirection?: FlexDirection
  flexGrow?: number
  flexWrap?: FlexWrap
  justifyContent?: FlexAligments
  alignItems?: FlexAligments
  alignContent?: FlexAligments
  alignSelf?: FlexAligments
  gap?: string
  paddingTop?: Margins
  paddingBottom?: Margins
  paddingHorizontal?: Margins
  paddingVertical?: Margins
  column?: ColumnSizes
}

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;

  flex-direction: ${props => props.flexDirection};
  flex-grow: ${props => props.flexGrow};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};

  ${props => props.column && `width: ${100 / props.column}%;`}

  ${props => props.gap && `gap: ${props.gap};`}
  ${props => props.alignContent && `align-content: ${props.alignContent};`}
  ${props => props.alignSelf && `align-self: ${props.alignSelf};`};

  ${props => props.paddingTop && `padding-top: ${SIZES[props.paddingTop]};`};

  ${props =>
    props.paddingBottom && `padding-bottom: ${SIZES[props.paddingBottom]};`};

  ${props =>
    props.paddingVertical &&
    `padding-top: ${SIZES[props.paddingVertical]};padding-bottom: ${
      SIZES[props.paddingVertical]
    };
    `};

  ${props =>
    props.paddingHorizontal &&
    `padding-left: ${SIZES[props.paddingVertical]};padding-right: ${
      SIZES[props.paddingVertical]
    };
    `};
`

export default FlexContainer
