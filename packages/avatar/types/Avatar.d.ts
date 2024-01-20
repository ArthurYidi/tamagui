import { GetProps, SizeTokens, TamaguiElement } from '@tamagui/core';
import { ImageProps } from '@tamagui/image';
import * as React from 'react';
declare const createAvatarScope: import("@tamagui/create-context").CreateScope;
type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error';
type AvatarImageProps = Partial<ImageProps> & {
    onLoadingStatusChange?: (status: ImageLoadingStatus) => void;
};
declare const AvatarImage: React.ForwardRefExoticComponent<Partial<ImageProps> & {
    onLoadingStatusChange?: ((status: ImageLoadingStatus) => void) | undefined;
} & React.RefAttributes<TamaguiElement>>;
export declare const AvatarFallbackFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & React.RefAttributes<TamaguiElement>> & import("@tamagui/core").StaticComponentObject<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}];
}>>;
type AvatarFallbackProps = GetProps<typeof AvatarFallbackFrame> & {
    delayMs?: number;
};
declare const AvatarFallback: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase | "fullscreen"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">>> & {
    delayMs?: number | undefined;
} & React.RefAttributes<TamaguiElement>>;
export declare const AvatarFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
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
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty">, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & React.RefAttributes<TamaguiElement>> & import("@tamagui/core").StaticComponentObject<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}];
}>>>>;
type AvatarProps = GetProps<typeof AvatarFrame>;
declare const Avatar: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "size" | keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | "transparent" | "circular" | "hoverTheme" | "pressTheme" | "focusTheme" | "elevate" | "bordered" | "backgrounded" | "radiused" | "padded" | "chromeless"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
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
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
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
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
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
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
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
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
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
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: number | SizeTokens | undefined;
}, "_isEmpty">>> & React.RefAttributes<TamaguiElement>> & {
    Image: React.ForwardRefExoticComponent<Partial<ImageProps> & {
        onLoadingStatusChange?: ((status: ImageLoadingStatus) => void) | undefined;
    } & React.RefAttributes<TamaguiElement>>;
    Fallback: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase | "fullscreen"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
    }, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
    }, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
    }, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
    }, "_isEmpty">>> & {
        delayMs?: number | undefined;
    } & React.RefAttributes<TamaguiElement>>;
};
export { createAvatarScope, Avatar, AvatarImage, AvatarFallback };
export type { AvatarProps, AvatarImageProps, AvatarFallbackProps };
//# sourceMappingURL=Avatar.d.ts.map