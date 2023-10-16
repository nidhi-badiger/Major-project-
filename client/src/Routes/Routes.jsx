import React, { useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import Home from '../Pages/Home';
import { CourseMaterial } from '../Pages/CourseMaterialPage/CourseMaterial';
import AdminLogin from '../Pages/AdminLogin';
import AdminDashboard from '../Pages/AdminDashboard';
import CoursesList from '../Shared-Components/Searchbar/CoursesList';
import { NewCourseForm } from '../Pages/AdminNewCourseForm/NewCourseForm';
import AdminCoursePage from '../Pages/AdminCoursePage';
import { ProfilePage } from '../Pages/ProfilePage/ProfilePage';
import { EditProfile } from '../Pages/EditProfile/EditProfile';
import SignupPage from '../Pages/SignupPage';
import CategoryCoursesPage from '../Pages/CategoryCoursesPage/CategoryCoursesPage';
import { StudentsList } from '../Pages/AdminCoursePage/StudentsList';
import { recognition } from '../api/VoiceRecognition';

const Routes = () => {
  const history = useHistory();
  const [stopReco, setStopReco] = useState(false);

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript;
    console.log(command);

    if (command.includes('go to') || command.includes('navigate to')) {
      console.log(command);
      if (command.includes('profile') || command.includes('profile page')) {
        history.push('/profile/651c35a1dd9f6409f005e6d6');
      } else if (command.includes('home') || command.includes('home page')) {
        history.push('/');
      } else if (
        command.includes('sign up') ||
        command.includes('join for free')
      ) {
        history.push('/signup');
      } else if (command.includes('data science')) {
        history.push('/browse/Data%20Science');
      } else if (command.includes('web development')) {
        history.push('/browse/Web%20Development');
      } else if (command.includes('machine learning')) {
        history.push('/browse/Machine%20Learning');
      } else if (command.includes('app development')) {
        history.push('/browse/App%20Development');
      } else if (command.includes('computer science')) {
        history.push('/browse/Computer%20Science');
      } else if (command.includes('information technology')) {
        history.push('/browse/Information%20Technology');
      } else if (
        command.includes('maths logic') ||
        command.includes('math') ||
        command.includes('logic')
      ) {
        history.push('/browse/Math%20&%20Logic');
      } else if (command.includes('course') || command.includes('front end')) {
        history.push('/browse/Web%20Development/Frontend');
      } else if (command.includes('aiml') && command.includes('course')) {
        history.push('/browse/Machine%20Learning/AIML%20FULL%20COUSRE');
      }
    } else if (
      command.includes('stop listening') ||
      command.includes('stop recognition') ||
      command.includes('stop recognizing') ||
      command.includes('stop voice controlling') ||
      command.includes('stop voice control')
    ) {
      recognition.stop();
      setStopReco(true);
    }
  };

  recognition.onend = () => {
    if (!stopReco) {
      recognition.start();
    }
  };

  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/browse/:category">
          <CategoryCoursesPage />
        </Route>
        <Route exact path="/browse/:category/:courseName">
          <CourseDetailsPage />
        </Route>
        <Route exact path="/courseMat/:id">
          <CourseMaterial />
        </Route>
        <Route exact path="/search/query/:query">
          <CoursesList />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>

        <Route exact path="/admin/login">
          <AdminLogin />
        </Route>
        <Route exact path="/admin/dashboard">
          <AdminDashboard />
        </Route>
        <Route exact path="/admin/newCourse">
          <NewCourseForm />
        </Route>
        <Route exact path="/admin/course/:id">
          <AdminCoursePage />
        </Route>
        <Route exact path="/admin/course/:id/students">
          <StudentsList />
        </Route>
        <Route exact path="/profile/:id">
          <ProfilePage />
        </Route>
        <Route exact path="/profileForm/:id">
          <EditProfile />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
