import { Divider, OrderedList, OrderedListDataItem, Text } from 'components';

import { AppLayout } from 'layouts';

import styles from './PrivacyPolicy.module.scss';

enum Section {
  WHAT_INFORMATION_DO_WE_COLLECT = 'what-information-do-we-collect',
  HOW_DO_WE_PROCESS_YOUR_INFORMATION = 'how-do-we-process-your-information',
  WHAT_LEGAL_BASES_DO_WE_RELY_ON_TO_PROCESS_YOUR_PERSONAL_INFORMATION = 'what-legal-bases-do-we-rely-on-to-process-your-personal-information',
  WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION = 'when-and-with-whom-do-we-share-your-personal-information',
  DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES = 'do-we-use-cookies-and-other-tracking-technologies',
  IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY = 'is-your-information-transferred-internationally',
  HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION = 'how-long-do-we-keep-your-information',
  DO_WE_COLLECT_INFORMATION_FROM_MINORS = 'do-we-collect-information-from-minors',
  WHAT_ARE_YOUR_PRIVACY_RIGHTS = 'what-are-your-privacy-rights',
  CONTROLS_FOR_DO_NOT_TRACK_FEATURES = 'controls-for-do-not-track-features',
  DO_CALIFORNIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS = 'do-california-residents-have-specific-privacy-rights',
  DO_VIRGINIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS = 'do-virginia-residents-have-specific-privacy-rights',
  DO_WE_MAKE_UPDATES_TO_THIS_NOTICE = 'do-we-make-updates-to-this-notice',
  HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE = 'how-can-you-contact-us-about-this-notice',
  HOW_CAN_YOU_REVIEW_UPDATE_OR_DELETE_THE_DATA_WE_COLLECT_FROM_YOU = 'how-can-you-review-update-or-delete-the-data-we-collect-from-you',
}

