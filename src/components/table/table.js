import React from 'react'

export class TableRow  extends React.Component 
{
    // constructor(props)
    // {
    //     super(props);
    // }

    render()
    {
        return (
            <tr>
                <td>
                    {this.props.data.id}
                </td>
                <td>
                    {this.props.data.name}
                </td>
                <td>
                    {this.props.data.age}
                </td>
            </tr>
            );
    }
}