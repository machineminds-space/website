import React from 'react';
import Link from 'next/link';

const CodeOfConduct = () => {
  return (
    <div className="w-full p-8">
      <h1 className="text-3xl font-semibold mb-4">Code of Conduct</h1>

      {/* Purpose */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Purpose</h2>
        <p>
          A primary goal of all the conferences and user groups that refer to this Code of Conduct
          is to be inclusive to the largest number of contributors, with the most varied and
          diverse backgrounds possible. As such, we are committed to providing a friendly, safe and
          welcoming environment for all, regardless of gender, sexual orientation, ability,
          ethnicity, socioeconomic status and religion (or lack thereof).
        </p>
        <p>
          This Code of Conduct outlines our expectations for all those who participate in our
          community, as well as the consequences for unacceptable behavior.
        </p>
        <p>
          We invite all those who participate in our events to help us create safe and positive
          experiences for everyone.
        </p>
      </section>

      {/* Open [Source/Culture/Tech] Citizenship */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Open [Source/Culture/Tech] Citizenship</h2>
        <p>
          A supplemental goal of this Code of Conduct is to increase open [source/culture/tech]
          citizenship by encouraging participants to recognize and strengthen the relationships
          between our actions and their effects on our community.
        </p>
        <p>
          Communities mirror the societies in which they exist and positive action is essential to
          counteract the many forms of inequality and abuses of power that exist in society.
        </p>
        <p>
          If you see someone who is making an extra effort to ensure our community is welcoming,
          friendly, and encourages all participants to contribute to the fullest extent, we want to
          know.
        </p>
      </section>

      {/* Expected Behavior */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Expected Behavior</h2>
        <ul className="list-disc list-inside">
          <li>Participate in an authentic and active way. In doing so, you contribute to the health and longevity of this community.</li>
          <li>Exercise consideration and respect in your speech and actions.</li>
          <li>Attempt collaboration before conflict.</li>
          <li>Refrain from demeaning, discriminatory, or harassing behavior and speech.</li>
          <li>
            Be mindful of your surroundings and of your fellow participants. Alert community
            leaders if you notice a dangerous situation, someone in distress, or violations of this
            Code of Conduct, even if they seem inconsequential.
          </li>
        </ul>
      </section>

      {/* Unacceptable Behavior */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Unacceptable Behavior</h2>
        <p>
          Unacceptable behaviors include: intimidating, harassing, abusive, discriminatory,
          derogatory or demeaning speech or actions by any participant in our community online, at
          all related events and in one-on-one communications carried out in the context of
          community business. Community event venues may be shared with members of the public;
          please be respectful to all patrons of these locations.
        </p>
        <p>
          Harassment includes: harmful or prejudicial verbal or written comments related to gender,
          sexual orientation, race, religion, disability; inappropriate use of nudity and/or
          sexual images (including presentation slides); inappropriate depictions of violence
          (including presentation slides); deliberate intimidation, stalking or following;
          harassing photography or recording; sustained disruption of talks or other events;
          inappropriate physical contact, and unwelcome sexual attention.
        </p>
      </section>

      {/* Consequences of Unacceptable Behavior */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Consequences of Unacceptable Behavior</h2>
        <p>
          Unacceptable behavior from any community member, including sponsors and those with
          decision-making authority, will not be tolerated. Anyone asked to stop unacceptable
          behavior is expected to comply immediately.
        </p>
        <p>
          If a community member engages in unacceptable behavior, the community organizers may take
          any action they deem appropriate, up to and including a temporary ban or permanent
          expulsion from the community without warning (and without refund in the case of a paid
          event).
        </p>
      </section>

      {/* If You Witness or Are Subject to Unacceptable Behavior */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          If You Witness or Are Subject to Unacceptable Behavior
        </h2>
        <p>
          If you are subject to or witness unacceptable behavior, or have any other concerns,
          please notify a community organizer as soon as possible. You can find a list of
          organizers to contact for each of the supporters of this code of conduct at the bottom of
          this page. Additionally, community organizers are available to help community members
          engage with local law enforcement or to otherwise help those experiencing unacceptable
          behavior feel safe. In the context of in-person events, organizers will also provide
          escorts as desired by the person experiencing distress.
        </p>
      </section>

      {/* Addressing Grievances */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Addressing Grievances</h2>
        <p>
          If you feel you have been falsely or unfairly accused of violating this Code of Conduct,
          you should notify one of the event organizers with a concise description of your
          grievance. Your grievance will be handled in accordance with our existing governing
          policies.
        </p>
      </section>

      {/* Scope */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Scope</h2>
        <p>
          We expect all community participants (contributors, paid or otherwise; sponsors; and
          other guests) to abide by this Code of Conduct in all community venues—online and
          in-person—as well as in all one-on-one communications pertaining to community business.
        </p>
      </section>

      {/* License and attribution */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">License and attribution</h2>
        <p>
          <Link href="https://berlincodeofconduct.org/">Berlin Code of Conduct</Link> is distributed under a Creative Commons
          Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license. It is based on the
          pdx.rb Code of Conduct.
        </p>
      </section>
    </div>
  );
};

export default CodeOfConduct;