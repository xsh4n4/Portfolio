
import GitHubCalendar from 'react-github-calendar';

const GitHubChart = () => (
  <section
    className="bg-black text-white px-6 pt-28 md:pt-32 pb-16 scroll-mt-32"
    id="experience"
  >
    <h1 className="text-4xl font-bold text-blue-500 text-center mb-12">
      GitHub<span className="text-white"> Contribution</span>
    </h1>

    <div className="flex justify-center">
      <div className="inline-block max-w-full leading-none">
        <GitHubCalendar username="xsh4n4" />
      </div>
    </div>
  </section>
);

export default GitHubChart;
