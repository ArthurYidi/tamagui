import { FontSizeTokens, GetProps, ReactComponentWithRef } from '@tamagui/web';
import { View } from 'react-native';
export declare const LabelFrame: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly unstyled?: boolean | undefined;
    readonly size?: (FontSizeTokens & import("@tamagui/web").SizeTokens) | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, Omit<{
    readonly unstyled?: boolean | undefined;
    readonly size?: FontSizeTokens | undefined;
}, "_isEmpty">, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>;
export type LabelProps = GetProps<typeof LabelFrame> & {
    htmlFor?: string;
};
export declare const Label: ReactComponentWithRef<LabelProps, HTMLButtonElement | View>;
export declare const useLabelContext: (element?: HTMLElement | null) => string | undefined;
//# sourceMappingURL=Label.d.ts.map