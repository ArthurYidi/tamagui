/// <reference types="react" />
import { GetProps } from '@tamagui/core';
export declare const themeableVariants: {
    readonly backgrounded: {
        readonly true: {
            readonly backgroundColor: "$background";
        };
    };
    readonly radiused: {
        true: (_: any, extras: any) => {
            borderRadius: any;
        };
    };
    readonly hoverTheme: {
        true: {
            hoverStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly pressTheme: {
        true: {
            cursor: string;
            pressStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly focusTheme: {
        true: {
            focusStyle: {
                backgroundColor: string;
                borderColor: string;
            };
        };
        false: {};
    };
    readonly circular: {
        true: (_: any, { props, tokens }: {
            props: any;
            tokens: any;
        }) => {
            borderRadius: number;
            padding: number;
        } | {
            width: any;
            height: any;
            maxWidth: any;
            maxHeight: any;
            minWidth: any;
            minHeight: any;
            borderRadius: number;
            padding: number;
        };
    };
    readonly padded: {
        true: (_: any, extras: any) => {
            padding: any;
        };
    };
    readonly elevate: {
        true: (_: boolean, extras: any) => any;
    };
    readonly bordered: (val: number | boolean, { props }: {
        props: any;
    }) => any;
    readonly transparent: {
        readonly true: {
            readonly backgroundColor: "transparent";
        };
    };
    readonly chromeless: {
        readonly true: {
            backgroundColor: string;
            borderColor: string;
            shadowColor: string;
            hoverStyle: {
                borderColor: string;
            };
        };
        readonly all: {
            readonly hoverStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
                hoverStyle: {
                    borderColor: string;
                };
            };
            readonly pressStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
                hoverStyle: {
                    borderColor: string;
                };
            };
            readonly focusStyle: {
                backgroundColor: string;
                borderColor: string;
                shadowColor: string;
                hoverStyle: {
                    borderColor: string;
                };
            };
            readonly backgroundColor: string;
            readonly borderColor: string;
            readonly shadowColor: string;
        };
    };
};
export declare const ThemeableStack: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    readonly backgrounded?: boolean | undefined;
    readonly radiused?: boolean | undefined;
    readonly hoverTheme?: boolean | undefined;
    readonly pressTheme?: boolean | undefined;
    readonly focusTheme?: boolean | undefined;
    readonly circular?: boolean | undefined;
    readonly padded?: boolean | undefined;
    readonly elevate?: boolean | undefined;
    readonly bordered?: number | boolean | undefined;
    readonly transparent?: boolean | undefined;
    readonly chromeless?: boolean | "all" | undefined;
}, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    readonly fullscreen?: boolean | undefined;
    readonly elevation?: number | import("@tamagui/core").SizeTokens | undefined;
}, import("react").ForwardRefExoticComponent<import("@tamagui/core").RNTamaguiViewNonStyleProps & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & import("react").RefAttributes<import("@tamagui/core").TamaguiElement>> & import("@tamagui/core").StaticComponentObject<{
    __tamaDefer: true;
}, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, import("@tamagui/core").TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}];
}>>;
export type ThemeableStackProps = GetProps<typeof ThemeableStack>;
//# sourceMappingURL=ThemeableStack.d.ts.map