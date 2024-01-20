/// <reference types="react" />
import { ColorTokens, GetProps, ThemeTokens } from '@tamagui/core';
import { LinearGradientProps as ExpoLinearGradientProps } from './linear-gradient';
export type LinearGradientExtraProps = Omit<ExpoLinearGradientProps, 'colors'> & {
    colors?: (ColorTokens | ThemeTokens | (string & {}))[];
};
export declare const LinearGradient: import("@tamagui/core").TamaguiComponent<Omit<{
    __tamaDefer: true;
}, "colors" | keyof import("react-native").ViewProps | "locations" | "start" | "end"> & Omit<ExpoLinearGradientProps, "colors"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<ExpoLinearGradientProps, "colors"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
}, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, import("react").ForwardRefExoticComponent<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>> & import("@tamagui/core").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}];
}>;
export type LinearGradientProps = GetProps<typeof LinearGradient>;
//# sourceMappingURL=LinearGradient.shared.d.ts.map