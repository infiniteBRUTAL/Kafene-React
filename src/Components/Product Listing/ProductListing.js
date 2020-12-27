import React from 'react'
import classes from './ProductListing.module.css'
import { connect } from 'react-redux'


const ProductListing = (props) => {

    let refinedProducts = []
    props.selected.map((product) => {
        let tempArray = eval(`props.${product}`)
        refinedProducts.push(...tempArray)
    })

    refinedProducts.push(...props.unFiltered)

    refinedProducts.pop()
    refinedProducts.pop()

    // props.selected.change(() => {
    //     props.refinedProducts(refinedProducts)
    // })

    const selectedProduct = (product) => {
        props.updateProduct(product)
        props.history.push('/product')
    }

    const renderProducts = (product) => {
        return(
            <tr onClick={(product) => selectedProduct(product)} className={classes.TableRows}>
                <td className={classes.RowDataEntries}>{product.id}</td>
                <td className={classes.RowDataEntries}>{product.medicineName}</td>
                <td className={classes.RowDataEntries}>{product.medicineBrand}</td>
                <td className={classes.RowDataEntries}>{product.expiryDate}</td>
                <td className={classes.RowDataEntries}>{`$${product.unitPrice}`}</td>
                <td className={classes.RowDataEntries}>{product.stock}</td>
            </tr>
        )
    }

    return(
        <div className={classes.MainContainer}>
            <table className={classes.Table}>
                <tr className={classes.HeadingRow}>
                    <th className={classes.TableHeadings}>ID</th>
                    <th className={classes.TableHeadings}>Product Name</th>
                    <th className={classes.TableHeadings}>Product Brand</th>
                    <th className={classes.TableHeadings}>Expiry Date</th>
                    <th className={classes.TableHeadings}>Unit Price</th>
                    <th className={classes.TableHeadings}>Stock</th>
                </tr>
                {
                    props.toRender.map((product) => {
                        return renderProducts(product)
                    })
                }
            </table>
        </div>
    )
}

let updateGlobalStoreData = (dispatch) => {
    return{
        refinedProducts: (data) => dispatch({
            type: 'REFINED PRODUCTS',
            data: data
        }),
        updateProduct: (data) => dispatch({
            type: 'UPDATE ACTIVE PRODUCT',
            data: data
        })
    }
}

export default connect('',updateGlobalStoreData)(ProductListing)