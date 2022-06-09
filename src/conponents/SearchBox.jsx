import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";

const SearchBox = ({ searchQuery, onSearchQueryChange }) => {
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
      <Stack isInline align="center" justify="center">
        {editing ? (
          <Input
            value={searchQueryDraft}
            onChange={(e) => setSearchQueryDraft(e.target.value)}
          />
        ) : (
          <InputLabel>{message}</InputLabel>
        )}
        {showSearchButton && (
          <IconButton
            onClick={() => {
              setEditing(false);
              onSearchQueryChange(searchQueryDraft);
            }}
            icon="search"
          />
        )}
        {showEditButton && (
          <IconButton
            key="edit"
            icon="edit"
            onClick={() => {
              setEditing(true);
            }}
          />
        )}
        {showCancelButton && (
          <IconButton
            onClick={() => {
              setEditing(false);
              setSearchQueryDraft(searchQuery);
            }}
            icon="close"
          />
        )}
        {showDeleteButton && (
          <IconButton
            onClick={() => {
              setEditing(false);
              setSearchQueryDraft("");
              onSearchQueryChange("");
            }}
            icon="delete"
          />
        )}
      </Stack>
    </form>
  );
};

export default SearchBox;
