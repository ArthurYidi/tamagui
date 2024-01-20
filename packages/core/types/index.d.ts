import type { StackNonStyleProps, StackProps, StackStylePropsBase, TamaguiComponent, TamaguiElement, TamaguiTextElement, TextNonStyleProps, TextProps, TextStylePropsBase } from '@tamagui/web';
import { RNTextProps, RNViewProps } from './reactNativeTypes';
type RNExclusiveViewProps = Omit<RNViewProps, keyof StackProps>;
export interface RNTamaguiViewNonStyleProps extends StackNonStyleProps, RNExclusiveViewProps {
}
type RNTamaguiView = TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, RNTamaguiViewNonStyleProps, StackStylePropsBase, void>;
type RNExclusiveTextProps = Omit<RNTextProps, keyof TextProps>;
export interface RNTamaguiTextNonStyleProps extends TextNonStyleProps, RNExclusiveTextProps {
}
type RNTamaguiText = TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiTextElement, RNTamaguiTextNonStyleProps, TextStylePropsBase, void>;
export * from '@tamagui/web';
export * from './reactNativeTypes';
export declare const View: RNTamaguiView;
export declare const Stack: RNTamaguiView;
export declare const Text: RNTamaguiText;
export declare const X: TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>;
export declare const Y: TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, StackNonStyleProps, StackStylePropsBase, {
    abc?: boolean | undefined;
}, TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>>;
export declare const Z: TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, StackNonStyleProps, StackStylePropsBase, {
    y?: boolean | undefined;
    abc?: boolean | undefined;
}, TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, StackNonStyleProps, StackStylePropsBase, {
    abc?: boolean | undefined;
}, TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, TamaguiComponent<StackProps, TamaguiElement, StackNonStyleProps, StackStylePropsBase, void, {}>>>>;
//# sourceMappingURL=index.d.ts.map