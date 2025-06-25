// import GitHubCalendar from 'react-github-calendar';

// const GitHubChart = () => {
//   return (
//     <section className="min-h-screen bg-black text-white py-16 px-6" id="experience">
//       <h1 className="text-4xl font-bold text-blue-500 text-center mb-12">GitHub <span className = "text-white">Contribution</span></h1>

//     <div className="flex justify-center my-10">
//       <GitHubCalendar username="suhanask003" />
      
//     </div>
//     </section>
//   );
// };

// export default GitHubChart;
import GitHubCalendar from 'react-github-calendar';

const GitHubChart = () => {
  return (
    <section
      className="min-h-screen bg-black text-white px-6 pt-28 md:pt-32 pb-16 scroll-mt-32"
      id="experience"
    >
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-12">
        GitHub <span className="text-white">Contribution</span>
      </h1>

      <div className="flex justify-center mt-6">
        <GitHubCalendar username="suhanask003" />
      </div>
    </section>
  );
};

export default GitHubChart;
