const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="table-header-task">Task</th>
                <th className="table-header-status">Status</th>
                <th className="table-header-action">Action</th>
            </tr>
        </thead>
    );
}

export default TableHeader;