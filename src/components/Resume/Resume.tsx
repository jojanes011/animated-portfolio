import React from "react";
import Chip from "../Main/Chip";
import ResumeIcon from "../../assets/icons/resume.svg";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const Resume = () => {
  return (
    <div className="flex flex-col items-start space-y-8 my-32">
      <Chip icon={ResumeIcon} name="Resume" />
      <div className="flex flex-row w-full justify-between">
        <div className="flex flex-col w-full">
          <h3 className="text-4xl leading-normal text-green">Experience</h3>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2023 - Present
                  </h6>
                  <h5 className="text-lg">DISC IT - Telefonica Colombia</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    FRONT-END Developer
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2022 - 2023
                  </h6>
                  <h5 className="text-lg">VASS LATAM - Telefonica Colombia</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    FRONT-END Developer
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2021 - 2022
                  </h6>
                  <h5 className="text-lg">INDRA - ENAIRE</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    FRONT-END Developer
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2021
                  </h6>
                  <h5 className="text-lg">Prevalentware</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    Full stack Developer
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2020 - 2021
                  </h6>
                  <h5 className="text-lg">Grupo AFL - CS Studio</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    FRONT-END Developer
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2019 - 2020
                  </h6>
                  <h5 className="text-lg">GEMDA</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    Full stack Developer
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2019
                  </h6>
                  <h5 className="text-lg">Multiactiva El Roble</h5>
                  <h6 className="text-subtitle text-sm mb-16">Internship</h6>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
        <div className="flex flex-col w-full">
          <h3 className="text-4xl leading-normal">Education</h3>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "#2ae98d",
                  }}
                />
                <TimelineConnector
                  sx={{
                    bgcolor: "#2ae98d",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2020 - 2023
                  </h6>
                  <h5 className="text-lg">
                    UNIR - Universidad Internacional de la Rioja
                  </h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    Computer Engineering
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "#2ae98d",
                  }}
                />
                <TimelineConnector
                  sx={{
                    bgcolor: "#2ae98d",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2020
                  </h6>
                  <h5 className="text-lg">
                    Specialization in Mobile Application Development
                  </h5>
                  <h6 className="text-subtitle text-sm mb-16">SENA</h6>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: "#2ae98d",
                  }}
                />
              </TimelineSeparator>
              <TimelineContent>
                <div>
                  <h6 className="text-subtitle text-sm font-semibold mb-8">
                    2017 - 2019
                  </h6>
                  <h5 className="text-lg">SENA</h5>
                  <h6 className="text-subtitle text-sm mb-16">
                    Technology in Analysis and Development of Information
                    Systems
                  </h6>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Resume;
