export const fetchBudget = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/?_embed=transactions`);

    return promise;
};

export const fetchBudgetedCategories = (id) => {
    const promise = fetch(`${process.env.REACT_APP_API_URL}/budgets/${id}/budgetCategories`);

    return promise;
};

export const addTransactions = ({ budgetId, data }) => {
    const promise = fetch(
        `${process.env.REACT_APP_API_URL}/budgets/${budgetId}/transactions`,
        {
            method: "POST",
            body: JSON.stringify(data)
        }
    );

    return promise;
}