import React, { useMemo } from 'react';
import { connect } from 'react-redux';
import { groupBy } from 'lodash';
import { CategoryIcon } from 'components';

import { formatCurrency, formatDate } from 'utils';

import { List, ListItem } from './BudgetTransactionList.css';

function BudgetTransactionList({
    transactions, allCategories, budgetedCategories, selectedParentCategoryId
}) {
    const filteredTransactionsBySelectedParentCategory = useMemo(
        () => {
            if (typeof selectedParentCategoryId === 'undefined') {
                return transactions;
            }

            if (selectedParentCategoryId === null) {
                return transactions.filter(transaction => {
                    const hasBudgetedCategory = budgetedCategories
                        .some(budgetedCategory => budgetedCategory.categoryId === transaction.categoryId);

                    return !hasBudgetedCategory;
                })
            }

            return transactions
                .filter(transaction => {
                    try {
                        const category = allCategories
                            .find(category => category.id === transaction.categoryId);
                        const parentCategoryName = category.parentCategory.name;

                        return parentCategoryName === selectedParentCategoryId;

                    } catch (error) {
                        return false;
                    }
                })
        },
        [transactions, allCategories, budgetedCategories, selectedParentCategoryId]
    );

    const groupedTransactions = useMemo(
        () => groupBy(
            filteredTransactionsBySelectedParentCategory,
            transaction => new Date(transaction.date).getUTCDate()
        ),
        [filteredTransactionsBySelectedParentCategory]
    );
    console.log(allCategories)
    return (
        <List>
            <h3>Transactions</h3>
            {Object.entries(groupedTransactions).map(([keyBy, transactions]) => (
                <li>
                    <ul>
                        {transactions.map(transaction => (
                            <ListItem>
                                <div>
                                    <CategoryIcon
                                        parentCategoryId={allCategories.map(category => {
                                            let parentId = null;
                                            // console.log(transaction)
                                            if (category.id === transaction.categoryId) {
                                                parentId = category.parentCategoryId
                                            }
                                            return parentId
                                        })}
                                        name={(allCategories.find(category => category.id === transaction.categoryId) || {}).name} />
                                    <div>
                                        <div>{transaction.description}</div>
                                        <div className='date'>{formatDate(transaction.date)}</div>
                                    </div>
                                </div>
                                <div>{formatCurrency(transaction.amount)}</div>

                                {/* <div>
                                    {allCategories.map(category => {
                                        let parentId = null;
                                        if (category.id === transaction.categoryId) {
                                            parentId = category.parentCategoryId
                                        }
                                        return parentId;
                                    })}
                                </div>
                                <div>
                                    {(allCategories.find(category => category.id === transaction.categoryId) || {}).name}
                                </div> */}
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    )
}

export default connect(state => ({
    transactions: state.budget.budget.transactions,
    budgetedCategories: state.budget.budgetedCategories,
    allCategories: state.common.allCategories,
    selectedParentCategoryId: state.budget.selectedParentCategoryId,
}))(BudgetTransactionList);