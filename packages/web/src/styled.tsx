import { createComponent } from './createComponent'
import { StyledContext } from './helpers/createStyledContext'
import { mergeVariants } from './helpers/mergeVariants'
import type { GetRef } from './interfaces/GetRef'
import { getReactNativeConfig } from './setupReactNative'
import type {
  GetBaseStyles,
  GetNonStyledProps,
  GetProps,
  GetStyledVariants,
  GetVariantValues,
  StaticConfig,
  StylableComponent,
  TamaguiComponent,
  ThemeValueByCategory,
  VariantDefinitions,
  VariantSpreadFunction,
} from './types'

type AreVariantsUndefined<Variants> =
  // because we pass in the Generic variants which for some reason has this :)
  Required<Variants> extends { _isEmpty: 1 } ? true : false

type GetVariantAcceptedValues<V> = V extends Object
  ? {
      [Key in keyof V]?: V[Key] extends VariantSpreadFunction<any, infer Val>
        ? Val
        : GetVariantValues<keyof V[Key]>
    }
  : undefined

export function styled<
  ParentComponent extends StylableComponent,
  Variants extends VariantDefinitions<ParentComponent>,
  StyledStaticConfig extends Partial<StaticConfig> = {},
>(
  ComponentIn: ParentComponent,
  // this should be Partial<GetProps<ParentComponent>> but causes excessively deep type issues
  options?: GetProps<ParentComponent> & {
    name?: string
    variants?: Variants | undefined
    defaultVariants?: GetVariantAcceptedValues<Variants>
    context?: StyledContext
    acceptsClassName?: boolean
  },
  staticExtractionOptions?: StyledStaticConfig
) {
  // do type stuff at top for easier readability

  // get parent props without pseudos and medias so we can rebuild both with new variants
  // get parent props without pseudos and medias so we can rebuild both with new variants
  type ParentNonStyledProps = GetNonStyledProps<ParentComponent>
  type ParentStylesBase = GetBaseStyles<ParentComponent>
  type ParentVariants = GetStyledVariants<ParentComponent>

  type OurVariantProps = AreVariantsUndefined<Variants> extends true
    ? {}
    : GetVariantAcceptedValues<Variants>

  type MergedVariants = AreVariantsUndefined<Variants> extends true
    ? ParentVariants
    : AreVariantsUndefined<ParentVariants> extends true
      ? Exclude<OurVariantProps, '_isEmpty'>
      : {
          // exclude _isEmpty as it no longer is empty
          [Key in Exclude<keyof ParentVariants | keyof OurVariantProps, '_isEmpty'>]?:
            | (Key extends keyof ParentVariants ? ParentVariants[Key] : undefined)
            | (Key extends keyof OurVariantProps ? OurVariantProps[Key] : undefined)
        }

  type AcceptedTokens = StyledStaticConfig['acceptTokens']
  type CustomTokenProps = AcceptedTokens extends Object
    ? {
        [Key in keyof AcceptedTokens]: ThemeValueByCategory<AcceptedTokens[Key]>
      }
    : {}

  /**
   * de-opting a bit of type niceness because were hitting depth issues too soon
   * before we had:
   *
   * type OurPropsBase = OurStylesBase & PseudoProps<Partial<OurStylesBase>>
   * and then below in type Props you would remove the PseudoProps line
   * that would give you nicely merged pseudo sub-styles but its just too much for TS
   * so now pseudos wont be nicely typed inside media queries, but at least we can nest
   */

  type z = { asdsa: 4 }
  type a = z extends { asdsa?: 1 } ? true : false

  type StyledComponent = TamaguiComponent<
    ParentComponent extends { __tama: any }
      ? { __tamaDefer: true }
      : GetProps<ParentComponent>,
    GetRef<ParentComponent>,
    ParentNonStyledProps,
    ParentStylesBase & CustomTokenProps,
    MergedVariants,
    ParentComponent
  >

  // validate not using a variant over an existing valid style
  if (process.env.NODE_ENV !== 'production') {
    if (!ComponentIn) {
      throw new Error(`No component given to styled()`)
    }
  }

  const parentStaticConfig = ComponentIn['staticConfig'] as StaticConfig | undefined

  const isPlainStyledComponent =
    !!parentStaticConfig &&
    !(parentStaticConfig.isReactNative || parentStaticConfig.isHOC)

  const isNonStyledHOC = parentStaticConfig?.isHOC && !parentStaticConfig?.isStyledHOC

  let Component: any =
    isNonStyledHOC || isPlainStyledComponent
      ? ComponentIn
      : parentStaticConfig?.Component || ComponentIn

  const reactNativeConfig = !parentStaticConfig
    ? getReactNativeConfig(Component)
    : undefined

  const isReactNative = Boolean(
    reactNativeConfig ||
      staticExtractionOptions?.isReactNative ||
      parentStaticConfig?.isReactNative
  )

  const staticConfigProps = (() => {
    if (options) {
      let {
        variants,
        name,
        defaultVariants,
        acceptsClassName: acceptsClassNameProp,
        context,
        ...defaultProps
      } = options

      if (defaultVariants) {
        defaultProps = {
          ...defaultVariants,
          ...defaultProps,
        }
      }

      if (parentStaticConfig) {
        const avoid = parentStaticConfig.isHOC && !parentStaticConfig.isStyledHOC
        if (!avoid) {
          defaultProps = {
            ...parentStaticConfig.defaultProps,
            ...defaultProps,
          }
          if (parentStaticConfig.variants) {
            variants = mergeVariants(parentStaticConfig.variants, variants)
          }
        }
      }

      if (parentStaticConfig?.isHOC) {
        // if HOC we map name => componentName as we have a difference in how we name prop vs styled() there
        if (name) {
          // @ts-ignore
          defaultProps.componentName = name
        }
      }

      const isText = Boolean(
        staticExtractionOptions?.isText || parentStaticConfig?.isText
      )

      const acceptsClassName =
        acceptsClassNameProp ??
        (isPlainStyledComponent ||
          isReactNative ||
          (parentStaticConfig?.isHOC && parentStaticConfig?.acceptsClassName))

      const conf: Partial<StaticConfig> = {
        ...parentStaticConfig,
        ...staticExtractionOptions,
        ...(!isPlainStyledComponent && {
          Component,
        }),
        // this type gets messed up by options?: Partial<GetProps<ParentComponent>> above
        // take away the Partial<> and it's fine
        variants,
        defaultProps,
        defaultVariants,
        componentName: name || parentStaticConfig?.componentName,
        isReactNative,
        isText,
        acceptsClassName,
        context,
        ...reactNativeConfig,
        isStyledHOC: Boolean(parentStaticConfig?.isHOC),
        parentStaticConfig,
      }

      // bail on non className views as well
      if (defaultProps.children || !acceptsClassName || context) {
        conf.neverFlatten = true
      }

      return conf
    }
  })()

  const component = createComponent(staticConfigProps || {})

  for (const key in ComponentIn) {
    if (key in component) continue
    // @ts-expect-error assigning static properties over
    component[key] = ComponentIn[key]
  }

  return component as any as StyledComponent
}

