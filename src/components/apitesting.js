import { useEffect, useState } from "react"

const DataTable = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('dummyurl').then(response => {
            return response.json();
        }).then(data => {
            setData(data)
        })
    }, [])
}

return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
    </table>
