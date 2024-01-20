import { GetProps, SizeTokens, TamaguiElement } from '@tamagui/core';
import { SizableStackProps } from '@tamagui/stacks';
import * as React from 'react';
import { View } from 'react-native';
import { SliderProps, SliderTrackProps } from './types';
type SliderTrackElement = HTMLElement | View;
export declare const SliderTrackFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, {}>;
declare const SliderTrack: React.ForwardRefExoticComponent<Omit<SliderTrackProps, "ref"> & React.RefAttributes<SliderTrackElement>>;
export declare const SliderTrackActiveFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}, {}>;
type SliderTrackActiveProps = GetProps<typeof SliderTrackActiveFrame>;
declare const SliderTrackActive: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>> & React.RefAttributes<TamaguiElement> & Omit<import("@tamagui/core").StackProps, "size" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof React.RefAttributes<TamaguiElement> | "orientation" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>>>>, "ref"> & React.RefAttributes<View>>;
export declare const SliderThumbFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    size?: SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>;
interface SliderThumbProps extends SizableStackProps {
    index: number;
}
declare const SliderThumb: React.MemoExoticComponent<import("@tamagui/core").TamaguiComponent<Omit<{
    __tamaDefer: true;
}, keyof SliderThumbProps> & SliderThumbProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderThumbProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    size?: SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>>;
declare const Slider: React.ForwardRefExoticComponent<Omit<SliderProps, "ref"> & React.RefAttributes<TamaguiElement>> & {
    Track: React.ForwardRefExoticComponent<Omit<SliderTrackProps, "ref"> & React.RefAttributes<SliderTrackElement>>;
    TrackActive: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }>> & React.RefAttributes<TamaguiElement> & Omit<import("@tamagui/core").StackProps, "size" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof React.RefAttributes<TamaguiElement> | "orientation" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
        elevation?: number | SizeTokens | undefined;
        size?: any;
        fullscreen?: boolean | undefined;
        orientation?: "vertical" | "horizontal" | undefined;
    }>>>>, "ref"> & React.RefAttributes<View>>;
    Thumb: React.MemoExoticComponent<import("@tamagui/core").TamaguiComponent<Omit<{
        __tamaDefer: true;
    }, keyof SliderThumbProps> & SliderThumbProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderThumbProps, import("@tamagui/core").StackStylePropsBase, {
        elevation?: number | SizeTokens | undefined;
        size?: SizeTokens | undefined;
        fullscreen?: boolean | undefined;
        circular?: boolean | undefined;
        hoverTheme?: boolean | undefined;
        pressTheme?: boolean | undefined;
        focusTheme?: boolean | undefined;
        elevate?: boolean | undefined;
        bordered?: number | boolean | undefined;
        unstyled?: boolean | undefined;
        transparent?: boolean | undefined;
        backgrounded?: boolean | undefined;
        radiused?: boolean | undefined;
        padded?: boolean | undefined;
        chromeless?: boolean | "all" | undefined;
    }, {}>>;
};
declare const Track: React.ForwardRefExoticComponent<Omit<SliderTrackProps, "ref"> & React.RefAttributes<SliderTrackElement>>;
declare const Range: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>> & React.RefAttributes<TamaguiElement> & Omit<import("@tamagui/core").StackProps, "size" | `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof React.RefAttributes<TamaguiElement> | "orientation" | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
    elevation?: number | SizeTokens | undefined;
    size?: any;
    fullscreen?: boolean | undefined;
    orientation?: "vertical" | "horizontal" | undefined;
}>>>>, "ref"> & React.RefAttributes<View>>;
declare const Thumb: React.MemoExoticComponent<import("@tamagui/core").TamaguiComponent<Omit<{
    __tamaDefer: true;
}, keyof SliderThumbProps> & SliderThumbProps, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SliderThumbProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | SizeTokens | undefined;
    size?: SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    unstyled?: boolean | undefined;
    transparent?: boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>>;
export { Slider, SliderTrack, SliderTrackActive, SliderThumb, Track, Range, Thumb, };
export type { SliderProps, SliderTrackProps, SliderTrackActiveProps, SliderThumbProps };
//# sourceMappingURL=Slider.d.ts.map