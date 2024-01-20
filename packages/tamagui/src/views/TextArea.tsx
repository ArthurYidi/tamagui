import { isWeb } from '@tamagui/constants'
import { GetProps, styled } from '@tamagui/core'

import { textAreaSizeVariant } from '../helpers/inputHelpers'
import { InputFrame, InputProps, defaultStyles, useInputProps } from './Input'

/**
 * Is basically Input but with rows = 4 to start
 */

export const TextAreaFrame = styled(InputFrame, {
  name: 'TextArea',
  multiline: true,
  // this attribute fixes firefox newline issue
  whiteSpace: 'pre-wrap',

  variants: {
    unstyled: {
      false: {
        height: 'auto',
        ...defaultStyles,
      },
    },

    size: {
      '...size': textAreaSizeVariant,
    },
  } as const,

  defaultVariants: {
    unstyled: process.env.TAMAGUI_HEADLESS === '1' ? true : false,
  },
})

export type TextAreaProps = GetProps<typeof TextAreaFrame>

export const TextArea = TextAreaFrame.styleable((propsIn, ref) => {
  const props = useInputProps(propsIn, ref)
  // defaults to 4 rows
  const linesProp = {
    // web uses rows now, but native not caught up :/
    [isWeb ? 'rows' : 'numberOfLines']: propsIn.unstyled ? undefined : 4,
  }
  return <TextAreaFrame {...linesProp} {...props} />
})
