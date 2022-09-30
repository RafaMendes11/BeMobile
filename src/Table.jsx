import React from 'react'

const Table = ({data}) => {
    return (
        <div className='content'>
        <table>
            <tbody>
                {data.map((item)=>(
                <tr key={item.id}>
                    <td>{item.foto}</td>
                    <td>{item.name}</td>
                    <td>{item.cargo}</td>
                    <td>{item.ano}</td>
                    <td>{item.telefone}</td>
                </tr>
              ))}
            </tbody>
        </table>
        </div>
    )
}

export default Table