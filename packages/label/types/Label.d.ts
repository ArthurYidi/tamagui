import { FontSizeTokens, GetProps, ReactComponentWithRef } from '@tamagui/web';
import { View } from 'react-native';
export declare const LabelFrame: import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: number | `$${string}` | `$${number}` | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/web").UnionableString | import("@tamagui/web").UnionableNumber | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, {
    size?: FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/web").TamaguiComponent<import("@tamagui/web").TextProps, import("@tamagui/web").TamaguiTextElement, import("@tamagui/web").TextNonStyleProps, import("@tamagui/web").TextStylePropsBase, void, {}>>>;
export type LabelProps = GetProps<typeof LabelFrame> & {
    htmlFor?: string;
};
export declare const Label: ReactComponentWithRef<LabelProps, HTMLButtonElement | View>;
export declare const useLabelContext: (element?: HTMLElement | null) => string | undefined;
//# sourceMappingURL=Label.d.ts.map