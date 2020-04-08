import React, { Fragment } from 'react';
import { Grid, List, Label } from 'semantic-ui-react';

import CornerGithub from '../components/CornerGithub/';
import Head from '../components/Head/';
import Contacts from '../components/Contacts/';
import Paper from '../components/Paper/';
import Section from '../components/Section/';
import Experience from '../components/Experience/';
import Education from '../components/Education/';
import MadeHint from '../components/MadeHint/';

const IndexPage = ({ cv: isCv, p: isPrint }) => (
<Fragment>
    <CornerGithub url="https://github.com/soumasandesu" />
    <Paper size="a4">
        <Head
            icon={require("./img/32c35668e16c936f9c5f.jpg")}
            name="Charles Poon"
            sub="Software Developer in Hong Kong"
        >
            {isCv && <Contacts isPrint />}
        </Head>

        <Section className="intro" style={{ marginBottom: "1em" }}>
            <p>
                Results-oriented full-stack programmer with 2+ years experience developing, testing, and maintaining website and applications. 
                Investigated new technologies and put into application elegantly to make sure that HKTVmall remained the leader in industry.
            </p>
        </Section>

        <Section name="Tech Stack">
            <Grid columns={2} divided stackable>
                <Grid.Row>
                    <Grid.Column>
                        <List>
                            <List.Item>
                                Java
                                <List bulleted>
                                    <List.Item>
                                        Maven, NPM, Yarn
                                    </List.Item>
                                    <List.Item>
                                        Spring, Spring Boot, JSP
                                    </List.Item>
                                    <List.Item>
                                        JUnit, Mockito, VisualVM, Selenium
                                    </List.Item>
                                </List>
                            </List.Item>
                            <List.Item>
                                MySQL, Oracle, SQLite, MongoDB, H2
                            </List.Item>
                            <List.Item>
                                EhCache, Redis
                            </List.Item>
                            <List.Item>
                                RabbitMQ
                            </List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List>
                            <List.Item>
                                JavaScript
                                <List bulleted>
                                    <List.Item>
                                        NPM / Yarn, PM2
                                    </List.Item>
                                    <List.Item>
                                        Node.js, React, Angular, Babel, Webpack
                                    </List.Item>
                                    <List.Item>
                                        jQuery, Bootstrap
                                    </List.Item>
                                </List>
                            </List.Item>
                            <List.Item>
                                Python (OpenCV, Numpy, Google App Engine)
                            </List.Item>
                            <List.Item>
                                Docker, Jenkins
                            </List.Item>
                            <List.Item>
                                SVN, Git (GitHub, GitLab)
                            </List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Section>

        <Section name="Experience">
            <Experience>
                <Experience.Item
                    tags={["Java", "Spring/Boot", "RabbitMQ", "Hybris"]}
                    image={require("./img/hktv.png")}
                    position="Programmer II"
                    company="Hong Kong Television Network Limited"
                    period="Sep 2018 - Feb 2020"
                    duties={[
                        "Gather requirements, study for enhancements and co-operate with parties under agile lifecycle",
                        "Develop new features and maintain existing sub-systems: reliable, durable against inter-system errors",
                    ]}
                    projects={[
                        {
                            name: "Physical Store Operation Support system",
                            period: "Sep 2018 - Feb 2020",
                        },
                        {
                            name: "O2O Store POS (backend)",
                            period: "Mar 2019 - Feb 2020",
                        },
                    ]}
                />
                <Experience.Item
                    tags={["ReactJS", "Bootstrap", "Node.js", "Server-side Rendering"]}
                    image={require("./img/hket.png")}
                    position="Developer"
                    company="The Hong Kong Economics Times Limited"
                    period="Jul 2017 - Jun 2018"
                    duties={[
                        "Research, develop and integrate front/back-end projects into legacy system modules",
                        "Research and practise in automation of daily routines",
                        "Participating in daily health check and in-house minor jobs (bug-fix/enhancement)",
                        "Assist in urgent cases",
                    ]}
                    projects={[
                        {
                            image: require("./img/hket_invest.png"),
                            url: "https://invest.hket.com",
                            name: "Investment Channel responsive web",
                            period: "Sep 2017 - Dec 2017",
                        },
                        {
                            image: require("./img/hket_ps.png"),
                            url: "https://ps.hket.com",
                            name: "Property Street Channel responsive web",
                            period: "Jan 2017 - Apr 2017",
                        },
                    ]}
                />
                <Experience.Item
                    tags={["C#"]}
                    image={require("./img/ive.jpg")}
                    position="Junior Programmer (Part-time)"
                    company="Driving Simulator Development Project Office, Vocational Training Council"
                    period="Apr 2014 - Apr 2015"
                    duties={[
                        "Development of customised GUI of version control component for video recordings",
                        "Modules testing",
                    ]}
                />
            </Experience>
        </Section>

        <Section id="wk-skills" name="Workplace Skills">
            <List selection>
                <List.Item>
                    <Label as="a" basic color='red' horizontal>
                        Problem solving
                    </Label>
                    Eager to complete complex tasks with professional knowledge
                </List.Item>
                <List.Item>
                    <Label as="a" basic color='orange' horizontal>
                        Creativity
                    </Label>
                    Willing to improve and use new techniques, either on products or personal knowledge
                </List.Item>
                <List.Item>
                    <Label as="a" basic color='green' horizontal>
                        Critical thinking
                    </Label>
                    Diligent to solve problems in a most efficient and elegant way
                </List.Item>
                <List.Item>
                    <Label as="a" basic color='blue' horizontal>
                        Collaboration
                    </Label>
                    Self-initiated and work well with team members
                </List.Item>
                <List.Item>
                    <Label as="a" basic color='purple' horizontal>
                        Self-management
                    </Label>
                    Able to work under pressure with tight schedule
                </List.Item>
            </List>
        </Section>

        <Section name="Education">
            <Education>
                <Education.Item
                    image={require('./img/hkbu.png')}
                    study="Bachelor of Science (Honours) in Computer Science"
                    school="Hong Kong Baptist University"
                    period="2015 - 2017"
                />
                <Education.Item
                    image={require('./img/ive.jpg')}
                    study="Higher Diploma in Software Engineering"
                    school="Hong Kong Institute of Vocational Education (Lee Wai Lee)"
                    period="2013 - 2015"
                />
            </Education>
        </Section>

        <Section name="Language">
            <List>{
                [
                    "Cantonese (Native)",
                    "English (Proficient)",
                    "Mandarin (Proficient)",
                ].map((e, i) => (<List.Item key={i}>{e}</List.Item>))
            }</List>
        </Section>

        {isCv && (
            <Fragment>
                <Section name="Salary">
                    <div>
                        <h3 style={{ margin: 0 }}>Current</h3>
                        HK$ 26,000 / mo, 12 mo
                    </div>
                    <br/>
                    <div>
                        <h3 style={{ margin: 0 }}>Expected</h3>
                        HK$ 28,000 - HK$ 30,000 / mo. Negotiable.
                    </div>
                </Section>
                <Section name="Availability">
                    Immediate
                </Section>
            </Fragment>
        )}
    </Paper>
    <MadeHint />
</Fragment>
);

IndexPage.getInitialProps = ({ query }) => {
    const props = {
        cv: typeof query.cv === 'string',
        p: typeof query.p === 'string',
    };
    return { query, ...props };
};

export default IndexPage;