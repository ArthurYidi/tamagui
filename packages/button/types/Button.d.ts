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
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>>;
declare const ButtonText: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>;
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
    textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> | undefined;
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
}, "size" | keyof import("@tamagui/web").StackStylePropsBase | "variant" | "disabled" | "unstyled" | "transparent" | "circular" | "fullscreen" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<Omit<{
    __tamaDefer: true;
}, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace"> & TextContextStyles & {
    textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> | undefined;
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
    textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> | undefined;
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
}, import("@tamagui/web").StackStylePropsBase, {
    size?: SizeTokens | undefined;
    elevation?: number | SizeTokens | undefined;
    variant?: "outlined" | undefined;
    disabled?: boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>> & Omit<import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<{
        __tamaDefer: true;
    }, keyof TextContextStyles | "unstyled" | "textProps" | "noTextWrap" | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace"> & TextContextStyles & {
        textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }>> | undefined;
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
        textProps?: Partial<import("@tamagui/web").GetFinalProps<import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase & void & {
            size?: FontSizeTokens | undefined;
            unstyled?: boolean | undefined;
        }>> | undefined;
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
    }, import("@tamagui/web").StackStylePropsBase, {
        size?: SizeTokens | undefined;
        elevation?: number | SizeTokens | undefined;
        variant?: "outlined" | undefined;
        disabled?: boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        circular?: boolean | undefined;
        fullscreen?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
        elevation?: number | SizeTokens | undefined;
        transparent?: boolean | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, {
        elevation?: number | SizeTokens | undefined;
        fullscreen?: boolean | undefined;
    }, import("react").ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
        __tama: [{
            __tamaDefer: true;
        }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
    }>>];
} & {
    Text: import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
        size?: FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>;
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