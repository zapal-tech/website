import { ApiPage } from 'types/api';

import { Card, Container, Divider, Text } from 'components';

import { AppLayout } from 'layouts';

import styles from './CookiesPolicy.module.scss';

export type CookiesPolicyProps = {
  locale?: string;
  page: ApiPage;
};

export const CookiesPolicy: React.FC<CookiesPolicyProps> = () => (
  <AppLayout>
    <div className={styles.CookiesPolicy}>
      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h1" size="heading1" uppercase>
          Cookies Policy
        </Text>

        <Text size="tiny">Last updated: 31 January, 2023</Text>
      </Container>

      <Divider className={styles.CookiesPolicy__Divider} />

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          What are cookies?
        </Text>

        <Text size="small">
          Cookies are small data files that are placed on your computer or mobile device when you visit a website.
          Cookies are widely used by website owners in order to make their websites work, or to work more efficiently,
          as well as to provide reporting information.
        </Text>

        <Text size="small">
          Cookies set by the website owner (in this case, Zapal) are called &ldquo;first-party cookies.&rdquo; Cookies
          set by parties other than the website owner are called &ldquo;third-party cookies.&rdquo; Third-party cookies
          enable third-party features or functionality to be provided on or through the website (e.g., advertising,
          interactive content, and analytics). The parties that set these third-party cookies can recognize your
          computer both when it visits the website in question and also when it visits certain other websites.
        </Text>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          Why do we use cookies?
        </Text>

        <Text size="small">
          We use first- and third-party cookies for several reasons. Some cookies are required for technical reasons in
          order for our Website to operate, and we refer to these as &ldquo;essential&rdquo; or &ldquo;strictly
          necessary&rdquo; cookies. Other cookies also enable us to track and target the interests of our users to
          enhance the experience on our Online Properties. Third parties serve cookies through our Website for
          advertising, analytics, and other purposes. This is described in more detail below.
        </Text>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          How can I control cookies?
        </Text>

        <Text size="small">
          You have the right to decide whether to accept or reject cookies. You can exercise your cookie rights by
          setting your preferences in the Cookie Consent Manager. The Cookie Consent Manager allows you to select which
          categories of cookies you accept or reject. Essential cookies cannot be rejected as they are strictly
          necessary to provide you with services.
        </Text>

        <Text size="small">
          The Cookie Consent Manager can be found in the notification banner and on our website. If you choose to reject
          cookies, you may still use our website though your access to some functionality and areas of our website may
          be restricted. You may also set or amend your web browser controls to accept or refuse cookies.{' '}
        </Text>

        <Text size="small">
          The specific types of first- and third-party cookies served through our Website and the purposes they perform
          are described in the table below (please note that the specific cookies served may vary depending on the
          specific Online Properties you visit):
        </Text>

        <Card frameType="corner" className={styles.CookiesPolicy__CookieCard}>
          <Text size="tiny">
            These cookies collect information that is used either in aggregate form to help us understand how our
            Website is being used or how effective our marketing campaigns are, or to help us customize our Website for
            you.
          </Text>
          <Text size="tiny">Name: _ga</Text>
          <Text size="tiny">
            Purpose: It records a particular ID used to come up with data about website usage by the user. It is a HTTP
            cookie that expires after 2 years.
          </Text>
          <Text size="tiny">Provider: .zapal.tech</Text>
          <Text size="tiny">Service: Google Analytics View Service Privacy Policy </Text>
          <Text size="tiny">Country: United States</Text>
          <Text size="tiny">Type: http_cookie</Text>
          <Text size="tiny">Expires in: 1 year 11 months 29 days</Text>
        </Card>

        <Card frameType="corner" className={styles.CookiesPolicy__CookieCard}>
          <Text size="tiny">Name: _ga_#</Text>
          <Text size="tiny">
            Purpose: Used to distinguish individual users by means of designation of a randomly generated number as
            client identifier, which allows calculation of visits and sessions
          </Text>
          <Text size="tiny">Provider: .zapal.tech</Text>
          <Text size="tiny">Service: Google analytics View Service Privacy Policy </Text>
          <Text size="tiny">Country: United States</Text>
          <Text size="tiny">Type: http_cookie</Text>
          <Text size="tiny">Expires in: 1 year 11 months 29 days</Text>
        </Card>

        <Card frameType="corner" className={styles.CookiesPolicy__CookieCard}>
          <Text size="tiny">
            These cookies are used to make advertising messages more relevant to you. They perform functions like
            preventing the same ad from continuously reappearing, ensuring that ads are properly displayed for
            advertisers, and in some cases selecting advertisements that are based on your interests.
          </Text>
          <Text size="tiny">Name: _fbp</Text>
          <Text size="tiny">
            Purpose: Facebook tracking pixel used to identify visitors for personalized advertising.
          </Text>
          <Text size="tiny">Provider: .zapal.tech</Text>
          <Text size="tiny">Service: Facebook View Service Privacy Policy </Text>
          <Text size="tiny">Country: United States</Text>
          <Text size="tiny">Type: http_cookie</Text>
          <Text size="tiny">Expires in: 2 months 29 days</Text>
        </Card>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          What about other tracking technologies, like web beacons?
        </Text>

        <Text size="small">
          Cookies are not the only way to recognize or track visitors to a website. We may use other, similar
          technologies from time to time, like web beacons (sometimes called &ldquo;tracking pixels&rdquo; or
          &ldquo;clear gifs&rdquo;). These are tiny graphics files that contain a unique identifier that enables us to
          recognize when someone has visited our Website or opened an email including them. This allows us, for example,
          to monitor the traffic patterns of users from one page within a website to another, to deliver or communicate
          with cookies, to understand whether you have come to the website from an online advertisement displayed on a
          third-party website, to improve site performance, and to measure the success of email marketing campaigns. In
          many instances, these technologies are reliant on cookies to function properly, and so declining cookies will
          impair their functioning.
        </Text>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          Do you use Flash cookies or Local Shared Objects?
        </Text>

        <Text size="small">
          Websites may also use so-called &ldquo;Flash Cookies&rdquo; (also known as Local Shared Objects or
          &ldquo;LSOs&rdquo;) to, among other things, collect and store information about your use of our services,
          fraud prevention, and for other site operations.
        </Text>

        <Text size="small">
          If you do not want Flash Cookies stored on your computer, you can adjust the settings of your Flash player to
          block Flash Cookies storage using the tools contained in the Website Storage Settings Panel. You can also
          control Flash Cookies by going to the Global Storage Settings Panel and following the instructions (which may
          include instructions that explain, for example, how to delete existing Flash Cookies (referred to
          &ldquo;information&rdquo; on the Macromedia site), how to prevent Flash LSOs from being placed on your
          computer without your being asked, and (for Flash Player 8 and later) how to block Flash Cookies that are not
          being delivered by the operator of the page you are on at the time).
        </Text>

        <Text size="small">
          Please note that setting the Flash Player to restrict or limit acceptance of Flash Cookies may reduce or
          impede the functionality of some Flash applications, including, potentially, Flash applications used in
          connection with our services or online content.
        </Text>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          Do you serve targeted advertising?
        </Text>

        <Text size="small">
          Third parties may serve cookies on your computer or mobile device to serve advertising through our Website.
          These companies may use information about your visits to this and other websites in order to provide relevant
          advertisements about goods and services that you may be interested in. They may also employ technology that is
          used to measure the effectiveness of advertisements. They can accomplish this by using cookies or web beacons
          to collect information about your visits to this and other sites in order to provide relevant advertisements
          about goods and services of potential interest to you. The information collected through this process does not
          enable us or them to identify your name, contact details, or other details that directly identify you unless
          you choose to provide these.
        </Text>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          How often will you update this Cookies Policy?
        </Text>

        <Text size="small">
          We may update this Cookies Policy from time to time in order to reflect, for example, changes to the cookies
          we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookies Policy
          regularly to stay informed about our use of cookies and related technologies.
        </Text>

        <Text size="small">The date at the top of this Cookies Policy indicates when it was last updated.</Text>
      </Container>

      <Container type="article" className={styles.CookiesPolicy__Article}>
        <Text type="h3" size="heading3">
          Where can I get further information?
        </Text>

        <Text size="small">
          If you have any questions about our use of cookies, please email us at{' '}
          <a href="mailto:policy@zapal.tech">policy@zapal.tech</a>
        </Text>
      </Container>
    </div>
  </AppLayout>
);
