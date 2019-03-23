import { LifecycleFlags } from '../flags';
import { IBindingTargetAccessor } from '../observation';
export interface PropertyAccessor extends IBindingTargetAccessor<Record<string, unknown>, string> {
}
export declare class PropertyAccessor implements PropertyAccessor {
    obj: Record<string, unknown>;
    propertyKey: string;
    constructor(obj: Record<string, unknown>, propertyKey: string);
    getValue(): unknown;
    setValue(value: unknown): void;
    $patch(flags: LifecycleFlags): void;
}
//# sourceMappingURL=property-accessor.d.ts.map