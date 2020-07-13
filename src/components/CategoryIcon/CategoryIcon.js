import React from 'react';
// import PropTypes from 'prop-types';
import 'styled-components/macro';
import {
    RiWifiLine,
    RiCellphoneLine,
    RiHome2Line,
    RiGobletLine,
    RiShoppingBasketLine,
    RiPaintLine,
    RiGasStationLine,
    RiBookmarkLine,
    RiMovie2Line,
    RiWechatLine,
    RiMusicLine,
    RiBook2Line
} from "react-icons/ri";
import { iconsColors } from 'utils/theme';

function CategoryIcon({ name, parentCategoryId }) {

    let icon = null;
    if (typeof parentCategoryId === 'object') {
        let realParentId;
        parentCategoryId.forEach(item => {
            if (item) realParentId = item
        })
        parentCategoryId = realParentId
    }
    const color = iconsColors.icons.colors[parentCategoryId];

    switch (name) {
        case 'Internet':
            icon = <RiWifiLine />;
            break;
        case 'Mobile phone':
            icon = <RiCellphoneLine />;
            break;
        case 'Rent':
            icon = <RiHome2Line />;
            break;
        case 'Alcohol':
            icon = <RiGobletLine />;
            break;
        case 'Grocery':
            icon = <RiShoppingBasketLine />;
            break;
        case 'Chemistry':
            icon = <RiPaintLine />;
            break;
        case 'Fuel':
            icon = <RiGasStationLine />;
            break;
        case 'Cinema':
            icon = <RiMovie2Line />;
            break;
        case 'Meetings with friends':
            icon = <RiWechatLine />;
            break;
        case 'Party':
            icon = <RiMusicLine />;
            break;
        case 'Books':
            icon = <RiBook2Line />;
            break;

        default:
            icon = <RiBookmarkLine />;
    }

    return (
        <div className='iconContainer'
            css={`
            background-color: ${color}.1);
            color: ${color}1);
            `} >
            {icon}
        </div>
    )
}

// CategoryIcon.propTypes = {
//     name: PropTypes.string,
//     parentCategoryId: PropTypes.number || PropTypes.array,
// }

export default CategoryIcon;