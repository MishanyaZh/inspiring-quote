import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";

export default function SearchBox({ searchQuery, onSearchQueryChange }) {
  const [searchQueryDraft, setSearchQueryDraft] = useState(searchQuery);
  const [editing, setEditing] = useState(false);
  const hasQuery = searchQueryDraft.length > 0;

  const showEditButton = !editing;
  const showCancelButton = editing;
  const showSearchButton =
    editing && hasQuery && searchQueryDraft !== searchQuery;
  const showDeleteButton = editing;
  const message = hasQuery ? `Filtered by "${searchQuery}"` : "No filter";
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setEditing(false);
        onSearchQueryChange(searchQueryDraft);
      }}
    >
      <Stack m={2} direction="row" justifyContent={"center"}>
        {editing ? (
          <Input
            size="small"
            value={searchQueryDraft}
            onChange={(e) => setSearchQueryDraft(e.target.value)}
            label={message}
          />
        ) : (
          //   <TextField>{message}</TextField>
          <div>{message}</div>
        )}
        {showSearchButton && (
          <ManageSearchIcon
            onClick={() => {
              setEditing(false);
              onSearchQueryChange(searchQueryDraft);
            }}
          />
        )}
        {showEditButton && (
          <EditIcon
            key="edit"
            onClick={() => {
              setEditing(true);
            }}
          />
        )}
        {showCancelButton && (
          <CloseIcon
            onClick={() => {
              setEditing(false);
              setSearchQueryDraft(searchQuery);
            }}
          />
        )}
        {showDeleteButton && (
          <DeleteIcon
            onClick={() => {
              setEditing(false);
              setSearchQueryDraft("");
              onSearchQueryChange("");
            }}
          />
        )}
      </Stack>
    </form>
  );
}
