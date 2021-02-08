import React from "react";
import Establishments from "./Establishments";
import Messages from "./Messages";
import Enquiries from "./EnquiriesFetch";

function AdminDashboard() {
  return (
    <>
      <Establishments />
      <Messages />
      <Enquiries />
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
