import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Poradniki 🐣',
    Svg: require('@site/static/img/kosmos.svg').default,
    description: (
      <>
        Korzystaj z obszernej wiedzy dostępnej na stronie :)  
      </>
    ),
  },
  {
    title: 'Kursy 👨‍🏫',
    Svg: require('@site/static/img/kosmos2.svg').default,
    description: (
      <>
       Wybierz interesującą Cię tematykę i rozpocznij naukę krok po kroku już teraz!
      </>
    ),
  },
  {
    title: 'Artykuły 🚀',
    Svg: require('@site/static/img/kosmos1.svg').default,
    description: (
      <>
       Dowiedz się wiecej o technologii i informatyce
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
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
