import React, { useMemo } from 'react';
import { Form, Field } from 'react-final-form';
import { groupBy, noop } from 'lodash';
import { Button } from 'components';

import { Wrapper } from './AddTransactionForm.css';

const required = value => (value ? undefined : 'This field is required!');

function AddTransactionForm({ onSubmit = noop, categories, groupCategoriesBy }) {
    const groupedCategoriesByParentName = groupCategoriesBy
        ? groupBy(categories, groupCategoriesBy)
        : null;
    const categoryItems = useMemo(
        () => groupedCategoriesByParentName
            ? Object.entries(groupedCategoriesByParentName)
                .map(([parentName, categories]) => (
                    <optgroup key={parentName} label={parentName}>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>{category.name}</option>
                        ))}
                    </optgroup>
                ))
            : categories.map(category => (
                <option value={category.id}>{category.name}</option>
            )),
        [groupedCategoriesByParentName, categories]
    )
    return (
        <Wrapper>
            <h3>New Transaction</h3>
            <Form
                onSubmit={onSubmit}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                        <Field name="description" validate={required}>
                            {({ input, meta }) => (
                                <div className='input-container'>
                                    <label>Description</label>
                                    <input {...input} type="text" placeholder="Description" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="amount" validate={required} parse={value => parseFloat(value, 10)}>
                            {({ input, meta }) => (
                                <div className='input-container'>
                                    <label>Amount</label>
                                    <input {...input} type="number" step="0.01" placeholder="Amount" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="categoryId" validate={required}>
                            {({ input, meta }) => (
                                <div className='input-container'>
                                    <label>Category</label>
                                    <select {...input}>
                                        {categoryItems}
                                    </select>
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <Field name="date" validate={required}>
                            {({ input, meta }) => (
                                <div className='input-container'>
                                    <label>Date</label>
                                    <input {...input} type="date" placeholder="Date" />
                                    {meta.error && meta.touched && <span>{meta.error}</span>}
                                </div>
                            )}
                        </Field>
                        <div className="buttons">
                            <Button
                                type="submit"
                                disabled={submitting}
                                variant="regular-color"
                            >Submit</Button>
                            <Button
                                variant="inline-black"
                                onClick={form.reset}
                                disabled={submitting || pristine}>
                                Reset
                            </Button>
                        </div>
                    </form>
                )}
            />
        </Wrapper>
    )
}

export default AddTransactionForm;