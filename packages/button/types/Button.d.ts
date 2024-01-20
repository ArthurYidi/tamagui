import { TextContextStyles, TextParentStyles } from '@tamagui/text';
import { FontSizeTokens, GetProps, SizeTokens, ThemeableProps } from '@tamagui/web';
import { FunctionComponent } from 'react';
export declare const ButtonContext: import("@tamagui/web").StyledContext<Partial<TextContextStyles & {
    size: SizeTokens;
    variant?: "outlined" | undefined;
}>>;
type ButtonIconProps = {
    color?: string;
    size?: number;
};
type IconProp = JSX.Element | FunctionComponent<ButtonIconProps> | null;
type ButtonExtraProps = TextParentStyles & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number;
    /**
     * remove default styles
     */
    unstyled?: boolean;
};
type ButtonProps = ButtonExtraProps & GetProps<typeof ButtonFrame>;
declare const ButtonFrame: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty">, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>>;
declare const ButtonText: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly size?: FontSizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly unstyled?: boolean | undefined;
    readonly size?: FontSizeTokens | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>;
declare const ButtonIcon: (props: {
    children: React.ReactNode;
    scaleIcon?: number;
}) => any;
/**
 * @deprecated Instead of useButton, see the Button docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
declare const buttonStaticConfig: {
    inlineProps: Set<string>;
};
declare const Button: import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & TextContextStyles & {
    textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }, "_isEmpty">>> | undefined;
    noTextWrap?: boolean | undefined;
} & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     * remove default styles
     */
    unstyled?: boolean | undefined;
}, "size" | keyof import("@tamagui/web").StackStylePropsBase | "variant" | "unstyled" | "disabled" | "transparent" | "circular" | "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "padded" | "elevate" | "bordered" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<Omit<{
    __tamaDefer: true;
}, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace"> & TextContextStyles & {
    textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }, "_isEmpty">>> | undefined;
    noTextWrap?: boolean | undefined;
} & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     * remove default styles
     */
    unstyled?: boolean | undefined;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & TextContextStyles & {
    textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }, "_isEmpty">>> | undefined;
    noTextWrap?: boolean | undefined;
} & ThemeableProps & {
    /**
     * add icon before, passes color and size automatically if Component
     */
    icon?: IconProp | undefined;
    /**
     * add icon after, passes color and size automatically if Component
     */
    iconAfter?: IconProp | undefined;
    /**
     * adjust icon relative to size
     *
     * @default 1
     */
    scaleIcon?: number | undefined;
    /**
     * make the spacing elements flex
     */
    spaceFlex?: number | boolean | undefined;
    /**
     * adjust internal space relative to icon size
     */
    scaleSpace?: number | undefined;
    /**
     * remove default styles
     */
    unstyled?: boolean | undefined;
}, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly unstyled?: boolean | undefined;
    readonly variant?: "outlined" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty">, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>> & Omit<import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty">, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<{
        __tamaDefer: true;
    }, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace"> & TextContextStyles & {
        textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & Omit<{
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }, "_isEmpty">>> | undefined;
        noTextWrap?: boolean | undefined;
    } & ThemeableProps & {
        /**
         * add icon before, passes color and size automatically if Component
         */
        icon?: IconProp | undefined;
        /**
         * add icon after, passes color and size automatically if Component
         */
        iconAfter?: IconProp | undefined;
        /**
         * adjust icon relative to size
         *
         * @default 1
         */
        scaleIcon?: number | undefined;
        /**
         * make the spacing elements flex
         */
        spaceFlex?: number | boolean | undefined;
        /**
         * adjust internal space relative to icon size
         */
        scaleSpace?: number | undefined;
        /**
         * remove default styles
         */
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & TextContextStyles & {
        textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & Omit<{
            readonly unstyled?: boolean | undefined;
            readonly size?: FontSizeTokens | undefined;
        }, "_isEmpty">>> | undefined;
        noTextWrap?: boolean | undefined;
    } & ThemeableProps & {
        /**
         * add icon before, passes color and size automatically if Component
         */
        icon?: IconProp | undefined;
        /**
         * add icon after, passes color and size automatically if Component
         */
        iconAfter?: IconProp | undefined;
        /**
         * adjust icon relative to size
         *
         * @default 1
         */
        scaleIcon?: number | undefined;
        /**
         * make the spacing elements flex
         */
        spaceFlex?: number | boolean | undefined;
        /**
         * adjust internal space relative to icon size
         */
        scaleSpace?: number | undefined;
        /**
         * remove default styles
         */
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").StackStylePropsBase, Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
        readonly unstyled?: boolean | undefined;
        readonly variant?: "outlined" | undefined;
        readonly size?: SizeTokens | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty">, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
        __tama: [{
            __tamaDefer: true;
        }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
    }>>];
} & {
    Text: import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
        readonly size?: FontSizeTokens | undefined;
        readonly unstyled?: boolean | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>;
    Icon: (props: {
        children: React.ReactNode;
        scaleIcon?: number;
    }) => any;
};
/**
 * @deprecated Instead of useButton, see the Button docs for the newer and much improved Advanced customization pattern: https://tamagui.dev/docs/components/button
 */
declare function useButton<Props extends ButtonProps>({ textProps, ...propsIn }: Props, { Text }?: {
    Text: any;
}): {
    spaceSize: number | boolean | "unset" | import("@tamagui/web").UnionableString | import("@tamagui/web").Variable<any>;
    isNested: boolean;
    props: Props;
};
export { Button, ButtonFrame, ButtonIcon, ButtonText, buttonStaticConfig, useButton, };
export type { ButtonProps };
//# sourceMappingURL=Button.d.ts.map