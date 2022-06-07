import { useState } from 'react';
import { IItem } from './index';

export function Keys(props: { initialData: IItem[]; sorting: 'ASC' | 'DESC' }) {
    //return <div></div>;
    const [ID, setID] = useState(0);
    const [Name, setName] = useState('');

    if (props.sorting == 'ASC') props.initialData.sort((a, b) => a.id - b.id);
    else props.initialData.sort((a, b) => b.id - a.id);

    return (
        <div>
            {props.initialData.map((item) => {
                if (item.id == ID)
                    return (
                        <input
                            autoFocus={true}
                            onChange={(a) => setName(a.currentTarget.value)}
                            key={item.id}
                            defaultValue={item.name}
                            onKeyDown={(a) => {
                                if (a.key == 'Enter') {
                                    item.name = Name;
                                    setID(0);
                                }
                                if (a.key == 'Escape') setID(0);
                            }}
                        ></input>
                    );
                else
                    return (
                        <div onClick={() => setID(item.id)} key={item.id}>
                            {item.name}
                        </div>
                    );
            })}
        </div>
    );
}
