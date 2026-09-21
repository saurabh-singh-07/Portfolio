import QuickActions from "./Ad-component.tsx/QuickActions";
import RecentMsg from "./messages/RecentMsg";
import AllProjects from "./Projects/Allprojects";
import ShowSkills from "./skills/ShowSkills";
import Details from "./Ad-component.tsx/Details";
import { useState } from "react";

function Dashboard() {
  const [skillCount, setSkillCount] = useState<number>(0);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [messageCount, setMessageCount] = useState<number>(0);
  const [educationCount, setEducationCount] = useState<number>(0); 
  return (
    <main className="w-full lg:max-w-375 lg:p-10 py-6">
      {/* Details */}
      <div className="w-full">
        <Details skillCount={skillCount} projectCount={projectCount} messageCount = {messageCount} educationCount = {educationCount} />
      </div>

      {/* Main Dashboard */}
      <div className="mt-3 flex w-full flex-col lg:gap-x-4 gap-4 lg:flex-row">
        
        {/* Left */}
        <div className="w-full flex-2 min-w-0 lg:pl-5 px-8 lg:px-0">
          <AllProjects setProjectCount ={setProjectCount} />
          <ShowSkills setSkillCount ={setSkillCount}/>
        </div>

        {/* Right */}
        <div className="w-full flex-1 min-w-0 mr-6 px-8 lg:px-0">
          <RecentMsg setMessageCount = {setMessageCount} />
          <QuickActions />
        </div>

      </div>
    </main>
  );
}

export default Dashboard;

