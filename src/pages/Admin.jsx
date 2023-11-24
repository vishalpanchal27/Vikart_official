import React from 'react'

const Admin = (props) => {
    return (
        <div>
            <div className='h-full flex justify-center'>
                <table>
                    <tr>
                        <th>props</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro comercial Moctezuma</td>
                        <td>Francisco Chang</td>
                        <td>Mexico</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Admin
