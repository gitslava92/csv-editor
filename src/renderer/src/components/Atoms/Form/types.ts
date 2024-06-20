import { FieldValues, UseControllerProps } from 'react-hook-form';
import { FieldPath } from 'react-hook-form/dist/types';

export type ReactHookFormLabelController<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = UseControllerProps<TFieldValues, TName>;