const listOfContents: OrderedListDataItem[] = [
  {
    id: Section.WHAT_INFORMATION_DO_WE_COLLECT,
    children: <a href={'#' + Section.WHAT_INFORMATION_DO_WE_COLLECT}>WHAT INFORMATION DO WE COLLECT?</a>,
  },
  {
    id: Section.HOW_DO_WE_PROCESS_YOUR_INFORMATION,
    children: <a href={'#' + Section.HOW_DO_WE_PROCESS_YOUR_INFORMATION}>HOW DO WE PROCESS YOUR INFORMATION?</a>,
  },
  {
    id: Section.WHAT_LEGAL_BASES_DO_WE_RELY_ON_TO_PROCESS_YOUR_PERSONAL_INFORMATION,
    children: (
      <a href={'#' + Section.WHAT_LEGAL_BASES_DO_WE_RELY_ON_TO_PROCESS_YOUR_PERSONAL_INFORMATION}>
        WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?
      </a>
    ),
  },
  {
    id: Section.WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION,
    children: (
      <a href={'#' + Section.WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION}>
        WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?{' '}
      </a>
    ),
  },
  {
    id: Section.DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES,
    children: (
      <a href={'#' + Section.DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES}>
        DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
      </a>
    ),
  },
  {
    id: Section.IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY,
    children: (
      <a href={'#' + Section.IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY}>
        IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
      </a>
    ),
  },
  {
    id: Section.HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION,
    children: <a href={'#' + Section.HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION}>HOW LONG DO WE KEEP YOUR INFORMATION?</a>,
  },
  {
    id: Section.DO_WE_COLLECT_INFORMATION_FROM_MINORS,
    children: <a href={'#' + Section.DO_WE_COLLECT_INFORMATION_FROM_MINORS}>DO WE COLLECT INFORMATION FROM MINORS?</a>,
  },
  {
    id: Section.WHAT_ARE_YOUR_PRIVACY_RIGHTS,
    children: <a href={'#' + Section.WHAT_ARE_YOUR_PRIVACY_RIGHTS}>WHAT ARE YOUR PRIVACY RIGHTS?</a>,
  },
  {
    id: Section.CONTROLS_FOR_DO_NOT_TRACK_FEATURES,
    children: <a href={'#' + Section.CONTROLS_FOR_DO_NOT_TRACK_FEATURES}>CONTROLS FOR DO-NOT-TRACK FEATURES</a>,
  },
  {
    id: Section.DO_CALIFORNIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS,
    children: (
      <a href={'#' + Section.DO_CALIFORNIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS}>
        DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </a>
    ),
  },
  {
    id: Section.DO_VIRGINIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS,
    children: (
      <a href={'#' + Section.DO_VIRGINIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS}>
        DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
      </a>
    ),
  },
  {
    id: Section.DO_WE_MAKE_UPDATES_TO_THIS_NOTICE,
    children: <a href={'#' + Section.DO_WE_MAKE_UPDATES_TO_THIS_NOTICE}>DO WE MAKE UPDATES TO THIS NOTICE?</a>,
  },
  {
    id: Section.HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE,
    children: (
      <a href={'#' + Section.HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
    ),
  },
  {
    id: Section.HOW_CAN_YOU_REVIEW_UPDATE_OR_DELETE_THE_DATA_WE_COLLECT_FROM_YOU,
    children: (
      <a href={'#' + Section.HOW_CAN_YOU_REVIEW_UPDATE_OR_DELETE_THE_DATA_WE_COLLECT_FROM_YOU}>
        HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
      </a>
    ),
  },
];

const tableOfContentsId = 'table-of-contents';
const withdrawConsentId = 'withdraw-consent';

export const PrivacyPolicy = () => (
  <AppLayout>
    <div className={styles.PrivacyPolicy}>
      <div className={styles.PrivacyPolicy__Article}>
        <Text type="h1" size="heading1">
          PRIVACY POLICY
        </Text>

        <Text size="tiny">Last updated: 31 January, 2023</Text>
      </div>

      <div className={styles.PrivacyPolicy__Article}>
        <Text size="small">
          This privacy notice for Zapal (&ldquo;Company,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;), describes how and why we might collect, store, use, and/or share (&ldquo;process&rdquo;)
          your information when you use our services (&ldquo;Services&rdquo;), such as when you:
        </Text>
        <Text size="small">
          Visit our website at{' '}
          <a href="https://zapal.tech" target="_blank" rel="noreferrer">
            zapal.tech
          </a>
          , or any website of ours that links to this privacy notice
        </Text>
        <Text size="small">Engage with us in other related ways, including any sales, marketing, or events</Text>
        <Text size="small">
          Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices.
          If you do not agree with our policies and practices, please do not use our Services. If you still have any
          questions or concerns, please contact us at <a href="mailto:hello@zapal.tech">hello@zapal.tech</a>.
        </Text>
        SUMMARY OF KEY POINTS
        <Text size="small">
          This summary provides key points from our privacy notice, but you can find out more details about any of these
          topics by clicking the link following each key point or by using our table of contents below to find the
          section you are looking for. You can also click <a href={'#' + tableOfContentsId}>here</a> to go directly to
          our table of contents.
        </Text>
        <Text size="small">
          What personal information do we process? When you visit, use, or navigate our Services, we may process
          personal information depending on how you interact with Zapal and the Services, the choices you make, and the
          products and features you use. Click <a href={'#' + Section.WHAT_INFORMATION_DO_WE_COLLECT}>here</a> to learn
          more.
        </Text>
        <Text size="small">
          Do we process any sensitive personal information? We do not process sensitive personal information.
        </Text>
        <Text size="small">
          Do we receive any information from third parties? We do not receive any information from third parties.
        </Text>
        <Text size="small">
          How do we process your information? We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process
          your information for other purposes with your consent. We process your information only when we have a valid
          legal reason to do so. Click <a href={'#' + Section.HOW_DO_WE_PROCESS_YOUR_INFORMATION}>here</a> to learn
          more.
        </Text>
        <Text size="small">
          In what situations and with which types of parties do we share personal information? We may share information
          in specific situations and with specific categories of third parties. Click{' '}
          <a href={'#' + Section.WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION}>here</a> to learn more.
        </Text>
        <Text size="small">
          What are your rights? Depending on where you are located geographically, the applicable privacy law may mean
          you have certain rights regarding your personal information. Click{' '}
          <a href={'#' + Section.WHAT_ARE_YOUR_PRIVACY_RIGHTS}>here</a> to learn more.
        </Text>
        <Text size="small">
          How do you exercise your rights? The easiest way to exercise your rights is by filling out our data subject
          request form available here: <a href="mailto:data-request@zapal.tech">data-request@zapal.tech</a>, or by
          contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
        </Text>
        <Text size="small">
          Want to learn more about what Zapal does with any information we collect? Click{' '}
          <a href={'#' + tableOfContentsId}>here</a> to review the notice in full.
        </Text>
      </div>

      <Divider />

      <article id={tableOfContentsId} className={styles.PrivacyPolicy__Article}>
        <Text type="h2" size="heading3">
          TABLE OF CONTENTS
        </Text>

        <OrderedList data={listOfContents} />
      </article>

      <Divider />

      <article id={Section.WHAT_INFORMATION_DO_WE_COLLECT} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          1. WHAT INFORMATION DO WE COLLECT?
        </Text>

        <Text size="small">Personal information you disclose to us</Text>

        <Text size="small">In Short: We collect personal information that you provide to us.</Text>

        <Text size="small">
          We collect personal information that you voluntarily provide to us when you express an interest in obtaining
          information about us or our products and Services, when you participate in activities on the Services, or
          otherwise when you contact us.
        </Text>

        <Text size="small">
          Personal Information Provided by You. The personal information that we collect depends on the context of your
          interactions with us and the Services, the choices you make, and the products and features you use. The
          personal information we collect may include the following:
        </Text>

        <ul>
          <li>names</li>
          <li>phone numbers</li>
          <li>email addresses</li>
          <li>job titles</li>
        </ul>

        <Text size="small">Sensitive Information. We do not process sensitive information.</Text>

        <Text size="small">
          All personal information that you provide to us must be true, complete, and accurate, and you must notify us
          of any changes to such personal information.
        </Text>

        <Text size="small">Information automatically collected</Text>

        <Text size="small">
          In Short: Some information — such as your Internet Protocol (IP) address and/or browser and device
          characteristics — is collected automatically when you visit our Services.
        </Text>

        <Text size="small">
          We automatically collect certain information when you visit, use, or navigate the Services. This information
          does not reveal your specific identity (like your name or contact information) but may include device and
          usage information, such as your IP address, browser and device characteristics, operating system, language
          preferences, referring URLs, device name, country, location, information about how and when you use our
          Services, and other technical information. This information is primarily needed to maintain the security and
          operation of our Services, and for our internal analytics and reporting purposes.
        </Text>

        <Text size="small">
          Like many businesses, we also collect information through cookies and similar technologies.
        </Text>

        <Text size="small">The information we collect includes:</Text>
        <Text size="small">
          Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance information our
          servers automatically collect when you access or use our Services and which we record in log files. Depending
          on how you interact with us, this log data may include your IP address, device information, browser type, and
          settings and information about your activity in the Services (such as the date/time stamps associated with
          your usage, pages and files viewed, searches, and other actions you take such as which features you use),
          device event information (such as system activity, error reports (sometimes called &ldquo;crash dumps&rdquo;),
          and hardware settings).
        </Text>
        <Text size="small">
          Device Data. We collect device data such as information about your computer, phone, tablet, or other device
          you use to access the Services. Depending on the device used, this device data may include information such as
          your IP address (or proxy server), device and application identification numbers, location, browser type,
          hardware model, Internet service provider and/or mobile carrier, operating system, and system configuration
          information.
        </Text>
        <Text size="small">
          Location Data. We collect location data such as information about your device&apos;s location, which can be
          either precise or imprecise. How much information we collect depends on the type and settings of the device
          you use to access the Services. For example, we may use GPS and other technologies to collect geolocation data
          that tells us your current location (based on your IP address). You can opt out of allowing us to collect this
          information either by refusing access to the information or by disabling your Location setting on your device.
          However, if you choose to opt out, you may not be able to use certain aspects of the Services.
        </Text>
      </article>

      <Divider />

      <article id={Section.HOW_DO_WE_PROCESS_YOUR_INFORMATION} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          2. HOW DO WE PROCESS YOUR INFORMATION?
        </Text>

        <Text size="small">
          In Short: We process your information to provide, improve, and administer our Services, communicate with you,
          for security and fraud prevention, and to comply with law. We may also process your information for other
          purposes with your consent.
        </Text>

        <Text size="small">
          We process your personal information for a variety of reasons, depending on how you interact with our
          Services, including:
        </Text>
        <Text size="small">
          To deliver and facilitate delivery of services to the user. We may process your information to provide you
          with the requested service.
        </Text>
        <Text size="small">
          To respond to user inquiries/offer support to users. We may process your information to respond to your
          inquiries and solve any potential issues you might have with the requested service.
        </Text>
        <Text size="small">
          To send administrative information to you. We may process your information to send you details about our
          products and services, changes to our terms and policies, and other similar information.
        </Text>
        <Text size="small">
          To fulfill and manage your orders. We may process your information to fulfill and manage your orders,
          payments, returns, and exchanges made through the Services.
        </Text>
        <Text size="small">
          To save or protect an individual&apos;s vital interest. We may process your information when necessary to save
          or protect an individual&apos;s vital interest, such as to prevent harm.
        </Text>
      </article>

      <Divider />

      <article
        id={Section.WHAT_LEGAL_BASES_DO_WE_RELY_ON_TO_PROCESS_YOUR_PERSONAL_INFORMATION}
        className={styles.PrivacyPolicy__Article}
      >
        <Text type="h3" size="heading3">
          3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?
        </Text>

        <Text size="small">
          In Short: We only process your personal information when we believe it is necessary and we have a valid legal
          reason (i.e., legal basis) to do so under applicable law, like with your consent, to comply with laws, to
          provide you with services to enter into or fulfill our contractual obligations, to protect your rights, or to
          fulfill our legitimate business interests.
        </Text>

        <Text size="small">If you are located in the EU or UK, this section applies to you.</Text>

        <Text size="small">
          The General Data Protection Regulation (GDPR) and UK GDPR require us to explain the valid legal bases we rely
          on in order to process your personal information. As such, we may rely on the following legal bases to process
          your personal information:
        </Text>
        <Text size="small">
          Consent. We may process your information if you have given us permission (i.e., consent) to use your personal
          information for a specific purpose. You can withdraw your consent at any time. Click{' '}
          <a href={'#' + withdrawConsentId}>here</a> to learn more.
        </Text>
        <Text size="small">
          Performance of a Contract. We may process your personal information when we believe it is necessary to fulfill
          our contractual obligations to you, including providing our Services or at your request prior to entering into
          a contract with you.
        </Text>
        <Text size="small">
          Legal Obligations. We may process your information where we believe it is necessary for compliance with our
          legal obligations, such as to cooperate with a law enforcement body or regulatory agency, exercise or defend
          our legal rights, or disclose your information as evidence in litigation in which we are involved.
        </Text>
        <Text size="small">
          Vital Interests. We may process your information where we believe it is necessary to protect your vital
          interests or the vital interests of a third party, such as situations involving potential threats to the
          safety of any person.
        </Text>

        <Text size="small">If you are located in Canada, this section applies to you.</Text>

        <Text size="small">
          We may process your information if you have given us specific permission (i.e., express consent) to use your
          personal information for a specific purpose, or in situations where your permission can be inferred (i.e.,
          implied consent). You can withdraw your consent at any time. Click <a href={'#' + withdrawConsentId}>here</a>{' '}
          to learn more.
        </Text>

        <Text size="small">
          In some exceptional cases, we may be legally permitted under applicable law to process your information
          without your consent, including, for example:
        </Text>
        <Text size="small">
          If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
        </Text>
        <Text size="small">For investigations and fraud detection and prevention</Text>
        <Text size="small">For business transactions provided certain conditions are met</Text>
        <Text size="small">
          If it is contained in a witness statement and the collection is necessary to assess, process, or settle an
          insurance claim
        </Text>
        <Text size="small">For identifying injured, ill, or deceased persons and communicating with next of kin</Text>
        <Text size="small">
          If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
        </Text>
        <Text size="small">
          If it is reasonable to expect collection and use with consent would compromise the availability or the
          accuracy of the information and the collection is reasonable for purposes related to investigating a breach of
          an agreement or a contravention of the laws of Canada or a province
        </Text>
        <Text size="small">
          If disclosure is required to comply with a subpoena, warrant, court order, or rules of the court relating to
          the production of records
        </Text>
        <Text size="small">
          If it was produced by an individual in the course of their employment, business, or profession and the
          collection is consistent with the purposes for which the information was produced
        </Text>
        <Text size="small">If the collection is solely for journalistic, artistic, or literary purposes</Text>
        <Text size="small">If the information is publicly available and is specified by the regulations</Text>
      </article>

      <Divider />

      <article
        id={Section.WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION}
        className={styles.PrivacyPolicy__Article}
      >
        <Text type="h3" size="heading3">
          4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
        </Text>

        <Text size="small">
          In Short: We may share information in specific situations described in this section and/or with the following
          categories of third parties.
        </Text>

        <Text size="small">
          Vendors, Consultants, and Other Third-Party Service Providers. We may share your data with third-party
          vendors, service providers, contractors, or agents (&ldquo;third parties&rdquo;) who perform services for us
          or on our behalf and require access to such information to do that work. We have contracts in place with our
          third parties, which are designed to help safeguard your personal information. This means that they cannot do
          anything with your personal information unless we have instructed them to do it. They will also not share your
          personal information with any organization apart from us. They also commit to protect the data they hold on
          our behalf and to retain it for the period we instruct. The categories of third parties we may share personal
          information with are as follows:
        </Text>
        <Text size="small">Ad Networks</Text>
        <Text size="small">Communication & Collaboration Tools</Text>
        <Text size="small">Data Analytics Services</Text>
        <Text size="small">Sales & Marketing Tools</Text>
        <Text size="small">Social Networks</Text>
        <Text size="small">Affiliate Marketing Programs</Text>

        <Text size="small">We also may need to share your personal information in the following situations:</Text>
        <Text size="small">
          Business Transfers. We may share or transfer your information in connection with, or during negotiations of,
          any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another
          company.
        </Text>
        <Text size="small">
          When we use Google Maps Platform APIs. We may share your information with certain Google Maps Platform APIs
          (e.g., Google Maps API, Places API). To find out more about Google’s Privacy Policy, please refer to this
          link.
        </Text>
        <Text size="small">
          Affiliates. We may share your information with our affiliates, in which case we will require those affiliates
          to honor this privacy notice. Affiliates include our parent company and any subsidiaries, joint venture
          partners, or other companies that we control or that are under common control with us.
        </Text>
        <Text size="small">
          Business Partners. We may share your information with our business partners to offer you certain products,
          services, or promotions.
        </Text>
      </article>

      <Divider />

      <article id={Section.DO_WE_USE_COOKIES_AND_OTHER_TRACKING_TECHNOLOGIES} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
        </Text>

        <Text size="small">
          In Short: We may use cookies and other tracking technologies to collect and store your information.
        </Text>

        <Text size="small">
          We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store
          information. Specific information about how we use such technologies and how you can refuse certain cookies is
          set out in our Cookie Notice.
        </Text>
      </article>

      <Divider />

      <article id={Section.IS_YOUR_INFORMATION_TRANSFERRED_INTERNATIONALLY} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?
        </Text>

        <Text size="small">
          In Short: We may transfer, store, and process your information in countries other than your own.
        </Text>

        <Text size="small">
          Our servers are located in Ukraine. If you are accessing our Services from outside Ukraine, please be aware
          that your information may be transferred to, stored, and processed by us in our facilities and by those third
          parties with whom we may share your personal information (see &ldquo;
          <a href={'#' + Section.WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION}>
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </a>
          &rdquo; above), in Ukraine, and other countries.
        </Text>

        <Text size="small">
          If you are a resident in the European Economic Area (EEA) or United Kingdom (UK), then these countries may not
          necessarily have data protection laws or other similar laws as comprehensive as those in your country.
          However, we will take all necessary measures to protect your personal information in accordance with this
          privacy notice and applicable law.
        </Text>

        <Text size="small">European Commission&apos;s Standard Contractual Clauses:</Text>

        <Text size="small">
          We have implemented measures to protect your personal information, including by using the European
          Commission&apos;s Standard Contractual Clauses for transfers of personal information between our group
          companies and between us and our third-party providers. These clauses require all recipients to protect all
          personal information that they process originating from the EEA or UK in accordance with European data
          protection laws and regulations. Our Standard Contractual Clauses can be provided upon request. We have
          implemented similar appropriate safeguards with our third-party service providers and partners and further
          details can be provided upon request.
        </Text>
      </article>

      <Divider />

      <article id={Section.HOW_LONG_DO_WE_KEEP_YOUR_INFORMATION} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          7. HOW LONG DO WE KEEP YOUR INFORMATION?
        </Text>

        <Text size="small">
          In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy
          notice unless otherwise required by law.
        </Text>

        <Text size="small">
          We will only keep your personal information for as long as it is necessary for the purposes set out in this
          privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or
          other legal requirements).
        </Text>

        <Text size="small">
          When we have no ongoing legitimate business need to process your personal information, we will either delete
          or anonymize such information, or, if this is not possible (for example, because your personal information has
          been stored in backup archives), then we will securely store your personal information and isolate it from any
          further processing until deletion is possible.
        </Text>
      </article>

      <Divider />

      <article id={Section.DO_WE_COLLECT_INFORMATION_FROM_MINORS} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          8. DO WE COLLECT INFORMATION FROM MINORS?
        </Text>

        <Text size="small">
          In Short: We do not knowingly collect data from or market to children under 18 years of age.
        </Text>

        <Text size="small">
          We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, you
          represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such
          minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of
          age has been collected, we will deactivate the account and take reasonable measures to promptly delete such
          data from our records. If you become aware of any data we may have collected from children under age 18,
          please contact us at <a href="mailto:policy@zapal.tech">policy@zapal.tech</a>.
        </Text>
      </article>

      <Divider />

      <article id={Section.WHAT_ARE_YOUR_PRIVACY_RIGHTS} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          9. WHAT ARE YOUR PRIVACY RIGHTS?
        </Text>

        <Text size="small">
          In Short: In some regions, such as the European Economic Area (EEA), United Kingdom (UK), and Canada, you have
          rights that allow you greater access to and control over your personal information. You may review, change, or
          terminate your account at any time.
        </Text>

        <Text size="small">
          In some regions (like the EEA, UK, and Canada), you have certain rights under applicable data protection laws.
          These may include the right (i) to request access and obtain a copy of your personal information, (ii) to
          request rectification or erasure; (iii) to restrict the processing of your personal information; and (iv) if
          applicable, to data portability. In certain circumstances, you may also have the right to object to the
          processing of your personal information. You can make such a request by contacting us by using the contact
          details provided in the section &ldquo;
          <a href={'#' + Section.HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
          &rdquo; below.
        </Text>

        <Text size="small">
          We will consider and act upon any request in accordance with applicable data protection laws.
        </Text>

        <Text size="small">
          If you are located in the EEA or UK and you believe we are unlawfully processing your personal information,
          you also have the right to complain to your local data protection supervisory authority. You can find their
          contact details here:{' '}
          <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noreferrer">
            https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm
          </a>
          .
        </Text>

        <Text size="small">
          If you are located in Switzerland, the contact details for the data protection authorities are available here:{' '}
          <a href="https://www.edoeb.admin.ch/edoeb/en/home.html" target="_blank" rel="noreferrer">
            https://www.edoeb.admin.ch/edoeb/en/home.html
          </a>
          .
        </Text>

        <Text size="small" id={withdrawConsentId}>
          Withdrawing your consent: If we are relying on your consent to process your personal information, which may be
          express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at
          any time. You can withdraw your consent at any time by contacting us by using the contact details provided in
          the section &ldquo;
          <a href={'#' + Section.HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
          &rdquo; below.
        </Text>

        <Text size="small">
          However, please note that this will not affect the lawfulness of the processing before its withdrawal nor,
          when applicable law allows, will it affect the processing of your personal information conducted in reliance
          on lawful processing grounds other than consent.
        </Text>

        <Text size="small">
          Opting out of marketing and promotional communications: You can unsubscribe from our marketing and promotional
          communications at any time by clicking on the unsubscribe link in the emails that we send, or by contacting us
          using the details provided in the section &ldquo;
          <a href={'#' + Section.HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE}>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a>
          &rdquo; below. You will then be removed from the marketing lists. However, we may still communicate with you —
          for example, to send you service-related messages that are necessary for the administration and use of your
          account, to respond to service requests, or for other non-marketing purposes.
        </Text>

        <Text size="small">
          Cookies and similar technologies: Most Web browsers are set to accept cookies by default. If you prefer, you
          can usually choose to set your browser to remove cookies and to reject cookies. If you choose to remove
          cookies or reject cookies, this could affect certain features or services of our Services. To opt out of
          interest-based advertising by advertisers on our Services visit{' '}
          <a href="http://www.aboutads.info/choices" target="_blank" rel="noreferrer">
            http://www.aboutads.info/choices
          </a>
          .
        </Text>

        <Text size="small">
          If you have questions or comments about your privacy rights, you may email us at{' '}
          <a href="mailto:policy@zapal.tech">policy@zapal.tech</a>.
        </Text>
      </article>

      <Divider />

      <article id={Section.CONTROLS_FOR_DO_NOT_TRACK_FEATURES} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          10. CONTROLS FOR DO-NOT-TRACK FEATURES
        </Text>

        <Text size="small">
          Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track
          (&ldquo;DNT&rdquo;) feature or setting you can activate to signal your privacy preference not to have data
          about your online browsing activities monitored and collected. At this stage no uniform technology standard
          for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT
          browser signals or any other mechanism that automatically communicates your choice not to be tracked online.
          If a standard for online tracking is adopted that we must follow in the future, we will inform you about that
          practice in a revised version of this privacy notice.
        </Text>
      </article>

      <Divider />

      <article
        id={Section.DO_CALIFORNIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS}
        className={styles.PrivacyPolicy__Article}
      >
        <Text type="h3" size="heading3">
          11. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </Text>
        <Text size="small">
          In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your
          personal information.
        </Text>
        <Text size="small">
          California Civil Code Section 1798.83, also known as the &ldquo;Shine The Light&rdquo; law, permits our users
          who are California residents to request and obtain from us, once a year and free of charge, information about
          categories of personal information (if any) we disclosed to third parties for direct marketing purposes and
          the names and addresses of all third parties with which we shared personal information in the immediately
          preceding calendar year. If you are a California resident and would like to make such a request, please submit
          your request in writing to us using the contact information provided below.
        </Text>
        <Text size="small">
          If you are under 18 years of age, reside in California, and have a registered account with Services, you have
          the right to request removal of unwanted data that you publicly post on the Services. To request removal of
          such data, please contact us using the contact information provided below and include the email address
          associated with your account and a statement that you reside in California. We will make sure the data is not
          publicly displayed on the Services, but please be aware that the data may not be completely or comprehensively
          removed from all our systems (e.g., backups, etc.).
        </Text>
        <Text size="small">CCPA Privacy Notice</Text>
        <Text size="small">The California Code of Regulations defines a &ldquo;resident&rdquo; as:</Text>
        <Text size="small">
          (1) every individual who is in the State of California for other than a temporary or transitory purpose and
        </Text>
        <Text size="small">
          (2) every individual who is domiciled in the State of California who is outside the State of California for a
          temporary or transitory purpose
        </Text>
        <Text size="small">All other individuals are defined as &ldquo;non-residents&rdquo;.</Text>
        <Text size="small">
          If this definition of &ldquo;resident&rdquo; applies to you, we must adhere to certain rights and obligations
          regarding your personal information.
        </Text>
        <Text size="small">What categories of personal information do we collect?</Text>
        <Text size="small">
          We have collected the following categories of personal information in the past twelve (12) months:
        </Text>
        <Text size="small">Category</Text>
        <Text size="small">Examples</Text>
        <Text size="small">Collected</Text>
        <Text size="small">A. Identifiers</Text>
        <Text size="small">
          Contact details, such as real name, alias, postal address, telephone or mobile contact number, unique personal
          identifier, online identifier, Internet Protocol address, email address, and account name
        </Text>
        <Text size="small">NO</Text>
        <Text size="small">B. Personal information categories listed in the California Customer Records statute</Text>
        <Text size="small">
          Name, contact information, education, employment, employment history, and financial information
        </Text>
        <Text size="small">NO</Text>
        <Text size="small">C. Protected classification characteristics under California or federal law</Text>
        <Text size="small">Gender and date of birth</Text>
        <Text size="small">NO</Text>
        <Text size="small">D. Commercial information</Text>
        <Text size="small">Transaction information, purchase history, financial details, and payment information</Text>
        <Text size="small">NO</Text>
        E. Biometric information Fingerprints and voiceprints
        <Text size="small">NO</Text>
        <Text size="small">F. Internet or other similar network activity</Text>
        <Text size="small">
          Browsing history, search history, online behavior, interest data, and interactions with our and other
          websites, applications, systems, and advertisements
        </Text>
        <Text size="small">NO</Text>
        <Text size="small">G. Geolocation data</Text>
        <Text size="small">Device location</Text>
        <Text size="small">NO</Text>
        <Text size="small">H. Audio, electronic, visual, thermal, olfactory, or similar information</Text>
        <Text size="small">
          Images and audio, video or call recordings created in connection with our business activities
        </Text>
        <Text size="small">NO</Text>
        <Text size="small">I. Professional or employment-related information</Text>
        <Text size="small">
          Business contact details in order to provide you our Services at a business level or job title, work history,
          and professional qualifications if you apply for a job with us
        </Text>
        <Text size="small">NO</Text>
        <Text size="small">J. Education Information</Text>
        <Text size="small">Student records and directory information</Text>
        <Text size="small">NO</Text>
        <Text size="small">K. Inferences drawn from other personal information</Text>
        <Text size="small">
          Inferences drawn from any of the collected personal information listed above to create a profile or summary
          about, for example, an individual’s preferences and characteristics
        </Text>
        <Text size="small">NO</Text>
        <Text size="small">L. Sensitive Personal Information</Text>
        <Text size="small">NO</Text>
        <Text size="small">
          We may also collect other personal information outside of these categories through instances where you
          interact with us in person, online, or by phone or mail in the context of:
        </Text>
        <Text size="small">Receiving help through our customer support channels;</Text>
        <Text size="small">Participation in customer surveys or contests; and</Text>
        <Text size="small">Facilitation in the delivery of our Services and to respond to your inquiries.</Text>
        <Text size="small">How do we use and share your personal information?</Text>
        <Text size="small">Zapal collects and shares your personal information through:</Text>
        <Text size="small">Targeting cookies/Marketing cookies</Text>
        <Text size="small">Social media cookies</Text>
        <Text size="small">Beacons/Pixels/Tags</Text>
        <Text size="small">
          More information about our data collection and sharing practices can be found in this privacy notice.
        </Text>
        <Text size="small">
          You can opt out from the selling or sharing of your personal information by disabling cookies in Cookie
          Preference Settings and clicking on the Do Not Sell or Share My Personal Information link on our homepage.
        </Text>
        <Text size="small">
          You may contact us by email at <a href="mailto:ccpa@zapal.tech">ccpa@zapal.tech</a>, or by referring to the
          contact details at the bottom of this document.
        </Text>
        <Text size="small">
          If you are using an authorized agent to exercise your right to opt out we may deny a request if the authorized
          agent does not submit proof that they have been validly authorized to act on your behalf.
        </Text>
        <Text size="small">Will your information be shared with anyone else?</Text>
        <Text size="small">
          We may disclose your personal information with our service providers pursuant to a written contract between us
          and each service provider. Each service provider is a for-profit entity that processes the information on our
          behalf, following the same strict privacy protection obligations mandated by the CCPA.
        </Text>
        <Text size="small">
          We may use your personal information for our own business purposes, such as for undertaking internal research
          for technological development and demonstration. This is not considered to be &ldquo;selling&rdquo; of your
          personal information.
        </Text>
        <Text size="small">
          Zapal has disclosed the following categories of personal information to third parties for a business or
          commercial purpose in the preceding twelve (12) months:
        </Text>
        <Text size="small">
          The categories of third parties to whom we disclosed personal information for a business or commercial purpose
          can be found under &ldquo;
          <a href={'#' + Section.WHEN_AND_WITH_WHOM_DO_WE_SHARE_YOUR_PERSONAL_INFORMATION}>
            WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
          </a>
          &rdquo;.
        </Text>
        <Text size="small">
          Zapal has sold or shared the following categories of personal information to third parties in the preceding
          twelve (12) months:
        </Text>
        <Text size="small">The categories of third parties to whom we sold personal information are:</Text>
        <Text size="small">The categories of third parties to whom we shared personal information with are:</Text>
        <Text size="small">Ad Networks</Text>
        <Text size="small">Affiliate Marketing Programs</Text>
        <Text size="small">Social Networks</Text>
        <Text size="small">Your rights with respect to your personal data</Text>
        <Text size="small">Right to request deletion of the data — Request to delete</Text>
        <Text size="small">
          You can ask for the deletion of your personal information. If you ask us to delete your personal information,
          we will respect your request and delete your personal information, subject to certain exceptions provided by
          law, such as (but not limited to) the exercise by another consumer of his or her right to free speech, our
          compliance requirements resulting from a legal obligation, or any processing that may be required to protect
          against illegal activities.
        </Text>
        <Text size="small">Right to be informed — Request to know</Text>
        <Text size="small">Depending on the circumstances, you have a right to know:</Text>
        <Text size="small">whether we collect and use your personal information;</Text>
        <Text size="small">the categories of personal information that we collect;</Text>
        <Text size="small">the purposes for which the collected personal information is used;</Text>
        <Text size="small">whether we sell or share personal information to third parties;</Text>
        <Text size="small">
          the categories of personal information that we sold, shared, or disclosed for a business purpose;
        </Text>
        <Text size="small">
          the categories of third parties to whom the personal information was sold, shared, or disclosed for a business
          purpose;
        </Text>
        <Text size="small">
          the business or commercial purpose for collecting, selling, or sharing personal information; and
        </Text>
        <Text size="small">the specific pieces of personal information we collected about you.</Text>
        <Text size="small">
          In accordance with applicable law, we are not obligated to provide or delete consumer information that is
          de-identified in response to a consumer request or to re-identify individual data to verify a consumer
          request.
        </Text>
        <Text size="small">Right to Non-Discrimination for the Exercise of a Consumer&apos;s Privacy Rights</Text>
        <Text size="small">We will not discriminate against you if you exercise your privacy rights.</Text>
        <Text size="small">Right to Limit Use and Disclosure of Sensitive Personal Information</Text>
        <Text size="small">We do not process consumer&apos;s sensitive personal information.</Text>
        <Text size="small">Verification process</Text>
        <Text size="small">
          Upon receiving your request, we will need to verify your identity to determine you are the same person about
          whom we have the information in our system. These verification efforts require us to ask you to provide
          information so that we can match it with information you have previously provided us. For instance, depending
          on the type of request you submit, we may ask you to provide certain information so that we can match the
          information you provide with the information we already have on file, or we may contact you through a
          communication method (e.g., phone or email) that you have previously provided to us. We may also use other
          verification methods as the circumstances dictate.
        </Text>
        <Text size="small">
          We will only use personal information provided in your request to verify your identity or authority to make
          the request. To the extent possible, we will avoid requesting additional information from you for the purposes
          of verification. However, if we cannot verify your identity from the information already maintained by us, we
          may request that you provide additional information for the purposes of verifying your identity and for
          security or fraud-prevention purposes. We will delete such additionally provided information as soon as we
          finish verifying you.
        </Text>
        <Text size="small">Other privacy rights</Text>
        <Text size="small">You may object to the processing of your personal information.</Text>
        <Text size="small">
          You may request correction of your personal data if it is incorrect or no longer relevant, or ask to restrict
          the processing of the information.
        </Text>
        <Text size="small">
          You can designate an authorized agent to make a request under the CCPA on your behalf. We may deny a request
          from an authorized agent that does not submit proof that they have been validly authorized to act on your
          behalf in accordance with the CCPA.
        </Text>
        <Text size="small">
          To exercise these rights, you can contact us by email at <a href="mailto:ccpa@zapal.tech">ccpa@zapal.tech</a>,
          or by referring to the contact details at the bottom of this document. If you have a complaint about how we
          handle your data, we would like to hear from you.
        </Text>
      </article>

      <Divider />

      <article
        id={Section.DO_VIRGINIA_RESIDENTS_HAVE_SPECIFIC_PRIVACY_RIGHTS}
        className={styles.PrivacyPolicy__Article}
      >
        <Text type="h3" size="heading3">
          12. DO VIRGINIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
        </Text>

        <Text size="small">
          In Short: Yes, if you are a resident of Virginia, you may be granted specific rights regarding access to and
          use of your personal information.
        </Text>

        <Text size="small">Virginia CDPA Privacy Notice</Text>

        <Text size="small">Under the Virginia Consumer Data Protection Act (CDPA):</Text>

        <Text size="small">
          &ldquo;Consumer&rdquo; means a natural person who is a resident of the Commonwealth acting only in an
          individual or household context. It does not include a natural person acting in a commercial or employment
          context.
        </Text>

        <Text size="small">
          &ldquo;Personal data&rdquo; means any information that is linked or reasonably linkable to an identified or
          identifiable natural person. &ldquo;Personal data&rdquo; does not include de-identified data or publicly
          available information.
        </Text>

        <Text size="small">
          &ldquo;Sale of personal data&rdquo; means the exchange of personal data for monetary consideration.
        </Text>

        <Text size="small">
          If this definition &ldquo;consumer&rdquo; applies to you, we must adhere to certain rights and obligations
          regarding your personal data.
        </Text>

        <Text size="small">
          The information we collect, use, and disclose about you will vary depending on how you interact with Zapal and
          our Services. To find out more, please visit the following links:
        </Text>
        <Text size="small">Personal data we collect</Text>
        <Text size="small">How we use your personal data</Text>
        <Text size="small">When and with whom we share your personal data</Text>
        <Text size="small">Your rights with respect to your personal data</Text>
        <Text size="small">Right to be informed whether or not we are processing your personal data</Text>
        <Text size="small">Right to access your personal data</Text>
        <Text size="small">Right to correct inaccuracies in your personal data</Text>
        <Text size="small">Right to request deletion of your personal data</Text>
        <Text size="small">Right to obtain a copy of the personal data you previously shared with us</Text>
        <Text size="small">
          Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of
          personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects
          (&ldquo;profiling&rdquo;)
        </Text>
        <Text size="small">
          Zapal has not sold any personal data to third parties for business or commercial purposes. Zapal will not sell
          personal data in the future belonging to website visitors, users, and other consumers.
        </Text>

        <Text size="small">Exercise your rights provided under the Virginia CDPA</Text>

        <Text size="small">
          More information about our data collection and sharing practices can be found in this privacy notice.
        </Text>

        <Text size="small">
          You may contact us by email at <a href="mailto:privacy@zapal.tech">privacy@zapal.tech</a> or at{' '}
          <a href="mailto:data-request@zapal.tech">data-request@zapal.tech</a>, or by referring to the contact details
          at the bottom of this document.
        </Text>

        <Text size="small">
          If you are using an authorized agent to exercise your rights, we may deny a request if the authorized agent
          does not submit proof that they have been validly authorized to act on your behalf.
        </Text>

        <Text size="small">Verification process</Text>

        <Text size="small">
          We may request that you provide additional information reasonably necessary to verify you and your
          consumer&apos;s request. If you submit the request through an authorized agent, we may need to collect
          additional information to verify your identity before processing your request.
        </Text>

        <Text size="small">
          Upon receiving your request, we will respond without undue delay, but in all cases, within forty-five (45)
          days of receipt. The response period may be extended once by forty-five (45) additional days when reasonably
          necessary. We will inform you of any such extension within the initial 45-day response period, together with
          the reason for the extension.
        </Text>

        <Text size="small">Right to appeal</Text>

        <Text size="small">
          If we decline to take action regarding your request, we will inform you of our decision and reasoning behind
          it. If you wish to appeal our decision, please email us at{' '}
          <a href="mailto:privacy@zapal.tech">privacy@zapal.tech</a>. Within sixty (60) days of receipt of an appeal, we
          will inform you in writing of any action taken or not taken in response to the appeal, including a written
          explanation of the reasons for the decisions. If your appeal if denied, you may contact the Attorney General
          to submit a complaint.
        </Text>
      </article>

      <Divider />

      <article id={Section.DO_WE_MAKE_UPDATES_TO_THIS_NOTICE} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          13. DO WE MAKE UPDATES TO THIS NOTICE?
        </Text>

        <Text size="small">
          In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.
        </Text>

        <Text size="small">
          We may update this privacy notice from time to time. The updated version will be indicated by an updated
          &ldquo;Revised&rdquo; date and the updated version will be effective as soon as it is accessible. If we make
          material changes to this privacy notice, we may notify you either by prominently posting a notice of such
          changes or by directly sending you a notification. We encourage you to review this privacy notice frequently
          to be informed of how we are protecting your information.
        </Text>
      </article>

      <Divider />

      <article id={Section.HOW_CAN_YOU_CONTACT_US_ABOUT_THIS_NOTICE} className={styles.PrivacyPolicy__Article}>
        <Text type="h3" size="heading3">
          14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
        </Text>

        <Text size="small">
          If you have questions or comments about this notice, you may email us at{' '}
          <a href="mailto:policy@zapal.tech">policy@zapal.tech</a>.
        </Text>
      </article>

      <Divider />

      <article
        id={Section.HOW_CAN_YOU_REVIEW_UPDATE_OR_DELETE_THE_DATA_WE_COLLECT_FROM_YOU}
        className={styles.PrivacyPolicy__Article}
      >
        <Text type="h3" size="heading3">
          15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
        </Text>

        <Text size="small">
          Based on the applicable laws of your country, you may have the right to request access to the personal
          information we collect from you, change that information, or delete it. To request to review, update, or
          delete your personal information, please email us at:{' '}
          <a href="mailto:data-request@zapal.tech">data-request@zapal.tech</a>.
        </Text>
      </article>
    </div>
  </AppLayout>
);
