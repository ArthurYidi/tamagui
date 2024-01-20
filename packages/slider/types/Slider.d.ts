import { GetProps, SizeTokens, TamaguiElement } from '@tamagui/core';
import { SizableStackProps } from '@tamagui/stacks';
import * as React from 'react';
import { View } from 'react-native';
import { SliderProps, SliderTrackProps } from './types';
type SliderTrackElement = HTMLElement | View;
export declare const SliderTrackFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly unstyled?: boolean | undefined;
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
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
}>>>;
declare const SliderTrack: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<SliderTrackElement>>;
export declare const SliderTrackActiveFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
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
}>>>;
type SliderTrackActiveProps = GetProps<typeof SliderTrackActiveFrame>;
declare const SliderTrackActive: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "size" | keyof import("@tamagui/core").StackStylePropsBase | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">>> & React.RefAttributes<View>>;
export declare const SliderThumbFrame: import("@tamagui/core").TamaguiComponent<{
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
    readonly transparent?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
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
}>>>;
interface SliderThumbProps extends SizableStackProps {
    index: number;
}
declare const SliderThumb: React.MemoExoticComponent<import("@tamagui/core").TamaguiComponent<Omit<{
    __tamaDefer: true;
}, keyof SliderThumbProps> & SliderThumbProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderThumbProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
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
declare const Slider: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<TamaguiElement>> & {
    Track: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<SliderTrackElement>>;
    TrackActive: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "size" | keyof import("@tamagui/core").StackStylePropsBase | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly orientation?: "vertical" | "horizontal" | undefined;
        readonly size?: any;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly size?: any;
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly orientation?: "vertical" | "horizontal" | undefined;
        readonly size?: any;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly size?: any;
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly orientation?: "vertical" | "horizontal" | undefined;
        readonly size?: any;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly size?: any;
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly orientation?: "vertical" | "horizontal" | undefined;
        readonly size?: any;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly size?: any;
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
        readonly fullscreen?: boolean | undefined;
        readonly elevation?: number | SizeTokens | undefined;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly orientation?: "vertical" | "horizontal" | undefined;
        readonly size?: any;
    }, "_isEmpty"> & Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly size?: any;
        readonly orientation?: "vertical" | "horizontal" | undefined;
    }, "_isEmpty">>> & React.RefAttributes<View>>;
    Thumb: React.MemoExoticComponent<import("@tamagui/core").TamaguiComponent<Omit<{
        __tamaDefer: true;
    }, keyof SliderThumbProps> & SliderThumbProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderThumbProps, import("@tamagui/core").StackStylePropsBase, Omit<{
        readonly elevation?: number | SizeTokens | undefined;
        readonly fullscreen?: boolean | undefined;
        readonly hoverTheme?: boolean | undefined;
        readonly pressTheme?: boolean | undefined;
        readonly focusTheme?: boolean | undefined;
        readonly circular?: boolean | undefined;
        readonly elevate?: boolean | undefined;
        readonly bordered?: number | boolean | undefined;
        readonly transparent?: boolean | undefined;
        readonly backgrounded?: boolean | undefined;
        readonly radiused?: boolean | undefined;
        readonly padded?: boolean | undefined;
        readonly chromeless?: boolean | "all" | undefined;
        readonly size?: SizeTokens | undefined;
        readonly unstyled?: boolean | undefined;
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
};
declare const Track: React.ForwardRefExoticComponent<SliderTrackProps & React.RefAttributes<SliderTrackElement>>;
declare const Range: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "fullscreen" | "size" | keyof import("@tamagui/core").StackStylePropsBase | "orientation"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & Omit<{
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | SizeTokens | undefined;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly orientation?: "vertical" | "horizontal" | undefined;
    readonly size?: any;
}, "_isEmpty"> & Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly size?: any;
    readonly orientation?: "vertical" | "horizontal" | undefined;
}, "_isEmpty">>> & React.RefAttributes<View>>;
declare const Thumb: React.MemoExoticComponent<import("@tamagui/core").TamaguiComponent<Omit<{
    __tamaDefer: true;
}, keyof SliderThumbProps> & SliderThumbProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderThumbProps, import("@tamagui/core").StackStylePropsBase, Omit<{
    readonly elevation?: number | SizeTokens | undefined;
    readonly fullscreen?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
    readonly size?: SizeTokens | undefined;
    readonly unstyled?: boolean | undefined;
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
export { Slider, SliderTrack, SliderTrackActive, SliderThumb, Track, Range, Thumb, };
export type { SliderProps, SliderTrackProps, SliderTrackActiveProps, SliderThumbProps };
//# sourceMappingURL=Slider.d.ts.map