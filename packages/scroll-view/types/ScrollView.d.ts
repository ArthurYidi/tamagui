import { GetProps } from '@tamagui/web';
import { ScrollView as ScrollViewNative } from 'react-native';
export declare const ScrollView: import("@tamagui/web").TamaguiComponent<import("@tamagui/web/types/type-utils").MergePreservingOptional<import("react-native").ScrollViewProps & Omit<import("@tamagui/web").StackProps, keyof import("react-native").ScrollViewProps>, {
    fullscreen?: boolean | undefined;
}>, ScrollViewNative, {}, {}, {
    fullscreen?: boolean | undefined;
}, typeof ScrollViewNative>;
export type ScrollView = Pick<ScrollViewNative, 'scrollTo'>;
export type ScrollViewProps = GetProps<typeof ScrollView>;
//# sourceMappingURL=ScrollView.d.ts.map