// sanity check types:

// import { Stack } from './views/Stack'
// const X = styled(Stack, {
//   variants: {
//     size: {
//       '...size': (val) => {
//         return {
//           pointerEvents: 'auto'
//         }
//       }
//     },
//     disabled: {
//       true: {
//         alignContent: 'center',
//         opacity: 0.5,
//         pointerEvents: 'none',
//       },
//     },
//   } as const
// })
// // type variants = GetStyledVariants<typeof X>
// const y = <X disabled size="$10" />

// sanity check more complex types:

// import { Paragraph } from '../../text/src/Paragraph'
// import { Text } from './views/Text'
// import { getFontSized } from '../../get-font-sized/src'
// import { SizableText } from '../../text/src/SizableText'
// const Text1 = styled(Text, {
//   name: 'SizableText',
//   fontFamily: '$body',

//   variants: {
//     size: getFontSized,
//   } as const,

//   defaultVariants: {
//     size: '$true',
//   },
// })

// const Test2 = styled(Text1, {
//   tag: 'p',
//   userSelect: 'auto',
//   color: '$color',
// })

// const Test3 = styled(Test2, {
//   tag: 'p',
//   userSelect: 'auto',
//   color: '$color',

//   variants: {
//     ork: {
//       true: {}
//     }
//   }
// })

// const Test = styled(Paragraph, {
//   tag: 'p',
//   userSelect: 'auto',
//   color: '$color',

//   variants: {
//     someting: {
//       true: {},
//     },
//   } as const,
// })

// type X = typeof Paragraph
// type Props1 = GetProps<typeof Paragraph>
// type z = typeof Text1
// type ParentV = GetVariantProps<typeof Text1>
// type Props = GetProps<typeof Test>

// const y = <Test someting>sadad</Test>
// const z = <Test3 someting="$true" ork>sadad</Test3>

//
// merges variant types properly:

// const OneVariant = styled(Stack, {
//   variants: {
//     variant: {
//       test: { backgroundColor: 'gray' },
//     },
//   } as const,
// })
// const Second = styled(Stack, {
//   variants: {
//     variant: {
//       simple: { backgroundColor: 'gray' },
//       colorful: { backgroundColor: 'violet' },
//     },
//   } as const,
// })
// const TwoVariant = styled(OneVariant, {
//   variants: {
//     variant: {
//       simple: { backgroundColor: 'gray' },
//       colorful: { backgroundColor: 'violet' },
//     },
//   } as const,
// })

// type X = typeof OneVariant extends TamaguiComponent<any, any, any, infer V> ? V : any
// type V = typeof Second extends TamaguiComponent<any, any, any, infer V> ? V : any

// type V2 = VariantDefinitions<typeof OneVariant>

// type R = typeof TwoVariant extends TamaguiComponent<any, any, any, infer V> ? V : any

// type Keys = keyof X | keyof V
// type Z = {
//   [Key in Keys]: V[Key] | X[Key]
// }

// const a: Z = {
//   variant: 'colorful',
// }
// const b: Z = {
//   variant: 'simple',
// }
// const c: Z = {
//   variant: 'invalid',
// }

// const y = <TwoVariant variant="colorful" />
