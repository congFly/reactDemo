/**
 * Created by 18829 on 2017/10/10.
 */
import React, {Component} from 'react';
import {Tabs} from 'antd';

const TabPane = Tabs.TabPane;

class OrderStatus extends Component {
    render() {
        return (
            <div className="order-status">
                <Tabs>
                    <TabPane tab="全部订单" key="1">全部订单展示</TabPane>
                    <TabPane tab="待确认" key="2">待确认订单展示</TabPane>
                    <TabPane tab="代发货" key="3">代发货订单展示</TabPane>
                    <TabPane tab="待收货" key="4">待收货订单展示</TabPane>
                    <TabPane tab="代开发票" key="5">代开发票订单展示</TabPane>
                    <TabPane tab="代收款" key="6">代收款订单展示</TabPane>
                    <TabPane tab="已完成" key="7">已完成订单展示</TabPane>
                </Tabs>
            </div>
        )
    }
}

export default OrderStatus;