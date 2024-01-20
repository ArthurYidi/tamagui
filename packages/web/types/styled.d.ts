import { StyledContext } from './helpers/createStyledContext';
import type { GetRef } from './interfaces/GetRef';
import type { GetBaseStyles, GetNonStyledProps, GetProps, GetStyledVariants, GetVariantValues, StaticConfig, StylableComponent, TamaguiComponent, ThemeValueByCategory, VariantDefinitions, VariantSpreadFunction } from './types';
type AreVariantsUndefined<Variants> = Variants extends void ? true : false;
type GetVariantAcceptedValues<V> = V extends Object ? {
    [Key in keyof V]?: V[Key] extends VariantSpreadFunction<any, infer Val> ? Val : GetVariantValues<keyof V[Key]>;
} : undefined;
export declare function styled<ParentComponent extends StylableComponent, Variants extends VariantDefinitions<ParentComponent> | void = void, StyledStaticConfig extends Partial<StaticConfig> = {}>(ComponentIn: ParentComponent, options?: GetProps<ParentComponent> & {
    name?: string;
    variants?: Variants | undefined;
    defaultVariants?: GetVariantAcceptedValues<Variants>;
    context?: StyledContext;
    acceptsClassName?: boolean;
}, staticExtractionOptions?: StyledStaticConfig): TamaguiComponent<ParentComponent extends {
    __tama: any;
} ? {
    __tamaDefer: true;
} : GetProps<ParentComponent>, GetRef<ParentComponent>, GetNonStyledProps<ParentComponent>, GetBaseStyles<ParentComponent> & (StyledStaticConfig["acceptTokens"] extends Object ? { [Key in keyof StyledStaticConfig["acceptTokens"]]: ThemeValueByCategory<StyledStaticConfig["acceptTokens"][Key]>; } : {}), AreVariantsUndefined<AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>> extends true ? GetStyledVariants<ParentComponent> : AreVariantsUndefined<GetStyledVariants<ParentComponent>> extends true ? AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants> : { [Key_1 in keyof GetStyledVariants<ParentComponent> | keyof (AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>)]?: (Key_1 extends keyof GetStyledVariants<ParentComponent> ? GetStyledVariants<ParentComponent>[Key_1] : undefined) | (Key_1 extends keyof (AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>) ? (AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>)[Key_1] : undefined) | undefined; }, {}>;
export {};
//# sourceMappingURL=styled.d.ts.map