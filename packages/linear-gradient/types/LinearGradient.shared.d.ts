import { ColorTokens, GetProps, ThemeTokens } from '@tamagui/core';
import { LinearGradientProps as ExpoLinearGradientProps } from './linear-gradient';
export type LinearGradientExtraProps = Omit<ExpoLinearGradientProps, 'colors'> & {
    colors?: (ColorTokens | ThemeTokens | (string & {}))[];
};
export declare const LinearGradient: import("@tamagui/core").TamaguiComponent<Omit<{
    expandLater: true;
}, "colors" | keyof import("react-native").ViewProps | "locations" | "start" | "end"> & Omit<ExpoLinearGradientProps, "colors"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<ExpoLinearGradientProps, "colors"> & {
    colors?: (ColorTokens | (string & {}))[] | undefined;
}, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, {
    displayName: string | undefined;
}>;
export type LinearGradientProps = GetProps<typeof LinearGradient>;
//# sourceMappingURL=LinearGradient.shared.d.ts.map