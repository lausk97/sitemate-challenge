import IssueItem from "./IssueItem";
import { Issue } from "../../utils/api";

function IssuesTable({ issues, refreshIssues }: { issues: Issue[] }) {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <IssueItem
              key={issue._id}
              issue={issue}
              refreshIssues={refreshIssues}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default IssuesTable;
