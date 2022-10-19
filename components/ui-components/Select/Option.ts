type OptionObject = { value: number; label: string };
export type LabelKey = keyof OptionObject;
export type Option = string | { [key in LabelKey]: OptionObject[LabelKey] };
