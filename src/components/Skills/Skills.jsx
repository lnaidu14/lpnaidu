import "./Skills.css";

export function Skills() {
  return (
    <>
      <h2>SKILLS</h2>
      <div className="skills nes-container with-title">
        <p className="title">Primary Programming Languages</p>
        <span className="skills">
          <div>JavaScript · TypeScript · SQL</div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Secondary Programming Languages</p>
        <span className="skills">
          <div>Python · Golang</div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Cloud Providers and Services</p>
        <span className="skills">
          <div>
            Amazon Web Services (Lambda,ECS,ECR,API
            Gateway,SNS,SQS,Cognito,CloudWatch,IoT Core) · Microsoft Azure
            (Azure AD)
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">CICD</p>
        <span className="skills">
          <div>GitHub Actions · GitLab CICD · Terraform</div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Frameworks and Libraries</p>
        <span className="skills">
          <div>
            Node.js · Next.js · React.js · Fiber · Express.js · Jest · Prime
            React · Bootstrap · React Testing Library · Playwright · Cypress ·
            Storybook · React Query · Jotai · Knex
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Databases</p>
        <span className="skills">
          <div>PostgreSQL · MongoDB · SQLite</div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Tools</p>
        <span className="skills">
          <div>
            Docker · Git · Visual Studio Code · POSTMAN · Package Managers (npm,
            pip, go.mod)
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Concepts</p>
        <span className="skills">
          <div>
            RESTful APIs · Serverless · Infrastructure as Code (IaC) · Agile
            Methodology (Scrum, Kanban) · Testing and Quality Assurance
          </div>
        </span>
      </div>
      <div className="skills nes-container with-title">
        <p className="title">Soft Skills</p>
        <span className="skills">
          <div>
            Teamwork · Collaboration · Written and Verbal Communication ·
            Conflict Resolution
          </div>
        </span>
      </div>
    </>
  );
}
