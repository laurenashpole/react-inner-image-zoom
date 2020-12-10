import Layout from '../components/Layout';
import styles from './Support.module.css';

const Support = () => {
  return (
    <Layout title="Support">
      <div className={styles.container}>
        <h2 className={styles.heading}>Support</h2>

        <div className={styles.content}>
          <p>If you run into any bugs I missed during my testing or if I left out any feature that would come in handy, please let me know!</p>

          <p>Most of the implementation choices for this component are based on use cases I&apos;ve encountered in the past. For example, I chose a click to zoom trigger because it was requested on previous product detail pages I've worked on. If there&apos;s a demand for zoom on hover or other additional functionality, I&apos;d be open to taking a look.</p>

          <p>If you're interested in contributing, check out the guidelines <a href="https://github.com/laurenashpole/react-inner-image-zoom/blob/master/CONTRIBUTING.md">here</a>.</p>

          <div>
            <a href="https://github.com/laurenashpole/react-inner-image-zoom/issues" className={styles.btn}>
              Submit an issue <span>on Github</span>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
