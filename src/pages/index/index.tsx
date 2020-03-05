import {h, FunctionComponent} from 'preact';
import styles from './style.scss';
import {RouterProps} from '../../interfaces';

const Index: FunctionComponent<RouterProps> = (props) => {
  // eslint-disable-next-line no-console
  console.log(props);

  return (
    <div className={styles.page}>
      <h1>Hello World</h1>
    </div>
  )
};

export default Index as FunctionComponent<Partial<RouterProps>>;
