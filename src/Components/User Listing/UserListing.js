import React from 'react'
import classes from './UserListing.module.css'


const UserListing = (props) => {

    const renderUser = (user) => {

        return(
            <tr className={classes.TableRows}>
                <td className={classes.RowDataEntries}>{user.id}</td>
                <td className={classes.RowDataEntries}>
                    <img className={classes.UserAvatar} src={user.profilePic} />
                </td>
                <td className={classes.RowDataEntries}>{user.fullName}</td>
                <td className={classes.RowDataEntries}>{user.dob}</td>
                <td className={classes.RowDataEntries}>{user.gender}</td>
                <td className={classes.RowDataEntries}>{user.currentCity + ', ' + user.currentCountry}</td>
            </tr>
        )
    }

    return(
        <div className={classes.MainContainer}>
            <table className={classes.Table}>
                <tr className={classes.HeadingRow}>
                    <th className={classes.TableHeadings}>ID</th>
                    <th className={classes.TableHeadings}>User Avatar</th>
                    <th className={classes.TableHeadings}>Full Name</th>
                    <th className={classes.TableHeadings}>DOB</th>
                    <th className={classes.TableHeadings}>Gender</th>
                    <th className={classes.TableHeadings}>Current Location</th>
                </tr>
                {
                    props.toRender.map((user) => {
                        return renderUser(user)
                    })
                }
            </table>
        </div>
    )
}

export default UserListing