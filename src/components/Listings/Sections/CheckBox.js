import React from 'react'
import {CheckBox, Collapse} from 'antd';

const {Panel} = 

const categories = [
    {
        "_id": 1,
        "name": "Food"
    },
    {
        "_id": 2,
        "name": "Women fashion"
    },
    {
        "_id": 3,
        "name": "Men fashion"
    },
]

function CheckBox() {
    return (
        <div>
            <Collapse defaultActiveKey={['0']} >
                <Panel header key="1">
                    {categories.map((value, index) => (
                        <React.Fragment key={index}>
                        <CheckBox
                            onChange
                            type="checkbox"
                            checked
                            />
                            <span>{value.name}</span>
                    </React.Fragment>
                    ))}
                </Panel>
            </Collapse>
        </div>
    )
}

export default CheckBox