import axios from "axios";
const baseURL = "http://localhost:3001";

export interface Issue {
  _id: string;
  id: number;
  title: string;
  description: string;
  createdAt: Date;
}

export const getAllIssues = async () => {
  const resp = await axios.get(`${baseURL}/issues`);
  return resp.data;
};

export const createIssue = async (newIssue: Issue) => {
  const resp = await axios.post(`${baseURL}/issues`, newIssue, {
    headers: { "Content-Type": "application/json" },
  });
  return resp.data;
};

export const updateIssue = async (updateIssue: Issue) => {
  const resp = await axios.post(
    `${baseURL}/issues/${updateIssue._id}`,
    updateIssue,
    {
      headers: { "Content-Type": "application/json" },
    }
  );
  return resp.data;
};

export const deleteIssue = async (deleteIssueId: string) => {
  const resp = await axios.post(`${baseURL}/issues/${deleteIssueId}`);
  return resp.data;
};
