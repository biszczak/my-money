export const formatCurrency = value => {
    const number = Number(value);

    return new Intl.NumberFormat('pl', { style: 'currency', currency: 'PLN' }).format(number);
};

export const formatDate = string => {
    const date = new Date(string);

    return new Intl.DateTimeFormat('pl').format(date);
}

export const pickIcon = data => {
    let icon = null;
    switch (data) {
        case 'Internet':
            icon = 'RiWifiLine';
            break;
        case "Mobile phone":
            icon = 'RiCellphoneLine';
            break;
        case 'Rent':
            icon = 'RiHome2Line';
            break;
        case 'Alcohol':
            icon = 'RiGobletLine';
            break;
        case 'Grocery':
            icon = 'RiShoppingBasketLine';
            break;
        case 'Chemistry':
            icon = 'RiPaintLine';
            break;
        case 'Fuel':
            icon = 'RiGasStationLine';
            break;

        default:
            icon = 'RiBookmarkLine';
            break;
    }
    return icon;
}