import React, { Fragment, useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';


import {
    fetchBudget, fetchBudgetedCategories, addTransaction
}
    from 'data/actions/budget.actions';
import { fetchAllCategories } from 'data/actions/common.actions';

import { LoadingIndicator, Modal, Button } from 'components';
import { Grid } from './Budget.css';

import BudgetCategoryList from 'pages/Budget/components/BudgetCategoryList';
import BudgetTransactionsList from 'pages/Budget/components/BudgetTransactionList';
import AddTransactionForm from 'pages/Budget/components/AddTransactionForm';



function Budget({
    commonState, budgetState, allCategories, budget,
    fetchBudget, fetchBudgetedCategories, fetchAllCategories, addTransaction }) {
    const history = useHistory();
    useEffect(() => {
        fetchBudget(1);
        fetchBudgetedCategories(1);
        fetchAllCategories();
    }, [fetchBudget, fetchBudgetedCategories, fetchAllCategories]);
    const isLoaded = useMemo(
        () => !!commonState && Object.keys(commonState).length === 0 && !!budgetState && Object.keys(budgetState).length === 0,
        [commonState, budgetState]);
    const handleSubmitAddTransaction = (values) => {
        addTransaction({
            budgetId: budget.id,
            data: values
        }).then(() => {
            history.goBack();
        })
    }
    return (
        <Fragment>
            <Grid>
                <section>
                    {isLoaded ? <BudgetCategoryList /> : (
                        <LoadingIndicator />
                    )}
                </section>
                <section>
                    {isLoaded ? (
                        <Fragment>
                            <Button variant="regular-color" to="budget/transactions/new">Add new transaction</Button>
                            <BudgetTransactionsList />
                        </Fragment>
                    ) : (
                            // <LoadingIndicator />
                            null
                        )}
                </section>
            </Grid>
            <Switch>
                <Route path="/budget/transactions/new">
                    <Modal>
                        <AddTransactionForm
                            categories={allCategories}
                            groupCategoriesBy="parentCategory.name"
                            onSubmit={handleSubmitAddTransaction}
                        />
                    </Modal>
                </Route>
            </Switch>

        </Fragment>
    )
}

export default connect(state => {
    return {
        budget: state.budget.budget,
        commonState: state.common.loadingState,
        budgetState: state.budget.loadingState,
        allCategories: state.common.allCategories,
    }
}, {
    fetchBudget,
    fetchBudgetedCategories,
    fetchAllCategories,
    addTransaction,
})(Budget)
