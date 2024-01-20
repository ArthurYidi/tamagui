import { GetProps } from '@tamagui/web';
import { ScrollView as ScrollViewNative } from 'react-native';
export declare const ScrollView: import("@tamagui/web").TamaguiComponent<import("react-native").ScrollViewProps & Omit<import("@tamagui/web").StackProps, keyof import("react-native").ScrollViewProps>, ScrollViewNative, {}, {}, Omit<{
    readonly fullscreen?: boolean | undefined;
}, "_isEmpty">, typeof ScrollViewNative>;
export type ScrollView = Pick<ScrollViewNative, 'scrollTo'>;
export type ScrollViewProps = GetProps<typeof ScrollView>;
//# sourceMappingURL=ScrollView.d.ts.map