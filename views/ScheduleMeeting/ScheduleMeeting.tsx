import { ApiPage } from 'types/api';
import { Page } from 'types/page';

import { Container } from 'components';

// import { Calendly } from 'components/Calendly/Calendly';
import { AppLayout } from 'layouts';

export type ScheduleMeetingProps = Page<{
  page: ApiPage;
}>;

export const ScheduleMeeting: React.FC<ScheduleMeetingProps> = () => (
  <AppLayout>
    <Container>{/* <Calendly /> */}</Container>
  </AppLayout>
);
