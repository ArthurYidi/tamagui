import { TamaguiElement } from '@tamagui/core';
import { DialogCloseProps, DialogContentProps, DialogDescriptionProps, DialogOverlayProps, DialogPortalProps, DialogProps, DialogTitleProps, DialogTriggerProps } from '@tamagui/dialog';
import * as React from 'react';
declare const createAlertDialogScope: import("@tamagui/create-context").CreateScope;
type AlertDialogProps = DialogProps & {
    native?: boolean;
};
interface AlertDialogTriggerProps extends DialogTriggerProps {
}
declare const AlertDialogTrigger: React.ForwardRefExoticComponent<AlertDialogTriggerProps & React.RefAttributes<TamaguiElement>>;
interface AlertDialogPortalProps extends DialogPortalProps {
}
declare const AlertDialogPortal: React.FC<AlertDialogPortalProps>;
interface AlertDialogOverlayProps extends DialogOverlayProps {
}
declare const AlertDialogOverlay: React.ForwardRefExoticComponent<AlertDialogOverlayProps & React.RefAttributes<TamaguiElement>>;
interface AlertDialogContentProps extends Omit<DialogContentProps, 'onPointerDownOutside' | 'onInteractOutside'> {
}
declare const AlertDialogContent: React.ForwardRefExoticComponent<AlertDialogContentProps & React.RefAttributes<TamaguiElement>>;
type AlertDialogTitleProps = DialogTitleProps;
declare const AlertDialogTitle: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").TextNonStyleProps, "size" | "unstyled" | keyof import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>> & React.RefAttributes<TamaguiElement>>;
type AlertDialogDescriptionProps = DialogDescriptionProps;
declare const AlertDialogDescription: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").TextNonStyleProps, "size" | "unstyled" | keyof import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").TextStylePropsBase & {
    size?: import("@tamagui/core").FontSizeTokens | undefined;
    unstyled?: boolean | undefined;
}>> & React.RefAttributes<TamaguiElement>>;
type AlertDialogActionProps = DialogCloseProps;
declare const AlertDialogAction: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & {
    displayWhenAdapted?: boolean | undefined;
} & React.RefAttributes<TamaguiElement>>;
interface AlertDialogCancelProps extends DialogCloseProps {
}
declare const AlertDialogCancel: React.ForwardRefExoticComponent<AlertDialogCancelProps & React.RefAttributes<TamaguiElement>>;
declare const AlertDialog: React.FC<AlertDialogProps> & {
    Trigger: React.ForwardRefExoticComponent<AlertDialogTriggerProps & React.RefAttributes<TamaguiElement>>;
    Portal: React.FC<AlertDialogPortalProps>;
    Overlay: React.ForwardRefExoticComponent<AlertDialogOverlayProps & React.RefAttributes<TamaguiElement>>;
    Content: React.ForwardRefExoticComponent<AlertDialogContentProps & React.RefAttributes<TamaguiElement>>;
    Action: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").RNTamaguiViewNonStyleProps, keyof import("@tamagui/core").StackStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").StackStylePropsBase & void>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").StackStylePropsBase & void>> & {
        displayWhenAdapted?: boolean | undefined;
    } & React.RefAttributes<TamaguiElement>>;
    Cancel: React.ForwardRefExoticComponent<AlertDialogCancelProps & React.RefAttributes<TamaguiElement>>;
    Title: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").TextNonStyleProps, "size" | "unstyled" | keyof import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & React.RefAttributes<TamaguiElement>>;
    Description: React.ForwardRefExoticComponent<Omit<import("@tamagui/core").TextNonStyleProps, "size" | "unstyled" | keyof import("@tamagui/core").TextStylePropsBase> & import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & import("@tamagui/core").WithPseudoProps<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }> & import("@tamagui/core").WithShorthands<import("@tamagui/core").WithThemeValues<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>>> & import("@tamagui/core").WithMediaProps<import("@tamagui/core").WithThemeShorthandsAndPseudos<import("@tamagui/core").TextStylePropsBase & {
        size?: import("@tamagui/core").FontSizeTokens | undefined;
        unstyled?: boolean | undefined;
    }>> & React.RefAttributes<TamaguiElement>>;
};
export { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, createAlertDialogScope, };
export type { AlertDialogActionProps, AlertDialogCancelProps, AlertDialogContentProps, AlertDialogDescriptionProps, AlertDialogOverlayProps, AlertDialogPortalProps, AlertDialogProps, AlertDialogTitleProps, AlertDialogTriggerProps, };
//# sourceMappingURL=AlertDialog.d.ts.map