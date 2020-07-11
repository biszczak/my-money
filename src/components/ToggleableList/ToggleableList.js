import React, { Fragment, useState, useEffect } from 'react';

import 'styled-components/macro';

const Item = ({ item, onClickHandler, isActive }) => (
    <div>
        <item.Trigger onClick={onClickHandler} />
        <div
            css={`
            position: absolute;
            display: flex;
            left: 0;
            margin-top: 10px;
            @media (max-width: 768px) {
                flex-direction: column;
                position: static;
                margin-bottom: 10px;
              }
        `}
        >
            {isActive && item.children}
        </div>

    </div>
)

function ToggleableList({ items, clickRef }) {
    const [selectedItem, setSelectedItem] = useState();

    useEffect(() => {
        clickRef.current = setSelectedItem;
    }, [clickRef, setSelectedItem])

    return (
        <Fragment>
            {items.map(item => (
                <Item
                    key={item.id}
                    item={item}
                    onClickHandler={setSelectedItem}
                    isActive={selectedItem === item.id}
                />
            ))}
        </Fragment>
    )
}

export default ToggleableList;