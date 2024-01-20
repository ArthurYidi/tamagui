import { GetProps, TamaguiElement } from '@tamagui/core';
import * as React from 'react';
declare const VIEWPORT_DEFAULT_HOTKEY: string[];
declare const VIEWPORT_PAUSE = "toast.viewportPause";
declare const VIEWPORT_RESUME = "toast.viewportResume";
declare const ToastViewportFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}, import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
}, React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & React.RefAttributes<TamaguiElement>> & import("@tamagui/core").StaticComponentObject<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}> & Omit<{}, "staticConfig" | "extractable" | "styleable"> & {
    __tama: [{
        __tamaDefer: true;
    }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}];
}>>;
type ToastViewportFrameProps = GetProps<typeof ToastViewportFrame>;
type ToastViewportProps = ToastViewportFrameProps & {
    /**
     * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
     * @defaultValue ['F8']
     */
    hotkey?: string[];
    /**
     * An author-localized label for the toast viewport to provide context for screen reader users
     * when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.
     * @defaultValue 'Notifications ({hotkey})'
     */
    label?: string;
    /**
     * Used to reference the viewport if you want to have multiple viewports in the same provider.
     */
    name?: string;
    /**
     * Pass this when you want to have multiple/duplicated toasts.
     */
    multipleToasts?: boolean;
    /**
     * When true, uses a portal to render at the very top of the root TamaguiProvider.
     */
    portalToRoot?: boolean;
};
declare const ToastViewport: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | "unstyled"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
} & {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}>> & {
    /**
     * The keys to use as the keyboard shortcut that will move focus to the toast viewport.
     * @defaultValue ['F8']
     */
    hotkey?: string[] | undefined;
    /**
     * An author-localized label for the toast viewport to provide context for screen reader users
     * when navigating page landmarks. The available `{hotkey}` placeholder will be replaced for you.
     * @defaultValue 'Notifications ({hotkey})'
     */
    label?: string | undefined;
    /**
     * Used to reference the viewport if you want to have multiple viewports in the same provider.
     */
    name?: string | undefined;
    /**
     * Pass this when you want to have multiple/duplicated toasts.
     */
    multipleToasts?: boolean | undefined;
    /**
     * When true, uses a portal to render at the very top of the root TamaguiProvider.
     */
    portalToRoot?: boolean | undefined;
} & {
    __scopeToast?: string | undefined;
} & React.RefAttributes<HTMLDivElement>>>;
export { ToastViewport, ToastViewportProps, VIEWPORT_DEFAULT_HOTKEY, VIEWPORT_PAUSE, VIEWPORT_RESUME, };
//# sourceMappingURL=ToastViewport.d.ts.map