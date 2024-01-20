import { TextParentStyles } from '@tamagui/text';
import { FontSizeTokens, GetProps, PropsWithoutMediaStyles, SizeTokens, ThemeableProps } from '@tamagui/web';
import React, { FunctionComponent } from 'react';
type ListItemIconProps = {
    color?: string;
    size?: number;
};
type IconProp = JSX.Element | FunctionComponent<ListItemIconProps> | null;
export type ListItemProps = Omit<TextParentStyles, 'TextComponent' | 'noTextWrap'> & GetProps<typeof ListItemFrame> & ThemeableProps & {
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
     */
    /**
     * default: -1
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
     * title
     */
    title?: React.ReactNode;
    /**
     * subtitle
     */
    subTitle?: React.ReactNode;
    /**
     * will not wrap text around `children` only, "all" will not wrap title or subTitle
     */
    noTextWrap?: boolean | 'all';
};
export declare const ListItemFrame: import("@tamagui/web").TamaguiComponent<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
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
}, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & React.RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>>;
export declare const ListItemText: import("@tamagui/web").TamaguiComponent<{
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
export declare const ListItemSubtitle: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly size?: (FontSizeTokens & SizeTokens) | undefined;
    readonly unstyled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly size?: FontSizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly unstyled?: boolean | undefined;
    readonly size?: FontSizeTokens | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>>;
export declare const ListItemTitle: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly size?: FontSizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly size?: FontSizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly unstyled?: boolean | undefined;
    readonly size?: FontSizeTokens | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>>;
export declare const useListItem: (propsIn: ListItemProps, { Text, Subtitle, Title, }?: {
    Title?: any;
    Subtitle?: any;
    Text?: any;
}) => {
    props: PropsWithoutMediaStyles<ListItemProps>;
};
export declare const ListItem: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "disabled" | "size" | "unstyled" | "active"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & ThemeableProps & {
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
     */
    /**
     * default: -1
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
     * title
     */
    title?: React.ReactNode;
    /**
     * subtitle
     */
    subTitle?: React.ReactNode;
    /**
     * will not wrap text around `children` only, "all" will not wrap title or subTitle
     */
    noTextWrap?: boolean | "all" | undefined;
}, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "disabled" | "size" | "unstyled" | "active"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & React.RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<Omit<{
    __tamaDefer: true;
}, "noTextWrap" | keyof import("@tamagui/text").TextContextStyles | "textProps" | "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "children" | "onStartShouldSetResponder" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onLayout" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "focusable" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "style" | "hitSlop" | "id" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "target" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "tag" | "group" | "untilMeasured" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onFocus" | "onScroll" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onBlur" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | "size" | "unstyled" | "active" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>>> | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace" | "title" | "subTitle"> & Omit<TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "disabled" | "size" | "unstyled" | "active"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & ThemeableProps & {
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
     */
    /**
     * default: -1
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
     * title
     */
    title?: React.ReactNode;
    /**
     * subtitle
     */
    subTitle?: React.ReactNode;
    /**
     * will not wrap text around `children` only, "all" will not wrap title or subTitle
     */
    noTextWrap?: boolean | "all" | undefined;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "disabled" | "size" | "unstyled" | "active"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
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
}, "_isEmpty"> & Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
    readonly disabled?: boolean | undefined;
}, "_isEmpty">>> & ThemeableProps & {
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
     */
    /**
     * default: -1
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
     * title
     */
    title?: React.ReactNode;
    /**
     * subtitle
     */
    subTitle?: React.ReactNode;
    /**
     * will not wrap text around `children` only, "all" will not wrap title or subTitle
     */
    noTextWrap?: boolean | "all" | undefined;
}, import("@tamagui/web").StackStylePropsBase, Omit<{
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
    readonly unstyled?: boolean | undefined;
    readonly size?: SizeTokens | undefined;
    readonly active?: boolean | undefined;
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
}, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & React.RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
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
}, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & React.RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase, void, {}];
}>>, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [Omit<{
        __tamaDefer: true;
    }, "noTextWrap" | keyof import("@tamagui/text").TextContextStyles | "textProps" | "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "children" | "onStartShouldSetResponder" | "dataSet" | "onScrollShouldSetResponder" | "onScrollShouldSetResponderCapture" | "onSelectionChangeShouldSetResponder" | "onSelectionChangeShouldSetResponderCapture" | "onLayout" | "href" | "hrefAttrs" | "elevationAndroid" | "rel" | "download" | "focusable" | "onMoveShouldSetResponder" | "onResponderEnd" | "onResponderGrant" | "onResponderReject" | "onResponderMove" | "onResponderRelease" | "onResponderStart" | "onResponderTerminationRequest" | "onResponderTerminate" | "onStartShouldSetResponderCapture" | "onMoveShouldSetResponderCapture" | "style" | "hitSlop" | "id" | "removeClippedSubviews" | "testID" | "nativeID" | "collapsable" | "needsOffscreenAlphaCompositing" | "renderToHardwareTextureAndroid" | "shouldRasterizeIOS" | "isTVSelectable" | "hasTVPreferredFocus" | "tvParallaxProperties" | "tvParallaxShiftDistanceX" | "tvParallaxShiftDistanceY" | "tvParallaxTiltAngle" | "tvParallaxMagnification" | "onTouchStart" | "onTouchMove" | "onTouchEnd" | "onTouchCancel" | "onTouchEndCapture" | "onPointerEnter" | "onPointerEnterCapture" | "onPointerLeave" | "onPointerLeaveCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerUp" | "onPointerUpCapture" | "accessible" | "accessibilityActions" | "accessibilityLabel" | "aria-label" | "accessibilityRole" | "accessibilityState" | "aria-busy" | "aria-checked" | "aria-disabled" | "aria-expanded" | "aria-selected" | "aria-labelledby" | "accessibilityHint" | "accessibilityValue" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "onAccessibilityAction" | "importantForAccessibility" | "aria-hidden" | "aria-live" | "aria-modal" | "role" | "accessibilityLiveRegion" | "accessibilityLabelledBy" | "accessibilityElementsHidden" | "accessibilityViewIsModal" | "onAccessibilityEscape" | "onAccessibilityTap" | "onMagicTap" | "accessibilityIgnoresInvertColors" | "accessibilityLanguage" | "target" | "asChild" | "dangerouslySetInnerHTML" | "disabled" | "className" | "themeShallow" | "tag" | "group" | "untilMeasured" | "tabIndex" | "disableOptimization" | "forceStyle" | "disableClassName" | "onFocus" | "onScroll" | "onPress" | "onLongPress" | "onPressIn" | "onPressOut" | "onHoverIn" | "onHoverOut" | "onMouseEnter" | "onMouseLeave" | "onMouseDown" | "onMouseUp" | "onBlur" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | "size" | "unstyled" | "active" | keyof import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>>> | keyof ThemeableProps | "icon" | "iconAfter" | "scaleIcon" | "spaceFlex" | "scaleSpace" | "title" | "subTitle"> & Omit<TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "disabled" | "size" | "unstyled" | "active"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>> & ThemeableProps & {
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
         */
        /**
         * default: -1
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
         * title
         */
        title?: React.ReactNode;
        /**
         * subtitle
         */
        subTitle?: React.ReactNode;
        /**
         * will not wrap text around `children` only, "all" will not wrap title or subTitle
         */
        noTextWrap?: boolean | "all" | undefined;
    }, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<TextParentStyles, "TextComponent" | "noTextWrap"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/web").StackStylePropsBase | "disabled" | "size" | "unstyled" | "active"> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
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
    }, "_isEmpty"> & Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    }, "_isEmpty">>> & ThemeableProps & {
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
         */
        /**
         * default: -1
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
         * title
         */
        title?: React.ReactNode;
        /**
         * subtitle
         */
        subTitle?: React.ReactNode;
        /**
         * will not wrap text around `children` only, "all" will not wrap title or subTitle
         */
        noTextWrap?: boolean | "all" | undefined;
    }, import("@tamagui/web").StackStylePropsBase, Omit<{
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
        readonly unstyled?: boolean | undefined;
        readonly size?: SizeTokens | undefined;
        readonly active?: boolean | undefined;
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
    }, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/web").StackStylePropsBase> & import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>> & import("@tamagui/web").WithPseudoProps<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void> & import("@tamagui/web").WithShorthands<import("@tamagui/web").WithThemeValues<import("@tamagui/web").StackStylePropsBase & void>>> & import("@tamagui/web").WithMediaProps<import("@tamagui/web").WithThemeShorthandsAndPseudos<import("@tamagui/web").StackStylePropsBase & void>> & React.RefAttributes<import("@tamagui/web").TamaguiElement>> & import("@tamagui/web").StaticComponentObject<{
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
    Subtitle: import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
        readonly size?: (FontSizeTokens & SizeTokens) | undefined;
        readonly unstyled?: boolean | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
        readonly size?: FontSizeTokens | undefined;
        readonly unstyled?: boolean | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
        __tamaDefer: true;
    }, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
        readonly unstyled?: boolean | undefined;
        readonly size?: FontSizeTokens | undefined;
    }, "_isEmpty">, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>>;
};
export {};
//# sourceMappingURL=ListItem.d.ts.map