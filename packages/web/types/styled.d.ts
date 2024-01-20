import { StyledContext } from './helpers/createStyledContext';
import type { GetRef } from './interfaces/GetRef';
import type { GetBaseStyles, GetNonStyledProps, GetProps, GetStyledVariants, GetVariantValues, StaticConfig, StylableComponent, TamaguiComponent, ThemeValueByCategory, VariantDefinitions, VariantSpreadFunction } from './types';
export type CreateTamaguiComponent<ParentComponent extends StylableComponent, Variants, CustomTokenProps extends Record<string, any>, StaticProps> = TamaguiComponent<ParentComponent extends {
    __tama: any;
} ? {
    expandLater: true;
} : GetProps<ParentComponent>, GetRef<ParentComponent>, GetNonStyledProps<ParentComponent>, GetBaseStyles<ParentComponent> & CustomTokenProps, Variants, StaticProps>;
export type AreVariantsUndefined<Variants> = Variants extends void ? true : false;
export type GetVariantAcceptedValues<V> = V extends Object ? {
    [Key in keyof V]?: V[Key] extends VariantSpreadFunction<any, infer Val> ? Val : GetVariantValues<keyof V[Key]>;
} : undefined;
export declare function styled<ParentComponent extends StylableComponent, Variants extends VariantDefinitions<ParentComponent> | void = void, StyledStaticConfig extends Partial<StaticConfig> = {}>(ComponentIn: ParentComponent, options?: GetProps<ParentComponent> & {
    name?: string;
    variants?: Variants | undefined;
    defaultVariants?: GetVariantAcceptedValues<Variants>;
    context?: StyledContext;
    acceptsClassName?: boolean;
}, staticExtractionOptions?: StyledStaticConfig): CreateTamaguiComponent<ParentComponent, AreVariantsUndefined<AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>> extends true ? GetStyledVariants<ParentComponent> : AreVariantsUndefined<GetStyledVariants<ParentComponent>> extends true ? AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants> : { [Key in keyof GetStyledVariants<ParentComponent> | keyof (AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>)]?: (Key extends keyof GetStyledVariants<ParentComponent> ? GetStyledVariants<ParentComponent>[Key] : undefined) | (Key extends keyof (AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>) ? (AreVariantsUndefined<Variants> extends true ? {} : GetVariantAcceptedValues<Variants>)[Key] : undefined) | undefined; }, StyledStaticConfig["acceptTokens"] extends Object ? { [Key_1 in keyof StyledStaticConfig["acceptTokens"]]: ThemeValueByCategory<StyledStaticConfig["acceptTokens"][Key_1]>; } : {}, ParentComponent>;
//# sourceMappingURL=styled.d.ts.map