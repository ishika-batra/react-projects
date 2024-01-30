import { useEffect } from 'react';
import { useState } from 'react';
import JobInfo from './JobInfo';
import data from './data';
import BtnContainer from './BtnContainer';

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  // uncomment
  const [jobs, setJobs] = useState(data);
  // current item

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);

    setIsLoading(false);
  };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  console.log(isLoading);
  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  return (
    <section className="jobs-center">
      {/* button container */}
      <BtnContainer jobs={jobs} />
      {/* job info */}
      <JobInfo jobs={jobs} />
    </section>
  );
};
export default App;
