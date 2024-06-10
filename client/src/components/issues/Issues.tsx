import { useState, useEffect } from "react";
import IssuesTable from "./IssuesTable";
import IssueModal from "./IssueModal";
import { Issue, getAllIssues, createIssue } from "../../utils/api";

function Issues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [updateId, setUpdateId] = useState<number>(0);

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
  }, [updateId]);

  const addNewIssue = async (issue: Issue) => {
    const newIssue = await createIssue(issue);
    setIssues([...issues, newIssue]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <h1>Issues</h1>
        <button
          type="button"
          className="px-2 mt-6 bg-sky-500 hover:bg-sky-600"
          onClick={() => setShowModal(true)}
        >
          + Add Issue
        </button>
      </div>
      {issues.length ? (
        <IssuesTable
          refreshIssues={() => setUpdateId(updateId + 1)}
          issues={issues}
        />
      ) : (
        <p className="text-lg">No Issue Found!</p>
      )}

      {showModal ? (
        <IssueModal
          onCloseModal={closeModal}
          onAddNewIssue={addNewIssue}
          nextIndex={issues.length + 1}
        />
      ) : null}
    </>
  );
}

export default Issues;
