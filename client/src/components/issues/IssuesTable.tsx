function IssuesTable() {
  return (
    <>
      <h1 className="mb-4">Issues</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>First issue</td>
            <td>First issue description</td>
            <td>time now</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default IssuesTable;
