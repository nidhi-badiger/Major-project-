import React from 'react';
import styled from 'styled-components';

const Cont = styled.div`
  width: 90%;
  margin: auto;
  color: #373a3c;
  margin-top: 20px;
`;

function Syllabus1() {
  const mainArr = [
    {
      week: 1,
      duration: '5 hours',
      title: 'HTML and CSS',
      description: `In this course, we embark on an exciting journey 
      into the world of web development, commencing with a solid foundation in HTML a
      nd CSS. Our initial focus will be on introducing the fundamental concepts of web development, 
      providing you with a 
      comprehensive understanding of how web pages are structured and styled.\n
        `,
      videos: [
        {
          title: 'Introduction and Course Structure',
          videoId: 'l1EssrLxt7E?si=jKsl5jKz04i4AiLy',
        },
        {
          title: 'Getting started with HTML',
          videoId: 'jRAZlTEZi9I?si=hVUbIZyYaBfKljLi',
        },
      ],
      readings: [
        {
          title: 'Welcome',
          time_in_minutes: 4,
        },
        {
          title: 'Solution to Problem 1-4: Straight Flush',
          time_in_minutes: 10,
        },
      ],
      exercises: [
        {
          title: 'Investing Tests',
          time_in_minutes: 30,
        },
      ],
    },
    {
      week: 2,
      duration: '3 hours',
      title: 'CSS Flexbox and Grid',
      description: `In this module, we dive into the dynamic realm of web design by delving into 
      CSS Flexbox and Grid systems. These powerful tools are essential for creating flexible
       and responsive layouts, allowing you to arrange and position 
      elements on a web page with precision and creativity. 
        `,
      videos: [
        {
          title: 'Learn FlexBox',
          videoId: 'zts6uNVnCNs?si=5uiyP0k_wZJnEapi',
        },
        {
          title: 'CSS Grid',
          videoId: 'xBSlwwitD5U?si=KOI9fkz1JPiQzTrE',
        },
      ],
      readings: [
        {
          title: 'Welcome',
          time_in_minutes: 4,
        },
        {
          title: 'Solution to Problem 1-4: Straight Flush',
          time_in_minutes: 10,
        },
      ],
      exercises: [
        {
          title: 'Investing Tests',
          time_in_minutes: 30,
        },
      ],
    },
    {
      week: 3,
      duration: '5 hours',
      title: 'COMMON STRUGGLES',
      description: `
      In this module, we kickstart our exploration of web development 
      with Bootstrap, a versatile and 
      widely-used framework. We begin by introducing the basics of 
      Bootstrap, and then we dive deeper 
      into customization and layout techniques. You'll learn how to 
      harness the power of Bootstrap's responsive grid layout system 
      to create sleek and adaptive web designs. Additionally, we'll delve 
      into utilizing Bootstrap's extensive library of pre-built components, 
      enabling you to efficiently add interactive elements and features to your web 
      projects.
        `,
      videos: [
        {
          title: 'Starting with Bootstrap',
          videoId: 'DUiYVJIVNcA?si=H-XvgRMEoTXNb9UJ',
        },
        {
          title: 'Bootstrap Components',
          videoId: 'IwlAhfeSnp8?si=bMugBkP29E7gG3ip',
        },
      ],
      readings: [
        {
          title: 'Welcome',
          time_in_minutes: 4,
        },
        {
          title: 'Solution to Problem 1-4: Straight Flush',
          time_in_minutes: 10,
        },
      ],
      exercises: [
        {
          title: 'Investing Tests',
          time_in_minutes: 30,
        },
      ],
    },
  ];

  return (
    <Cont>
      <header style={{ textAlign: 'center' }}>
        <h2>Syllabus</h2>
        <h2>What you will learn from this course</h2>
        <h4>Content Rating 92% : (1,831 ratings)</h4>
      </header>

      <div>
        {mainArr.map((week) => {
          return (
            <div key={week.week}>
              <h3>WEEK</h3>
              <h1 style={{ fontSize: '3em' }}>{week.week}</h1>
              <h3>{week.duration} hours to complete</h3>
              <h2>{week.title}</h2>
              <div>
                <p>{week.description}</p>
                <p>
                  {week.videos.length} videos,
                  {week.readings.length} readings, {week.exercises.length}{' '}
                  exercises
                </p>
                <br />
                <div>
                  <h4>{week.videos.length} Videos</h4>
                  {week.videos.map((video) => (
                    <div key={video.videoId} style={{ marginTop: 10 }}>
                      <h3>{video.title}</h3>
                      <br />
                      <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${video.videoId}`}
                        title={video.title}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    </div>
                  ))}
                </div>
                <br />
                <hr style={{ width: '60%' }} />
                <br />
                <h4>{week.readings.length} readings</h4>
                {week.readings.map((el) => (
                  <div key={el.videoId} style={{ marginTop: 10 }}>
                    {el.title} : {el.time_in_minutes} minutes
                  </div>
                ))}
                <br />
                <hr style={{ width: '60%' }} />
                <br />
                <h4>{week.exercises.length} practice exercises</h4>
                {week.exercises.map((el) => (
                  <div key={el.videoId} style={{ marginTop: 10 }}>
                    {el.title} : {el.time_in_minutes} minutes
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Cont>
  );
}

export default Syllabus1;
