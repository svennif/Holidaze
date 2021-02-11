import React from "react";
import AdminNavbar from "./AdminNavbar";

function AdminDashboard({ history }) {
  return (
    <>
      <AdminNavbar history={history} />
    </>
  );
}

export default AdminDashboard;

/**
 *
 * List of enquiries // GET
 *
 * List of messages from contact // GET
 *
 * Create new establishment // POST
 *
 * Update establishments // PATCH
 *
 */
