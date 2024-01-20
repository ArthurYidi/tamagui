import { GetProps, RadiusTokens, SizeTokens, StackProps, ThemeValueFallback } from '@tamagui/core';
import React from 'react';
import { Image as RNImage } from 'react-native';
declare const StyledImage: import("@tamagui/core").TamaguiComponent<import("@tamagui/web/types/type-utils").MergePreservingOptional<import("react-native").ImageProps & Omit<StackProps, keyof import("react-native").ImageProps>, {}>, RNImage, {}, {}, {}, typeof RNImage>;
type StyledImageProps = Omit<GetProps<typeof StyledImage>, 'borderRadius'> & {
    borderRadius?: RadiusTokens;
};
type BaseProps = Omit<StyledImageProps, 'width' | 'height' | 'style' | 'onLayout'> & {
    width?: string | number | SizeTokens | ThemeValueFallback;
    height?: string | number | SizeTokens | ThemeValueFallback;
    /**
     * @deprecated use `source` instead to disambiguate width/height style from width/height of the actual image
     */
    src?: string | StyledImageProps['source'];
};
export type ImageProps = BaseProps & Omit<StackProps, keyof BaseProps>;
type RNImageType = typeof RNImage;
type ImageType = React.FC<ImageProps> & {
    getSize: RNImageType['getSize'];
    getSizeWithHeaders: RNImageType['getSizeWithHeaders'];
    prefetch: RNImageType['prefetch'];
    prefetchWithMetadata: RNImageType['prefetchWithMetadata'];
    abortPrefetch: RNImageType['abortPrefetch'];
    queryCache: RNImageType['queryCache'];
};
export declare const Image: ImageType;
export {};
//# sourceMappingURL=Image.d.ts.map