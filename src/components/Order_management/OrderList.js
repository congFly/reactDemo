/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import User from './User'
const users = [
    {username: 'Jerry', age: 21, gender: 'male'},
    {username: 'Tomy', age: 22, gender: 'male'},
    {username: 'Lily', age: 19, gender: 'female'},
    {username: 'Lucy', age: 20, gender: 'female'}
];
class OrderList extends Component {


    render() {
        return (
            <div>
                {users.map((user,i) => <User key={i} user={user} />)}
            </div>
        )
    }
}

export default OrderList;