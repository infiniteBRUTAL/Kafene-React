import React from 'react'
import classes from './OrderListing.module.css'
import {connect} from "react-redux";


const OrderListing = (props) => {

    const selectedOrder = (order) => {
        props.updateOrder(order)
        props.history.push('/order')
    }

    const renderOrder = (order) => {
        return(
            <tr onClick={(e) => selectedOrder(order)} className={classes.TableRows}>
                <td className={classes.RowDataEntries}>{order.id}</td>
                <td className={classes.RowDataEntries}>{order.customerName}</td>
                <td className={classes.RowDataEntries}>{order.orderDate}</td>
                <td className={classes.RowDataEntries}>{`$${order.amount}`}</td>
                <td className={classes.RowDataEntries}>{order.orderStatus}</td>
            </tr>
        )
    }

    return(
        <div className={classes.MainContainer}>
            <table className={classes.Table}>
                <tr className={classes.HeadingRow}>
                    <th className={classes.TableHeadings}>ID</th>
                    <th className={classes.TableHeadings}>Customer</th>
                    <th className={classes.TableHeadings}>Date</th>
                    <th className={classes.TableHeadings}>Amount</th>
                    <th className={classes.TableHeadings}>Status</th>
                </tr>
                {
                    props.toRender.map((order) => {
                        return renderOrder(order)
                    })
                }
            </table>
        </div>
    )
}

let updateGlobalStoreData = (dispatch) => {
    return{
        updateOrder: (data) => dispatch({
            type: 'UPDATE ACTIVE ORDER',
            data: data
        })
    }
}

export default connect('',updateGlobalStoreData)(OrderListing)