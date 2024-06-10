import { useState, useEffect } from "react";
import IssuesTable from "./IssuesTable";
import { Issue, getAllIssues } from "../../utils/api";

function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function getIssues() {
      try {
        const issues = await getAllIssues();
        setIssues(issues);
      } catch (error) {
        console.error(error);
      }
    }

    getIssues();
  }, []);
  return (
    <>
      <h1 className="mb-4">Issues</h1>
      {issues.length ? (
        <IssuesTable issues={issues} />
      ) : (
        <p className="text-lg">No Issue Found!</p>
      )}
    </>
  );
}

export default Issues;
