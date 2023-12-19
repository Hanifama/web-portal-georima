import axios from "axios";

export const api = axios.create({
  baseURL: "https://georima.pptik.id/api/v1/",
});

export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3MDIyNTUwNTYsImV4cCI6MTg2MDEwNzg1Nn0.slkgem9gYvAioTqhZSnIBKgC4u2TZXColTS0WBVjAjo";