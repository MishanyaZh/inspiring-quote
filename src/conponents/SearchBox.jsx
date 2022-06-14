import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export function useSearchQuery(baseSearchPath) {
  const { searchQuery = "" } = useParams();
  const navigate = useNavigate();
  const handleSearchQueryChange = (newSearchQuery) =>
    navigate(`${baseSearchPath}${encodeURIComponent(newSearchQuery)}`);
  return [searchQuery, handleSearchQueryChange];
}

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
      <Stack
        m={2}
        direction="row"
        justifyContent={"center"}
        alignItems={"center"}
      >
        {editing ? (
          <Input
            value={searchQueryDraft}
            onChange={(e) => setSearchQueryDraft(e.target.value)}
          />
        ) : (
          <Typography color="darkgrey">{message}</Typography>
        )}
        {showSearchButton && (
          <IconButton
            onClick={() => {
              setEditing(false);
              onSearchQueryChange(searchQueryDraft);
            }}
            size="large"
          >
            <ManageSearchIcon color="info" />
          </IconButton>
        )}
        {showEditButton && (
          <IconButton
            onClick={() => {
              setEditing(true);
            }}
            size="large"
          >
            <EditIcon color="primary" key="edit" />
          </IconButton>
        )}
        {showCancelButton && (
          <IconButton
            onClick={() => {
              setEditing(false);
              setSearchQueryDraft(searchQuery);
            }}
            size="large"
          >
            <CloseIcon color="warning" />
          </IconButton>
        )}
        {showDeleteButton && (
          <IconButton
            onClick={() => {
              setEditing(false);
              setSearchQueryDraft("");
              onSearchQueryChange("");
            }}
            size="large"
          >
            <DeleteIcon color="error" />
          </IconButton>
        )}
      </Stack>
    </form>
  );
}
