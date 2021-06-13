/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Grid,
  TextField,
  MenuItem,
  Button,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';
import { categories, levels, obj } from './SelectTagValues';
import { addCourse } from '../../Redux/Admin/Course/actions';
import fileUpload from '../../CustomHooks/fileUpload';

export const NewCourseForm = () => {
  const classes = useStyles();
  const [formdata, setFormdata] = useState(obj);
  const [file, setFile] = useState(null);
  const { course_name, course_details, author, level, category } = formdata;
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  const handleSubmit = async () => {
    const url = await fileUpload(file);
    console.log(url);
    dispatch(addCourse(formdata)).then(() => alert('Course Added'));
  };

  const handleFileSelect = (e) => {
    const img = e.target.files[0];
    setFile(img);
  };

  return (
    <div>
      <Container className={classes.root}>
        <Typography color="primary" variant="h4" className={classes.heading}>
          Add New Course
        </Typography>
        <Container className={`${classes.formCont}`}>
          <Paper className={classes.paper}>
            <form onSubmit={(e) => e.preventDefault()}>
              <Grid container spacing={2}>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    placeholder="course name"
                    label="course name"
                    required
                    variant="outlined"
                    name="course_name"
                    value={course_name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6}>
                  <TextField
                    fullWidth
                    placeholder="professor's name"
                    label="professor's name"
                    required
                    variant="outlined"
                    name="author"
                    value={author}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={6} className={classes.selectTag}>
                  <TextField
                    fullWidth
                    placeholder="category"
                    label="course category"
                    select
                    value={category}
                    required
                    variant="outlined"
                    name="category"
                    onChange={handleChange}
                  >
                    {categories.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={6} className={classes.selectTag}>
                  <TextField
                    fullWidth
                    placeholder="course level"
                    label="course level"
                    select
                    value={level}
                    required
                    variant="outlined"
                    name="level"
                    onChange={handleChange}
                  >
                    {levels.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item lg={12}>
                  <TextField
                    fullWidth
                    placeholder="course description"
                    label="course description"
                    multiline
                    required
                    variant="outlined"
                    name="course_details"
                    value={course_details}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item lg={12}>
                  <input type="file" onChange={handleFileSelect} />
                </Grid>
                <Grid item lg={12} container justify="flex-end">
                  <Grid item>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      onClick={handleSubmit}
                    >
                      Add
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Container>
      </Container>
    </div>
  );
};
