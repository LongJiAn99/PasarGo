import React from "react";
import { MenuItem } from "@material-ui/core";

const Region = () => {
  return (
    <div>
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </div>
  );
};

export default Region;

/*
                <FormControl className={classes.formControl}>
                  <InputLabel id="demo-simple-select-label">Region</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={region}
                    onChange={handleChange}
                  >
                    <Region />
                  </Select>
                </FormControl>
                */
