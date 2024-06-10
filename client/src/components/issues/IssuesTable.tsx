import { Issue } from "../../utils/api";
import IssueItem from "./IssueItem";

function IssuesTable({ issues }: { issues: Issue[] }) {
  return (
    <>
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
          {issues.map((issue) => (
            <IssueItem key={issue._id} issue={issue} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default IssuesTable;
