import type { StackNonStyleProps, StackProps, StackStylePropsBase, TamaguiComponent, TamaguiElement, TamaguiTextElement, TextNonStyleProps, TextProps, TextStylePropsBase } from '@tamagui/web';
import { RNTextProps, RNViewProps } from './reactNativeTypes';
type RNExclusiveViewProps = Omit<RNViewProps, keyof StackProps>;
export interface RNTamaguiViewNonStyleProps extends StackNonStyleProps, RNExclusiveViewProps {
}
type RNTamaguiView = TamaguiComponent<{
    expandLater: true;
}, TamaguiElement, RNTamaguiViewNonStyleProps, StackStylePropsBase, void>;
type RNExclusiveTextProps = Omit<RNTextProps, keyof TextProps>;
export interface RNTamaguiTextNonStyleProps extends TextNonStyleProps, RNExclusiveTextProps {
}
type RNTamaguiText = TamaguiComponent<{
    expandLater: true;
}, TamaguiTextElement, RNTamaguiTextNonStyleProps, TextStylePropsBase, void>;
export * from '@tamagui/web';
export * from './reactNativeTypes';
export declare const View: RNTamaguiView;
export declare const Stack: RNTamaguiView;
export declare const Text: RNTamaguiText;
export declare const X: import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>;
export declare const Y: import("@tamagui/web").CreateTamaguiComponent<import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>, {
    abc?: boolean | undefined;
}, {}, import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>>;
export declare const Z: import("@tamagui/web").CreateTamaguiComponent<import("@tamagui/web").CreateTamaguiComponent<import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>, {
    abc?: boolean | undefined;
}, {}, import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>>, {
    y?: boolean | undefined;
}, {}, import("@tamagui/web").CreateTamaguiComponent<import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>, {
    abc?: boolean | undefined;
}, {}, import("@tamagui/web").CreateTamaguiComponent<TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>, {}, {}, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>>>;
export declare const YStack: import("@tamagui/web").CreateTamaguiComponent<RNTamaguiView, {
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, {}, RNTamaguiView>;
//# sourceMappingURL=index.d.ts.map