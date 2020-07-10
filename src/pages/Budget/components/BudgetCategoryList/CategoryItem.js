import React from 'react';

import { CategoryItem as Root, CategoryAmount } from './BudgetCategoryList.css';
import { CategoryIcon } from 'components';
import { formatCurrency } from 'utils';

function CategoryItem({ name, item, transactions, parentCategoryId }) {
    const categoryTransactions = transactions
        .filter(transaction => transaction.categoryId === item.id);
    const spentOnCategory = categoryTransactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    const totalLeft = item.budget - spentOnCategory;

    return (
        <Root>
            <CategoryIcon
                name={name}
                parentCategoryId={parentCategoryId} />
            <div className='content'>
                <span>{name}</span>
                <CategoryAmount negative={totalLeft < 0}>
                    {formatCurrency(totalLeft)}
                </CategoryAmount>
            </div>
        </Root>
    )
}

export default CategoryItem;