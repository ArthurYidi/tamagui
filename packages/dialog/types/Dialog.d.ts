import { GetProps, StackProps, TamaguiElement, TamaguiTextElement } from '@tamagui/core';
import { Scope } from '@tamagui/create-context';
import { DismissableProps } from '@tamagui/dismissable';
import { FocusScopeProps } from '@tamagui/focus-scope';
import { PortalItemProps } from '@tamagui/portal';
import { RemoveScroll } from '@tamagui/remove-scroll';
import { YStackProps } from '@tamagui/stacks';
import * as React from 'react';
declare const createDialogScope: import("@tamagui/create-context").CreateScope;
type RemoveScrollProps = React.ComponentProps<typeof RemoveScroll>;
interface DialogProps {
    children?: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
    modal?: boolean;
    /**
     * Used to disable the remove scroll functionality when open
     */
    disableRemoveScroll?: boolean;
    /**
     * @see https://github.com/theKashey/react-remove-scroll#usage
     */
    allowPinchZoom?: RemoveScrollProps['allowPinchZoom'];
}
type NonNull<A> = Exclude<A, void | null>;
type DialogContextValue = {
    disableRemoveScroll?: boolean;
    triggerRef: React.RefObject<TamaguiElement>;
    contentRef: React.RefObject<TamaguiElement>;
    contentId: string;
    titleId: string;
    descriptionId: string;
    onOpenToggle(): void;
    open: NonNull<DialogProps['open']>;
    onOpenChange: NonNull<DialogProps['onOpenChange']>;
    modal: NonNull<DialogProps['modal']>;
    allowPinchZoom: NonNull<DialogProps['allowPinchZoom']>;
    sheetBreakpoint: any;
    scopeKey: string;
};
interface DialogTriggerProps extends StackProps {
}
declare const DialogTrigger: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase & void>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/core").StackStylePropsBase, void, {}>;
type DialogPortalProps = Omit<PortalItemProps, 'asChild'> & YStackProps & {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
};
export declare const DialogPortalFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
}, {}>;
declare const DialogPortal: React.FC<DialogPortalProps>;
/**
 * exported for internal use with extractable()
 */
export declare const DialogOverlayFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    fullscreen?: boolean | undefined;
    open?: boolean | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    unstyled?: boolean | undefined;
    backgrounded?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>;
