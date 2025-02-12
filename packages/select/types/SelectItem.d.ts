import { ListItemProps } from '@tamagui/list-item';
import * as React from 'react';
type SelectItemContextValue = {
    value: string;
    textId: string;
    isSelected: boolean;
};
export declare const SelectItemContextProvider: {
    (props: SelectItemContextValue & {
        scope: import("@tamagui/create-context").Scope<SelectItemContextValue>;
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
}, useSelectItemContext: (consumerName: string, scope: import("@tamagui/create-context").Scope<SelectItemContextValue | undefined>, options?: {
    warn?: boolean | undefined;
    fallback?: Partial<SelectItemContextValue> | undefined;
} | undefined) => SelectItemContextValue;
export interface SelectItemProps extends ListItemProps {
    value: string;
    index: number;
    disabled?: boolean;
    textValue?: string;
}
export declare const SelectItem: import("@tamagui/web").TamaguiComponent<Omit<import("@tamagui/web").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/web").StackStylePropsBase & {
    unstyled?: boolean | undefined;
    size?: import("@tamagui/web").SizeTokens | undefined;
    disabled?: boolean | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    active?: boolean | undefined;
}>, keyof SelectItemProps> & SelectItemProps, import("@tamagui/web").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & SelectItemProps, import("@tamagui/web").StackStylePropsBase, {
    unstyled?: boolean | undefined;
    size?: import("@tamagui/web").SizeTokens | undefined;
    disabled?: boolean | undefined;
    elevation?: number | import("@tamagui/web").SizeTokens | undefined;
    transparent?: boolean | undefined;
    fullscreen?: boolean | undefined;
    circular?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    backgrounded?: boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
    active?: boolean | undefined;
}, {}>;
export {};
//# sourceMappingURL=SelectItem.d.ts.map