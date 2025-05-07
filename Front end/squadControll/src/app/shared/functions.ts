import { FormGroup } from "@angular/forms";

export function isDefined(value: any): boolean
{
    return value !== undefined && value !== null;
}

export function markAsDirtyAndTouched(form: FormGroup, fieldName: string)
{
    const field = form.get(fieldName);

    if (!isDefined(field))
        return;

    field?.markAsDirty();
    field?.markAsTouched();
}

export function markAllAsDirtyAndTouched(form: FormGroup)
{
    if (!isDefined(form))
        return;

    Object.keys(form.controls).forEach(key =>
    {
        form.controls[key].markAsDirty();
        form.controls[key].markAsTouched();
    });
}

export async function tryRunPromise<T>(promise: Promise<T>): Promise<[T | null, any]>
{
    try
    {
        const response = await promise;
        return [response, null];
    } 
    catch (e)
    {
        return [null, e];
    }
}

export function patchForm(form: FormGroup, object: any)
{
    Object.keys(form.controls).forEach(key => {
        form.controls[key].setValue(object[key])
    })
}