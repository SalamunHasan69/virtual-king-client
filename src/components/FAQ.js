import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQ = () => {
  return (
    <Accordion className='mt-5' defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Web Design</Accordion.Header>
        <Accordion.Body>
          The UX designer role is to make a product or service usable, enjoyable, and accessible. While many companies design user experiences, the term is most often associated with digital design for websites and apps.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Web Development</Accordion.Header>
        <Accordion.Body>
          Web developers create and maintain websites. They are also responsible for the site's technical aspects, such as its performance and capacity, which are measures of a website's speed and how much traffic the site can handle. In addition, web developers may create content for the site.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Motion Graphics</Accordion.Header>
        <Accordion.Body>
          Motion Graphics involves creating graphics and moving them in time and space to achieve an intended goal or tell a story. The motion graphic elements are placed in a sequence of frames to create an illusion of motion.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Graphics Design</Accordion.Header>
        <Accordion.Body>
          Graphic designers create visual concepts, using computer software or by hand, to communicate ideas that inspire, inform, and captivate consumers. They develop the overall layout and production design for applications such as advertisements, brochures, magazines, and reports.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Video Editing</Accordion.Header>
        <Accordion.Body>
          Video editing includes cutting segments (trimming), re-sequencing clips, and adding transitions and other special effects. Linear video editing uses video tape and is edited in a very linear way. Several video clips from different tapes are recorded to one single tape in the order that they will appear.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Cybersecurity</Accordion.Header>
        <Accordion.Body>
          Cybersecurity is the practice of deploying people, policies, processes and technologies to protect organizations, their critical systems and sensitive information from digital attacks.Ethical hacking is a process of detecting vulnerabilities in an application, system, or organization's infrastructure that an attacker can use to exploit an individual or organization. They use this process to prevent cyberattacks and security breaches by lawfully hacking into the systems and looking for weak points.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FAQ;