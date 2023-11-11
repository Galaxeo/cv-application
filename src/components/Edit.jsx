import { useState } from "react";
function Edit({ status, func }) {
  return (
    <>
      <button onClick={func}>{status ? "Done" : "Edit"}</button>
    </>
  );
}
export default Edit;
