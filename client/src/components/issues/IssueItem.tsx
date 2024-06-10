import dayjs from "dayjs";

function IssueItem({
  issue,
}: {
  issue: {
    id: number;
    title: string;
    description: string;
    createdAt: Date;
  };
}) {
  return (
    <tr>
      <td>{issue.id}</td>
      <td>{issue.title}</td>
      <td>{issue.description}</td>
      <td>
        {dayjs(issue.createdAt).format("YYYY-MM-DD HH:mm") ?? "Not provided"}
      </td>
    </tr>
  );
}

export default IssueItem;
