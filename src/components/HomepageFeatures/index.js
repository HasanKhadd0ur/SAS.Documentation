import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Real-Time Event Detection',
    Svg: require('@site/static/img/undraw_genius_jvjm.svg').default,
    description: (
      <>
        SAS leverages AI to detect and classify real-world events such as crimes, disasters, and public incidents from social media data in real time.
      </>
    ),
  },
  {
    title: 'Interactive Awareness Map',
    Svg: require('@site/static/img/undraw_screen-time_f7ev.svg').default,
    description: (
      <>
        Explore a dynamic map interface that visualizes live and historical events with rich geospatial context for situational awareness and decision-making.
      </>
    ),
  },
  {
    title: 'Region-Based User Notifications',
    Svg: require('@site/static/img/undraw_email_b5yu.svg').default,
    description: (
      <>
        Users can subscribe to specific regions and receive instant notifications for relevant events, enabling timely responses and localized insights.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