interface DialogOverlayProps extends YStackProps {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
declare const DialogOverlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<TamaguiElement>>;
declare const DialogContentFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, {
    elevation?: number | import("@tamagui/core").SizeTokens | undefined;
    size?: import("@tamagui/core").SizeTokens | undefined;
    transparent?: boolean | undefined;
    circular?: boolean | undefined;
    fullscreen?: boolean | undefined;
    unstyled?: boolean | undefined;
    backgrounded?: boolean | undefined;
    hoverTheme?: boolean | undefined;
    pressTheme?: boolean | undefined;
    focusTheme?: boolean | undefined;
    elevate?: boolean | undefined;
    bordered?: number | boolean | undefined;
    radiused?: boolean | undefined;
    padded?: boolean | undefined;
    chromeless?: boolean | "all" | undefined;
}, {}>;
type DialogContentFrameProps = GetProps<typeof DialogContentFrame>;
interface DialogContentProps extends DialogContentFrameProps, Omit<DialogContentTypeProps, 'context' | 'onPointerDownCapture'> {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}
declare const DialogContent: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<TamaguiElement>>;
interface DialogContentTypeProps extends Omit<DialogContentImplProps, 'trapFocus' | 'disableOutsidePointerEvents'> {
    context: DialogContextValue;
}
type DialogContentImplProps = DialogContentFrameProps & Omit<DismissableProps, 'onDismiss'> & {
    /**
     * When `true`, focus cannot escape the `Content` via keyboard,
     * pointer, or a programmatic focus.
     * @defaultValue false
     */
    trapFocus?: FocusScopeProps['trapped'];
    /**
     * Event handler called when auto-focusing on open.
     * Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
    context: DialogContextValue;
};
declare const DialogTitleFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiTextElement, import("@tamagui/core").TextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {}>;
type DialogTitleProps = GetProps<typeof DialogTitleFrame>;
declare const DialogTitle: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>, TamaguiTextElement, import("@tamagui/core").TextNonStyleProps & void, import("@tamagui/core").TextStylePropsBase, {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {}>;
declare const DialogDescriptionFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiTextElement, import("@tamagui/core").TextNonStyleProps, import("@tamagui/core").TextStylePropsBase, {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {}>;
type DialogDescriptionProps = GetProps<typeof DialogDescriptionFrame>;
declare const DialogDescription: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>, TamaguiTextElement, import("@tamagui/core").TextNonStyleProps & void, import("@tamagui/core").TextStylePropsBase, {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}, {}>;
declare const DialogCloseFrame: import("@tamagui/core").TamaguiComponent<{
    __tamaDefer: true;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase, void, {}>;
type DialogCloseProps = GetProps<typeof DialogCloseFrame> & {
    displayWhenAdapted?: boolean;
};
declare const DialogClose: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase & void>, `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/core").StackStylePropsBase | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> | "displayWhenAdapted"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & {
    displayWhenAdapted?: boolean | undefined;
}, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & {
    displayWhenAdapted?: boolean | undefined;
}, import("@tamagui/core").StackStylePropsBase, void, {}>;
declare const DialogWarningProvider: {
    (props: {
        contentName: string;
        titleName: string;
        docsSlug: string;
    } & {
        children: React.ReactNode;
    }): JSX.Element;
    displayName: string;
};
export type DialogHandle = {
    open: (val: boolean) => void;
};
declare const Dialog: React.ForwardRefExoticComponent<DialogProps & React.RefAttributes<{
    open: (val: boolean) => void;
}>> & {
    Trigger: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase & void>, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & void, import("@tamagui/core").StackStylePropsBase, void, {}>;
    Portal: React.FC<DialogPortalProps>;
    Overlay: React.ForwardRefExoticComponent<DialogOverlayProps & React.RefAttributes<TamaguiElement>>;
    Content: React.ForwardRefExoticComponent<DialogContentProps & React.RefAttributes<TamaguiElement>>;
    Title: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>, TamaguiTextElement, import("@tamagui/core").TextNonStyleProps & void, import("@tamagui/core").TextStylePropsBase, {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }, {}>;
    Description: import("@tamagui/core").TamaguiComponent<import("@tamagui/core").GetFinalProps<import("@tamagui/core").TextNonStyleProps, import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>, TamaguiTextElement, import("@tamagui/core").TextNonStyleProps & void, import("@tamagui/core").TextStylePropsBase, {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }, {}>;
    Close: import("@tamagui/core").TamaguiComponent<Omit<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase & void>, `$${string}` | `$${number}` | `$theme-${string}` | `$theme-${number}` | keyof import("@tamagui/core").RNTamaguiViewNonStyleProps | keyof import("@tamagui/core").StackStylePropsBase | keyof import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> | "displayWhenAdapted"> & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & {
        displayWhenAdapted?: boolean | undefined;
    }, TamaguiElement, import("@tamagui/core").RNTamaguiViewNonStyleProps & Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & {
        displayWhenAdapted?: boolean | undefined;
    }, import("@tamagui/core").StackStylePropsBase, void, {}>;
    Sheet: React.FunctionComponent<Omit<import("@tamagui/sheet").SheetProps, "open" | "onOpenChange"> & React.RefAttributes<import("react-native").View>> & {
        Frame: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, "elevation" | keyof import("@tamagui/core").StackStylePropsBase | "fullscreen" | "unstyled"> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            unstyled?: boolean | undefined;
        }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            unstyled?: boolean | undefined;
        }>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            unstyled?: boolean | undefined;
        }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            unstyled?: boolean | undefined;
        }>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            unstyled?: boolean | undefined;
        }>> & {
            disableHideBottomOverflow?: boolean | undefined;
            adjustPaddingForOffscreenContent?: boolean | undefined;
        } & {
            __scopeSheet?: Scope<any>;
        } & React.RefAttributes<unknown>>;
        Overlay: React.MemoExoticComponent<(propsIn: import("@tamagui/sheet").SheetScopedProps<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            open?: boolean | undefined;
            transparent?: boolean | undefined;
            circular?: boolean | undefined;
            unstyled?: boolean | undefined;
            backgrounded?: boolean | undefined;
            hoverTheme?: boolean | undefined;
            pressTheme?: boolean | undefined;
            focusTheme?: boolean | undefined;
            elevate?: boolean | undefined;
            bordered?: number | boolean | undefined;
            radiused?: boolean | undefined;
            padded?: boolean | undefined;
            chromeless?: boolean | "all" | undefined;
        }>>) => null>;
        Handle: ({ __scopeSheet, ...props }: import("@tamagui/sheet").SheetScopedProps<import("@tamagui/core").GetFinalProps<import("@tamagui/core").RNTamaguiViewNonStyleProps, import("@tamagui/core").StackStylePropsBase & {
            elevation?: number | import("@tamagui/core").SizeTokens | undefined;
            fullscreen?: boolean | undefined;
            open?: boolean | undefined;
            unstyled?: boolean | undefined;
        }>>) => JSX.Element | null;
        ScrollView: React.ForwardRefExoticComponent<{
            [x: `$${string}`]: import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase> | undefined;
            [x: `$${string}` & `$${number}`]: import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase> | undefined;
            [x: `$${string}` & `$theme-${string}`]: import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase> | undefined;
            [x: `$${string}` & `$theme-${string}` & `$theme-${number}`]: import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase> | undefined;
            style?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            pointerEvents?: "none" | "auto" | "box-none" | "box-only" | undefined;
            display?: "flex" | "unset" | "none" | "inherit" | "inline" | "block" | "contents" | "inline-flex" | undefined;
            children?: React.ReactNode;
            onStartShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onLayout?: ((event: import("react-native").LayoutChangeEvent) => void) | undefined;
            focusable?: boolean | undefined;
            onMoveShouldSetResponder?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderGrant?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderReject?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderRelease?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onResponderTerminationRequest?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onResponderTerminate?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onStartShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            onMoveShouldSetResponderCapture?: ((event: import("react-native").GestureResponderEvent) => boolean) | undefined;
            hitSlop?: import("react-native").Insets | undefined;
            id?: string | undefined;
            removeClippedSubviews?: boolean | undefined;
            testID?: string | undefined;
            nativeID?: string | undefined;
            collapsable?: boolean | undefined;
            needsOffscreenAlphaCompositing?: boolean | undefined;
            renderToHardwareTextureAndroid?: boolean | undefined;
            shouldRasterizeIOS?: boolean | undefined;
            isTVSelectable?: boolean | undefined;
            hasTVPreferredFocus?: boolean | undefined;
            tvParallaxProperties?: import("react-native").TVParallaxProperties | undefined;
            tvParallaxShiftDistanceX?: number | undefined;
            tvParallaxShiftDistanceY?: number | undefined;
            tvParallaxTiltAngle?: number | undefined;
            tvParallaxMagnification?: number | undefined;
            onTouchStart?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onTouchMove?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onTouchEnd?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onTouchCancel?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onTouchEndCapture?: ((event: import("react-native").GestureResponderEvent) => void) | undefined;
            onPointerEnter?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerEnterCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerLeave?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerLeaveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerMove?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerMoveCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerCancel?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerCancelCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerDown?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerDownCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerUp?: ((event: import("react-native").PointerEvent) => void) | undefined;
            onPointerUpCapture?: ((event: import("react-native").PointerEvent) => void) | undefined;
            accessible?: boolean | undefined;
            accessibilityActions?: readonly Readonly<{
                name: string;
                label?: string | undefined;
            }>[] | undefined;
            accessibilityLabel?: string | undefined;
            "aria-label"?: string | undefined;
            accessibilityRole?: import("react-native").AccessibilityRole | undefined;
            accessibilityState?: import("react-native").AccessibilityState | undefined;
            "aria-busy"?: boolean | undefined;
            "aria-checked"?: boolean | "mixed" | undefined;
            "aria-disabled"?: boolean | undefined;
            "aria-expanded"?: boolean | undefined;
            "aria-selected"?: boolean | undefined;
            "aria-labelledby"?: string | undefined;
            accessibilityHint?: string | undefined;
            accessibilityValue?: import("react-native").AccessibilityValue | undefined;
            "aria-valuemax"?: number | undefined;
            "aria-valuemin"?: number | undefined;
            "aria-valuenow"?: number | undefined;
            "aria-valuetext"?: string | undefined;
            onAccessibilityAction?: ((event: import("react-native").AccessibilityActionEvent) => void) | undefined;
            importantForAccessibility?: "auto" | "yes" | "no" | "no-hide-descendants" | undefined;
            "aria-hidden"?: boolean | undefined;
            "aria-live"?: "polite" | "assertive" | "off" | undefined;
            "aria-modal"?: boolean | undefined;
            role?: import("react-native").Role | undefined;
            accessibilityLiveRegion?: "none" | "polite" | "assertive" | undefined;
            accessibilityLabelledBy?: string | string[] | undefined;
            accessibilityElementsHidden?: boolean | undefined;
            accessibilityViewIsModal?: boolean | undefined;
            onAccessibilityEscape?: (() => void) | undefined;
            onAccessibilityTap?: (() => void) | undefined;
            onMagicTap?: (() => void) | undefined;
            accessibilityIgnoresInvertColors?: boolean | undefined;
            accessibilityLanguage?: string | undefined;
            target?: string | undefined;
            asChild?: boolean | "web" | "except-style" | "except-style-web" | undefined;
            dangerouslySetInnerHTML?: {
                __html: string;
            } | undefined;
            debug?: import("@tamagui/core").DebugProp | undefined;
            disabled?: boolean | undefined;
            className?: string | undefined;
            themeShallow?: boolean | undefined;
            themeInverse?: boolean | undefined;
            tag?: "object" | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "bdi" | "bdo" | "blockquote" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "header" | "hr" | "i" | "img" | "input" | "ins" | "kbd" | "label" | "legend" | "li" | "main" | "map" | "mark" | "menu" | "meter" | "nav" | "noscript" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "sub" | "summary" | "sup" | "table" | "template" | "tbody" | "td" | "textarea" | "th" | "thead" | "time" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr" | "search" | (string & {}) | "rtc" | undefined;
            theme?: string | null | undefined;
            group?: undefined;
            untilMeasured?: "hide" | "show" | undefined;
            /**
             * Event handler called when auto-focusing on open.
             * Can be prevented.
             */
            componentName?: string | undefined;
            tabIndex?: string | number | undefined;
            disableOptimization?: boolean | undefined;
            /**
             * Event handler called when auto-focusing on close.
             * Can be prevented.
             */
            forceStyle?: "hover" | "press" | "focus" | undefined;
            disableClassName?: boolean | undefined;
            onFocus?: ((event: React.FocusEvent<HTMLDivElement, Element>) => void) | undefined;
            onScroll?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void) | undefined;
            onPress?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
            onLongPress?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
            onPressIn?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
            onPressOut?: ((event: import("react-native").GestureResponderEvent) => void) | null | undefined;
            onHoverIn?: React.MouseEventHandler<HTMLDivElement> | undefined;
            onHoverOut?: React.MouseEventHandler<HTMLDivElement> | undefined;
            onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
            onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
            onMouseDown?: React.MouseEventHandler<HTMLDivElement> | undefined;
            onMouseUp?: React.MouseEventHandler<HTMLDivElement> | undefined;
            onBlur?: React.FocusEventHandler<HTMLDivElement> | undefined;
            backfaceVisibility?: "unset" | "visible" | "hidden" | undefined;
            backgroundColor?: "unset" | import("@tamagui/core").GetThemeValueForKey<"backgroundColor"> | import("react-native").OpaqueColorValue | undefined;
            borderBlockColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBlockColor"> | undefined;
            borderBlockEndColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBlockEndColor"> | undefined;
            borderBlockStartColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBlockStartColor"> | undefined;
            borderBottomColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderBottomColor"> | undefined;
            borderBottomEndRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderBottomLeftRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderBottomRightRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderBottomStartRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderColor"> | undefined;
            borderCurve?: "unset" | "circular" | "continuous" | undefined;
            borderEndColor?: import("react-native").ColorValue | undefined;
            borderEndEndRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderEndStartRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderLeftColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderLeftColor"> | undefined;
            borderRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderRightColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderRightColor"> | undefined;
            borderStartColor?: import("react-native").ColorValue | undefined;
            borderStartEndRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderStartStartRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderStyle?: "unset" | "solid" | "dotted" | "dashed" | undefined;
            borderTopColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"borderTopColor"> | undefined;
            borderTopEndRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderTopLeftRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderTopRightRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            borderTopStartRadius?: number | `$${string}` | `$${number}` | "unset" | `$${string}.${string}` | `$${string}.${number}` | import("@tamagui/core").UnionableString | import("@tamagui/core").UnionableNumber | import("react-native").Animated.AnimatedNode | import("@tamagui/core").Variable<any> | undefined;
            opacity?: "unset" | import("react-native").AnimatableNumericValue | undefined;
            alignContent?: "center" | "unset" | "flex-start" | "flex-end" | "stretch" | "space-between" | "space-around" | undefined;
            alignItems?: "unset" | import("react-native").FlexAlignType | undefined;
            alignSelf?: "unset" | "auto" | import("react-native").FlexAlignType | undefined;
            aspectRatio?: string | number | undefined;
            borderBottomWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderBottomWidth"> | undefined;
            borderEndWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderEndWidth"> | undefined;
            borderLeftWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderLeftWidth"> | undefined;
            borderRightWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderRightWidth"> | undefined;
            borderStartWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderStartWidth"> | undefined;
            borderTopWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderTopWidth"> | undefined;
            borderWidth?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"borderWidth"> | undefined;
            bottom?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"bottom"> | null | undefined;
            end?: "unset" | import("react-native").DimensionValue | undefined;
            flex?: number | "unset" | undefined;
            flexBasis?: "unset" | import("react-native").DimensionValue | undefined;
            flexDirection?: "unset" | "row" | "column" | "row-reverse" | "column-reverse" | undefined;
            rowGap?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"rowGap"> | undefined;
            gap?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"gap"> | undefined;
            columnGap?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"columnGap"> | undefined;
            flexGrow?: number | "unset" | undefined;
            flexShrink?: number | "unset" | undefined;
            flexWrap?: "unset" | "wrap" | "nowrap" | "wrap-reverse" | undefined;
            height?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"height"> | null | undefined;
            justifyContent?: "center" | "unset" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
            left?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"left"> | null | undefined;
            margin?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"margin"> | null | undefined;
            marginBottom?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginBottom"> | null | undefined;
            marginEnd?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginEnd"> | null | undefined;
            marginHorizontal?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginHorizontal"> | null | undefined;
            marginLeft?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginLeft"> | null | undefined;
            marginRight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginRight"> | null | undefined;
            marginStart?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginStart"> | null | undefined;
            marginTop?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginTop"> | null | undefined;
            marginVertical?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"marginVertical"> | null | undefined;
            maxHeight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"maxHeight"> | null | undefined;
            maxWidth?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"maxWidth"> | null | undefined;
            minHeight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"minHeight"> | null | undefined;
            minWidth?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"minWidth"> | null | undefined;
            overflow?: "unset" | "visible" | "hidden" | "scroll" | undefined;
            padding?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"padding"> | null | undefined;
            paddingBottom?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingBottom"> | null | undefined;
            paddingEnd?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingEnd"> | null | undefined;
            paddingHorizontal?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingHorizontal"> | null | undefined;
            paddingLeft?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingLeft"> | null | undefined;
            paddingRight?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingRight"> | null | undefined;
            paddingStart?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingStart"> | null | undefined;
            paddingTop?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingTop"> | null | undefined;
            paddingVertical?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"paddingVertical"> | null | undefined;
            position?: "unset" | "absolute" | "relative" | undefined;
            right?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"right"> | null | undefined;
            start?: "unset" | import("react-native").DimensionValue | undefined;
            top?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"top"> | null | undefined;
            width?: number | "unset" | import("react-native").Animated.AnimatedNode | import("@tamagui/core").GetThemeValueForKey<"width"> | null | undefined;
            zIndex?: "unset" | import("@tamagui/core").GetThemeValueForKey<"zIndex"> | undefined;
            direction?: "unset" | "inherit" | "ltr" | "rtl" | undefined;
            shadowColor?: "unset" | import("react-native").OpaqueColorValue | import("@tamagui/core").GetThemeValueForKey<"shadowColor"> | undefined;
            shadowOffset?: "unset" | import("@tamagui/core").GetThemeValueForKey<"shadowOffset"> | Readonly<{
                width: number;
                height: number;
            }> | undefined;
            shadowOpacity?: "unset" | import("react-native").AnimatableNumericValue | undefined;
            shadowRadius?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"shadowRadius"> | undefined;
            transform?: string | (import("react-native").PerpectiveTransform | import("react-native").RotateTransform | import("react-native").RotateXTransform | import("react-native").RotateYTransform | import("react-native").RotateZTransform | import("react-native").ScaleTransform | import("react-native").ScaleXTransform | import("react-native").ScaleYTransform | import("react-native").TranslateXTransform | import("react-native").TranslateYTransform | import("react-native").SkewXTransform | import("react-native").SkewYTransform | import("react-native").MatrixTransform)[] | undefined;
            transformMatrix?: "unset" | number[] | undefined;
            rotation?: "unset" | import("react-native").AnimatableNumericValue | undefined;
            scaleX?: "unset" | import("react-native").AnimatableNumericValue | import("@tamagui/core").GetThemeValueForKey<"scaleX"> | undefined;
            scaleY?: "unset" | import("react-native").AnimatableNumericValue | import("@tamagui/core").GetThemeValueForKey<"scaleY"> | undefined;
            translateX?: "unset" | import("react-native").AnimatableNumericValue | undefined;
            translateY?: "unset" | import("react-native").AnimatableNumericValue | undefined;
            x?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"x"> | undefined;
            y?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"y"> | undefined;
            perspective?: number | "unset" | undefined;
            scale?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"scale"> | undefined;
            skewX?: string | undefined;
            skewY?: string | undefined;
            matrix?: "unset" | number[] | undefined;
            rotate?: string | undefined;
            rotateY?: string | undefined;
            rotateX?: string | undefined;
            rotateZ?: string | undefined;
            contain?: import("csstype").Property.Contain | undefined;
            touchAction?: import("csstype").Property.TouchAction | undefined;
            cursor?: import("csstype").Property.Cursor | undefined;
            outlineColor?: "unset" | import("@tamagui/core").GetThemeValueForKey<"outlineColor"> | undefined;
            outlineOffset?: "unset" | import("@tamagui/core").SpaceValue | undefined;
            outlineStyle?: import("csstype").Property.OutlineStyle | undefined;
            outlineWidth?: "unset" | import("@tamagui/core").SpaceValue | undefined;
            space?: number | "unset" | import("@tamagui/core").GetThemeValueForKey<"space"> | undefined;
            spaceDirection?: "unset" | import("@tamagui/core").SpaceDirection | undefined;
            separator?: React.ReactNode;
            animation?: import("@tamagui/core").AnimationProp | null | undefined;
            animateOnly?: "unset" | string[] | undefined;
            userSelect?: import("csstype").Property.UserSelect | undefined;
            transformOrigin?: "center" | "bottom" | "left" | "right" | "top" | "unset" | `${string}%` | `${number}%` | `${string}px` | `${number}px` | "center center" | "center bottom" | "center top" | `center ${string}%` | `center ${number}%` | `center ${string}px` | `center ${number}px` | "left center" | "left bottom" | "left top" | `left ${string}%` | `left ${number}%` | `left ${string}px` | `left ${number}px` | "right center" | "right bottom" | "right top" | `right ${string}%` | `right ${number}%` | `right ${string}px` | `right ${number}px` | `${string}% center` | `${string}% bottom` | `${string}% top` | `${string}% ${string}%` | `${string}% ${number}%` | `${string}% ${string}px` | `${string}% ${number}px` | `${number}% center` | `${number}% bottom` | `${number}% top` | `${number}% ${string}%` | `${number}% ${number}%` | `${number}% ${string}px` | `${number}% ${number}px` | `${string}px center` | `${string}px bottom` | `${string}px top` | `${string}px ${string}%` | `${string}px ${number}%` | `${string}px ${string}px` | `${string}px ${number}px` | `${number}px center` | `${number}px bottom` | `${number}px top` | `${number}px ${string}%` | `${number}px ${number}%` | `${number}px ${string}px` | `${number}px ${number}px` | `center center ${string}px` | `center center ${number}px` | `center bottom ${string}px` | `center bottom ${number}px` | `center top ${string}px` | `center top ${number}px` | `center ${string}% ${string}px` | `center ${string}% ${number}px` | `center ${number}% ${string}px` | `center ${number}% ${number}px` | `center ${string}px ${string}px` | `center ${string}px ${number}px` | `center ${number}px ${string}px` | `center ${number}px ${number}px` | `left center ${string}px` | `left center ${number}px` | `left bottom ${string}px` | `left bottom ${number}px` | `left top ${string}px` | `left top ${number}px` | `left ${string}% ${string}px` | `left ${string}% ${number}px` | `left ${number}% ${string}px` | `left ${number}% ${number}px` | `left ${string}px ${string}px` | `left ${string}px ${number}px` | `left ${number}px ${string}px` | `left ${number}px ${number}px` | `right center ${string}px` | `right center ${number}px` | `right bottom ${string}px` | `right bottom ${number}px` | `right top ${string}px` | `right top ${number}px` | `right ${string}% ${string}px` | `right ${string}% ${number}px` | `right ${number}% ${string}px` | `right ${number}% ${number}px` | `right ${string}px ${string}px` | `right ${string}px ${number}px` | `right ${number}px ${string}px` | `right ${number}px ${number}px` | `${string}% center ${string}px` | `${string}% center ${number}px` | `${string}% bottom ${string}px` | `${string}% bottom ${number}px` | `${string}% top ${string}px` | `${string}% top ${number}px` | `${string}% ${string}% ${string}px` | `${string}% ${string}% ${number}px` | `${string}% ${number}% ${string}px` | `${string}% ${number}% ${number}px` | `${string}% ${string}px ${string}px` | `${string}% ${string}px ${number}px` | `${string}% ${number}px ${string}px` | `${string}% ${number}px ${number}px` | `${number}% center ${string}px` | `${number}% center ${number}px` | `${number}% bottom ${string}px` | `${number}% bottom ${number}px` | `${number}% top ${string}px` | `${number}% top ${number}px` | `${number}% ${string}% ${string}px` | `${number}% ${string}% ${number}px` | `${number}% ${number}% ${string}px` | `${number}% ${number}% ${number}px` | `${number}% ${string}px ${string}px` | `${number}% ${string}px ${number}px` | `${number}% ${number}px ${string}px` | `${number}% ${number}px ${number}px` | `${string}px center ${string}px` | `${string}px center ${number}px` | `${string}px bottom ${string}px` | `${string}px bottom ${number}px` | `${string}px top ${string}px` | `${string}px top ${number}px` | `${string}px ${string}% ${string}px` | `${string}px ${string}% ${number}px` | `${string}px ${number}% ${string}px` | `${string}px ${number}% ${number}px` | `${string}px ${string}px ${string}px` | `${string}px ${string}px ${number}px` | `${string}px ${number}px ${string}px` | `${string}px ${number}px ${number}px` | `${number}px center ${string}px` | `${number}px center ${number}px` | `${number}px bottom ${string}px` | `${number}px bottom ${number}px` | `${number}px top ${string}px` | `${number}px top ${number}px` | `${number}px ${string}% ${string}px` | `${number}px ${string}% ${number}px` | `${number}px ${number}% ${string}px` | `${number}px ${number}% ${number}px` | `${number}px ${string}px ${string}px` | `${number}px ${string}px ${number}px` | `${number}px ${number}px ${string}px` | `${number}px ${number}px ${number}px` | undefined;
            fullscreen?: boolean | undefined;
            hoverStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | null | undefined;
            pressStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | null | undefined;
            focusStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | null | undefined;
            exitStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | null | undefined;
            enterStyle?: (import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase>>) | null | undefined;
            horizontal?: boolean | null | undefined;
            contentContainerStyle?: import("react-native").StyleProp<import("react-native").ViewStyle>;
            decelerationRate?: number | "normal" | "fast" | undefined;
            invertStickyHeaders?: boolean | undefined;
            keyboardDismissMode?: "none" | "interactive" | "on-drag" | undefined;
            keyboardShouldPersistTaps?: boolean | "always" | "never" | "handled" | undefined;
            onContentSizeChange?: ((w: number, h: number) => void) | undefined;
            onScrollBeginDrag?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void) | undefined;
            onScrollEndDrag?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void) | undefined;
            onMomentumScrollEnd?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void) | undefined;
            onMomentumScrollBegin?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void) | undefined;
            pagingEnabled?: boolean | undefined;
            scrollEnabled?: boolean | undefined;
            showsHorizontalScrollIndicator?: boolean | undefined;
            showsVerticalScrollIndicator?: boolean | undefined;
            stickyHeaderHiddenOnScroll?: boolean | undefined;
            refreshControl?: React.ReactElement<import("react-native").RefreshControlProps, string | React.JSXElementConstructor<any>> | undefined;
            snapToInterval?: number | undefined;
            snapToOffsets?: number[] | undefined;
            snapToStart?: boolean | undefined;
            snapToEnd?: boolean | undefined;
            stickyHeaderIndices?: number[] | undefined;
            disableIntervalMomentum?: boolean | undefined;
            disableScrollViewPanResponder?: boolean | undefined;
            StickyHeaderComponent?: React.ComponentType<any> | undefined;
            alwaysBounceHorizontal?: boolean | undefined;
            alwaysBounceVertical?: boolean | undefined;
            automaticallyAdjustContentInsets?: boolean | undefined;
            automaticallyAdjustKeyboardInsets?: boolean | undefined;
            automaticallyAdjustsScrollIndicatorInsets?: boolean | undefined;
            bounces?: boolean | undefined;
            bouncesZoom?: boolean | undefined;
            canCancelContentTouches?: boolean | undefined;
            centerContent?: boolean | undefined;
            contentInset?: import("react-native").Insets | undefined;
            contentOffset?: import("react-native").PointProp | undefined;
            contentInsetAdjustmentBehavior?: "always" | "never" | "automatic" | "scrollableAxes" | undefined;
            directionalLockEnabled?: boolean | undefined;
            indicatorStyle?: "black" | "white" | "default" | undefined;
            maintainVisibleContentPosition?: {
                autoscrollToTopThreshold?: number | null | undefined;
                minIndexForVisible: number;
            } | null | undefined;
            maximumZoomScale?: number | undefined;
            minimumZoomScale?: number | undefined;
            onScrollAnimationEnd?: (() => void) | undefined;
            pinchGestureEnabled?: boolean | undefined;
            scrollEventThrottle?: number | undefined;
            scrollIndicatorInsets?: import("react-native").Insets | undefined;
            scrollToOverflowEnabled?: boolean | undefined;
            scrollsToTop?: boolean | undefined;
            snapToAlignment?: "center" | "end" | "start" | undefined;
            onScrollToTop?: ((event: import("react-native").NativeSyntheticEvent<import("react-native").NativeScrollEvent>) => void) | undefined;
            zoomScale?: number | undefined;
            endFillColor?: import("react-native").ColorValue | undefined;
            scrollPerfTag?: string | undefined;
            overScrollMode?: "auto" | "always" | "never" | undefined;
            nestedScrollEnabled?: boolean | undefined;
            fadingEdgeLength?: number | undefined;
            persistentScrollbar?: boolean | undefined;
        } & React.RefAttributes<import("react-native").ScrollView>>;
    };
    Adapt: (({ platform, when, children }: import("@tamagui/adapt").AdaptProps) => any) & {
        Contents: {
            (props: any): React.FunctionComponentElement<any>;
            shouldForwardSpace: boolean;
        };
    };
};
export declare const DialogSheetContents: {
    ({ name, ...props }: {
        name: string;
        context: Omit<DialogContextValue, 'sheetBreakpoint'>;
    }): JSX.Element;
    displayName: string;
};
export { createDialogScope, Dialog, DialogTrigger, DialogPortal, DialogOverlay, DialogContent, DialogTitle, DialogDescription, DialogClose, DialogWarningProvider, };
export type { DialogProps, DialogTriggerProps, DialogPortalProps, DialogOverlayProps, DialogContentProps, DialogTitleProps, DialogDescriptionProps, DialogCloseProps, };
//# sourceMappingURL=Dialog.d.ts.map