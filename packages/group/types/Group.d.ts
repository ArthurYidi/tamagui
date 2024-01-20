import { GetProps, TamaguiElement } from '@tamagui/core';
import { Scope } from '@tamagui/create-context';
import React from 'react';
type DisablePassBorderRadius = boolean | 'bottom' | 'top' | 'start' | 'end';
type ScopedProps<P> = P & {
    __scopeGroup?: Scope;
};
export declare const GroupFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & React.RefAttributes<TamaguiElement>> & import("@tamagui/core").StaticComponentObject<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}];
}>>>;
export type GroupProps = GetProps<typeof GroupFrame> & {
    /**
     * @deprecated use `orientation` instead
     */
    axis?: 'horizontal' | 'vertical';
    orientation?: 'horizontal' | 'vertical';
    scrollable?: boolean;
    /**
     * @default false
     */
    showScrollIndicator?: boolean;
    disabled?: boolean;
    disablePassBorderRadius?: DisablePassBorderRadius;
    /**
     * forces the group to use the Group.Item API
     */
    forceUseItem?: boolean;
};
export type GroupItemProps = {
    children: React.ReactNode;
    /**
     * forces the item to be a starting, center or ending item and gets the respective styles
     */
    forcePlacement?: 'first' | 'center' | 'last';
};
export declare const useGroupItem: (childrenProps: {
    disabled: boolean;
}, forcePlacement?: GroupItemProps['forcePlacement'], __scopeGroup?: Scope) => Record<string, any>;
export declare const Group: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/core").StackStylePropsBase | "size" | "unstyled"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>> & {
    /**
     * @deprecated use `orientation` instead
     */
    axis?: "vertical" | "horizontal" | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    scrollable?: boolean | undefined;
    /**
     * @default false
     */
    showScrollIndicator?: boolean | undefined;
    disabled?: boolean | undefined;
    disablePassBorderRadius?: DisablePassBorderRadius | undefined;
    /**
     * forces the group to use the Group.Item API
     */
    forceUseItem?: boolean | undefined;
} & {
    __scopeGroup?: Scope;
} & React.RefAttributes<TamaguiElement>> & {
    Item: (props: ScopedProps<GroupItemProps>) => any;
};
export declare const YGroup: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/core").StackStylePropsBase | "size" | "unstyled"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>> & {
    /**
     * @deprecated use `orientation` instead
     */
    axis?: "vertical" | "horizontal" | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    scrollable?: boolean | undefined;
    /**
     * @default false
     */
    showScrollIndicator?: boolean | undefined;
    disabled?: boolean | undefined;
    disablePassBorderRadius?: DisablePassBorderRadius | undefined;
    /**
     * forces the group to use the Group.Item API
     */
    forceUseItem?: boolean | undefined;
} & {
    __scopeGroup?: Scope;
} & React.RefAttributes<TamaguiElement>> & {
    Item: (props: ScopedProps<GroupItemProps>) => any;
};
export declare const XGroup: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "backgrounded" | "radiused" | "hoverTheme" | "pressTheme" | "focusTheme" | "circular" | "padded" | "elevate" | "bordered" | "transparent" | "chromeless" | keyof import("@tamagui/core").StackStylePropsBase | "size" | "unstyled"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
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
    readonly size?: any;
}, "_isEmpty">>> & {
    /**
     * @deprecated use `orientation` instead
     */
    axis?: "vertical" | "horizontal" | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
    scrollable?: boolean | undefined;
    /**
     * @default false
     */
    showScrollIndicator?: boolean | undefined;
    disabled?: boolean | undefined;
    disablePassBorderRadius?: DisablePassBorderRadius | undefined;
    /**
     * forces the group to use the Group.Item API
     */
    forceUseItem?: boolean | undefined;
} & {
    __scopeGroup?: Scope;
} & React.RefAttributes<TamaguiElement>> & {
    Item: (props: ScopedProps<GroupItemProps>) => any;
};
export {};
//# sourceMappingURL=Group.d.ts.map