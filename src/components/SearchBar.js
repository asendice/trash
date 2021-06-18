import React from "react";
import { Input } from "semantic-ui-react"

const SearchBar = () => {
  return (
    <Input
      circular
      fluid
      size="big"
      icon="search"
      placeholder="Search for anything"
     />
  )

}

export default SearchBar;